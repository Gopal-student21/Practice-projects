import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";

const poppins = localfont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>This is the best url shortner</p>
          <p className="px-48">we are the most straight forward link shortner in the world. We can work as you want and can provide you the best work with smooth workflow</p>
           <div className='flex gap-3 text-white'><Link href="/shorten" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'><button>Try Now</button></Link>
        <Link href="/" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'><button>GitHub</button></Link></div>
          </div>
        <div className=" flex justify-start relative">
          <Image  alt="Image" src="/vector.jpg" fill={true} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
