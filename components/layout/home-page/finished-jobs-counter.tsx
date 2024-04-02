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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
                  <CountUp end={100} duration={3} />+
                </div>
              )}
            </p>
            <p className="text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={24} duration={4} />
                </div>
              )}
            </p>
            <p className="text-slate-400">Win Awards</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-24">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={20} duration={3} />k
                </div>
              )}
            </p>
            <p className="text-slate-400">Satisfied Clients</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white/80">
              {isVisible && (
                <div>
                  <CountUp end={5} duration={4} />+
                </div>
              )}
            </p>
            <p className="text-slate-400">Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
