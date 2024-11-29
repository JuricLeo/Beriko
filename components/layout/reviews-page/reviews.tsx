"use client";

import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  name: string;
  description: string;
}

export default function Reviews() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    checkSession();
    getReviews();
  }, []);

  const [reviews, setReviews] = useState<Review[]>([]);

  async function getReviews() {
    const { data, error } = await supabase.from("reviews").select("*");

    if (data !== null) {
      // @ts-ignore
      setReviews(data);
    } else {
      console.log(error);
    }
  }

  async function deleteReview(reviewId: any) {
    const { data, error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", reviewId);

    if (error) {
      alert(error);
    } else {
      alert(
        "Recenzija izbrisana. Molimo osvježite stranicu kako biste vidjeli promjene."
      );
      location.reload();
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-left mt-10">
        {reviews.map((review) => (
          <div className="flex flex-col" key={review.id}>
            <div className="shadow-xl rounded-xl h-fit" key={review.id}>
              <p className="bg-[color:var(--light)] p-4 rounded-xl">
                &quot;{review.description}&quot;
              </p>
              <h3 className="p-3 mr-4 text-end"> - {review.name}</h3>
            </div>
            {session && (
              <Trash2
                className="text-rose-600 hover:text-rose-500 cursor-pointer w-12 h-12 mt-1"
                onClick={() => deleteReview(review.id)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
