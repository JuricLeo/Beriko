"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";

export default function UploadImage() {
  const [session, setSession] = useState<Session | null>(null);

  const logOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    checkSession();
  }, []);

  return (
    <div>
      <div className={cn(session ? "block" : "hidden")}>
        <div>Hello, {session?.user.email}</div>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}
