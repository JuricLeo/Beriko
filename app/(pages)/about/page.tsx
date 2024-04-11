import Team from "@/components/layout/about-page/team";
import { Timeline } from "@/components/layout/about-page/tracing-beam-content";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";

export default function About() {
  return (
    <main>
      <Timeline />
      <FinishedJobCounter />
      <Team />
    </main>
  );
}
