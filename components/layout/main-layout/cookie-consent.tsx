"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentInfo = localStorage.getItem("cookieConsent");
    const consentTime = consentInfo ? parseInt(consentInfo, 10) : 0;
    const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

    if (!consentInfo || Date.now() - consentTime > threeDaysInMilliseconds) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookieConsent", Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 min-h-[10rem] right-0 bg-newBlack text-newWhite p-4 flex flex-col md:flex-row justify-center items-center space-x-2">
      <p className="text-sm max-w-[600px]">
        Ova web stranica koristi kolačiće kako bi poboljšala vaše iskustvo
        pregledavanja. Nastavkom korištenja ove stranice slažete se s našom
        upotrebom kolačića.
      </p>
      <Button
        onClick={handleConsent}
        className="font-bold text-sm py-2 px-4 rounded mt-4 md:mt-0"
      >
        Razumijem
      </Button>
    </div>
  );
}
