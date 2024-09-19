"use client";

import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  name: string;
  description: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews();
  }, []);

  async function getReviews() {
    const { data, error } = await supabase.from("reviews").select("*");

    if (data !== null) {
      // @ts-ignore
      setReviews(data);
    } else {
      console.log(error);
    }
  }

  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <h1 className="text-center text-4xl text-semibold">
        Recenzije naših kupaca
      </h1>
      <p className="text-center mt-4 text-lg text-slate-400">
        Pročitajte što su naši zadovoljni kupci rekli o Beriku!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10">
        {reviews.map((review) => (
          <div className="shadow-xl rounded-xl h-fit" key={review.id}>
            <p className="bg-[color:var(--light)] p-4 rounded-xl">
              &quot;{review.description}&quot;
            </p>
            <h3 className="p-3 mr-4 text-end"> - {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
