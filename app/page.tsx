import Contact from "@/components/layout/contact";
import FinishedJobCounter from "@/components/layout/finished-jobs-counter";

export default function Home() {
  return (
    <main className="">
      <FinishedJobCounter />
      <Contact />
    </main>
  );
}
