import React from "react";
import { Pattern } from "../common/Pattern";
import Navbar from "../layout/Navbar";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vibes",
});

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh bg-gradient-to-t from-sky-50 to-slate-white">
      <Pattern />
      <header className="z-10 h-[100vh] flex flex-col items-center justify-start gap-8 p-6 pt-10 text-center">
        <Navbar />
        <div className="z-10 flex flex-1 h-full flex-col justify-center items-center gap-4">
          <img data-aos="zoom-in" src="./logo-compressed.png" alt="logo" width="200" height="200" className="w-80 lg:w-96 drop-shadow-xl z-10" />

          <div data-aos="fade-up" className="flex flex-col  gap-3 items-center mt-4 sm:mt-8">
            <div className="px-4 py-1 text-sm border-2 border-dashed bg-sky-100 border-sky-200 text-sky-700 rounded-full font-medium animate-bounce selection:bg-sky-200">💤 Komunitas 24JAM Ngoding 💤</div>
            <h1 className={`${pacifico.className} text-xl md:text-2xl lg:text-3xl selection:text-sky-500 font-bold text-sky-700 max-w-lg text-center`}>ingin menjadi programmer handal namun enggan ngoding</h1>
            <p className="text-sky-700 font-medium selection:bg-sky-200">Tenang, kamu nggak sendirian.</p>
            <p className="selection:bg-sky-200 max-w-sm md:max-w-md   text-sky-700 font-normal">
              Kita tahu betul rasanya buka VSCode cuma buat ganti tema, bukan buat nulis baris kode. Rasanya lebih gampang klik “New Terminal” buat nyeduh kopi daripada ngetik npm start buat jalanin project <br />
              <code>#CodeWithPatra</code>
            </p>

            <div className="flex gap-4 pt-4 text-sm w-full">
              <a href="#join&follow" className="flex-1 whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-3 transition">
                Bergabung Sekarang
              </a>
              <a href="#about" className="flex-1 whitespace-nowrap bg-sky-100 hover:bg-sky-200 px-6 py-3 text-sky-400 border border-dashed text-base rounded-lg transition-all duration-300 ease-in-out">
                Jelajahi Fitur
              </a>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <p className="text-xs font-medium capitalize text-sky-700 selection:bg-sky-200 animate-bounce">patra-dinata All right reserved.</p>
              <div className="flex items-center gap-4 text-sky-600 text-xl">
                <Link href="https://www.instagram.com/patra_dinata" target="_blank">
                  <FaInstagram />
                </Link>
                <Link href="https://github.com/patradinata" target="_blank">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/patradinata" target="_blank">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
