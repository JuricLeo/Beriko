"use client";

import CountUp from "react-countup";

export default function FinishedJobCounter() {
  return (
    <section>
      <div className="flex space-x-15 md:space-x-24 justify-center py-12">
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-24">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold">
              <CountUp end={100} duration={2} />+
            </p>
            <p className="text-slate-500">Projects Completed</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold">
              <CountUp end={24} duration={3} />
            </p>
            <p className="text-slate-500">Win Awards</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-24">
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold">
              <CountUp end={20} duration={2} />k
            </p>
            <p className="text-slate-500">Satisfied Clients</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold">
              <CountUp end={5} duration={3} />
            </p>
            <p className="text-slate-500">Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
}
