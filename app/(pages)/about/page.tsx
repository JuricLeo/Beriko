import { StickyScrollRevealDemo } from "@/components/layout/about-page/sticky-scroll-content";
import { Timeline } from "@/components/layout/about-page/tracing-beam-content";

export default function About() {
  return (
    <div>
      <Timeline />
      <StickyScrollRevealDemo />
    </div>
  );
}
