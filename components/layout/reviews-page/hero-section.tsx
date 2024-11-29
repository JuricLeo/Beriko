import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 pl-3 md:pl-10 lg:pl-24 reviews-hero-section-bg">
      <div className="flex flex-col lg:flex-row items-center">
        <h1 className="text-3xl text-center lg:text-left xl:text-5xl lg:text-4xl max-w-[500px] lg:max-w-[780px] mb-12 lg:mr-4 lg:mb-0">Poslušajte Razloge Zašto je <span className="text-primary font-semibold">Beriko</span> Voljen od Onih Koji Rade s Nama</h1>
        <div className="lg:flex lg:justify-end lg:w-full mr-3 lg:mr-0">
          <Image 
            width={700}
            height={300}
            alt=""
            src="https://utfs.io/f/KEu7z70yXtIhKMdoPq0yXtIh7G5ljWY38NgizvsLonBkbCMJ"
            className="rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md lg:rounded-tr-none lg:rounded-br-none w-[700px]"
          />
        </div>
      </div>
    </section>
  )
}
