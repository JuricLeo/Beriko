import Team from "@/components/layout/about-page/team";
import { Timeline } from "@/components/layout/about-page/tracing-beam-content";
import Contact from "@/components/layout/home-page/contact";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nama - Beriko",
};

export default function About() {
  return (
    <main>
      <Timeline />
      <FinishedJobCounter />
      <Team />
      <Contact />
    </main>
  );
}
