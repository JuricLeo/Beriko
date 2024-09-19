"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";

export default function UploadImage() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    checkSession();
  }, []);

  async function uploadImage(e: any) {
    let file = e.target.files[0];

    if (!session?.user.id) {
      console.log("User ID is not defined");
      return;
    }

    const { data, error } = await supabase.storage
      .from("gallery-images")
      .upload("gallery/" + uuidv4(), file);
  }

  return (
    <div className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div className={cn(session ? "flex flex-col" : "hidden")}>
        <h2 className="mb-2">
          Dodajte nove slike ovdje:
          <i className="text-gray-400"> ( nakon dodavanja osvježite stranicu kako biste vidjeli promjene! )</i>
        </h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input className="border rounded cursor-pointer" onChange={(e) => uploadImage(e)} id="picture" type="file" />
        </div>
      </div>
    </div>
  );
}
