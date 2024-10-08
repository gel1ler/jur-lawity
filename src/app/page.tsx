import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/hero";
import Title from "@/components/title";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <section className="h-screen py-10 flex flex-col items-center w-full gap-5">
          <Title subtitle="СИСТЕМЫ LAWITY" centered>Вся работа в одном месте</Title>
          <Carousel />
        </section>
        <section className="h-screen py-32 w-full flex justify-center gap-5 bg-gray-100">
          <div className="flex flex-col max-w-7xl"></div>
          <Title>Преимущества</Title>
        </section>
      </main>
      <footer className="flex flex-col gap-6 items-center justify-center p-10">
        <Image
          src='/logo.png'
          alt='Lawity logo'
          width={120}
          height={80}
          className='object-contain'
        />
        <hr />
      </footer>
    </div>
  );
}
