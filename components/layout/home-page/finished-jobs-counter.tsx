"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function FinishedJobCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="bg-gray-800">
      <div
        ref={ref}
        className="flex space-x-12 md:space-x-24 justify-center py-12"
      >
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-24">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={21} duration={3} />
                </div>
              )}
            </p>
            <p className="text-slate-400">Godina Iskustva</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={8} duration={4} />+
                </div>
              )}
            </p>
            <p className="text-slate-400">Izvrsnih Majstora</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-24">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={4} duration={3} />
                </div>
              )}
            </p>
            <p className="text-slate-400">Države</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={2150} duration={4} />+
                </div>
              )}
            </p>
            <p className="text-slate-400">Zadovoljenih Kupaca</p>
          </div>
        </div>
      </div>
    </section>
  );
}
