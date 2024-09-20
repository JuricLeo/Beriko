import BestSolution from "./long-text/best-solution";
import Dimensions from "./long-text/dimensions";
import Entrepreneur from "./long-text/entrepreneur";
import FreeBonus from "./long-text/free-bonus";
import Hazzard from "./long-text/hazzard";
import LittleThings from "./long-text/little-things";
import Secret from "./long-text/secret";
import TimeAndMoney from "./long-text/time-and-money";
import Warranty from "./long-text/warranty";
import WhatToKnow from "./long-text/what-to-know";

export default function LongText() {
  return (
    <section>
      <Hazzard />
      <WhatToKnow />
      <Entrepreneur />
      <Secret />
      <TimeAndMoney />
      <LittleThings />
      <BestSolution />
      <FreeBonus />
      <Warranty />
      <Dimensions />
    </section>
  )
}
