"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { useUser } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";

interface Image {
  name: string;
  id: string;
  size: number;
  created_at: string;
}

export default function UploadImage() {
  const [session, setSession] = useState<Session | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const user = useUser();

  const CDNURL =
    "https://cngclmfnevtclmshlwfa.supabase.co/storage/v1/object/public/gallery-images/public/";

  const logOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("gallery-images")
      .list("public/", {
        limit: 100,
        offset: 0,
      });
  
    if (data !== null) {
      // @ts-ignore
      setImages(data);
    } else {
      alert("ERROR");
      console.log(error);
    }
  }

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    checkSession();
    getImages(); // Fetch images immediately, regardless of session
  }, []);

  async function uploadImage(e: any) {
    let file = e.target.files[0];

    if (!session?.user.id) {
      console.log("User ID is not defined");
      return;
    }

    const { data, error } = await supabase.storage
      .from("gallery-images")
      .upload("public/" + uuidv4(), file);

    if (data) {
      getImages(); // Fetch images again after uploading
    } else {
      console.log(error);
    }
  }

  return (
    <div>
      <div className={cn(session ? "flex flex-col" : "hidden")}>
        <div>Hello, {session?.user.email}</div>
        <button onClick={logOut}>Logout</button>
        <input type="file" onChange={(e) => uploadImage(e)} />
      </div>
      {images.length > 0 ? (
        images.map((image) => (
          <img
            key={image.id}
            src={CDNURL + image.name}
            alt={image.name}
          />
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
}