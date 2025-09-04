import React from "react";
import { Pattern } from "../common/Pattern";
import Navbar from "../layout/Navbar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vibes",
});

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh bg-gradient-to-br from-sky-50 to-sky-50">
      <Pattern />
      <header className="flex flex-col h-screen p-6 pt-10 text-center gap-10">
        <Navbar />
        <div className="z-10 flex flex-3 h-full flex-col justify-center items-center gap-4">
          <img data-aos="zoom-in" src="./logo-compressed.png" alt="logo" width="200" height="200" className="w-80 lg:w-96 drop-shadow-xl z-10" />

          <div data-aos="fade-up" className="flex flex-col gap-3 items-center mt-4 sm:mt-8">
            <div className="border-2 border-dashed bg-sky-100 border-sky-300 text-sky-700 font-medium animate-bounce px-4 py-1 rounded-full ">💤 Komunitas 24JAM Ngoding 💤</div>
            <h1 className={`${pacifico.className} text-2xl lg:text-3xl selection:text-sky-500 font-bold text-sky-700 max-w-sm text-center`}>ingin menjadi programmer handal namun enggan ngoding🤔🫣?</h1>
            <p className="text-sky-700 font-medium selection:bg-sky-200">Tenang, kamu nggak sendirian😍.</p>
            <p className="selection:bg-sky-200 max-w-sm md:max-w-md   text-sky-700 font-normal">
              Kita tahu betul rasanya buka VSCode cuma buat ganti tema, bukan buat nulis baris kode. Rasanya lebih gampang klik “New Terminal” buat nyeduh kopi daripada ngetik npm start buat jalanin project. <br />
              {/* <span className={`${jetbrainsmono.className} text-base text-center   italic`}>
                ”Saya bukan programmer hebat, Saya hanya programmer yang baik dengan kebiasaan yang hebat” <span className="block text-sm mt-1 italic">"patra_dinata"</span>
              </span> */}
            </p>

            <div className="flex gap-4 pt-4 text-sm w-full">
              <a href="#join&follow" className="flex-1 whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-3 transition">
                Bergabung Sekarang
              </a>
              <a href="#about" className="flex-1 whitespace-nowrap bg-sky-100 hover:bg-sky-200 px-6 py-3 text-sky-400 border border-dashed text-base rounded-lg transition-all duration-300 ease-in-out">
                Jelajahi Fitur
              </a>
            </div>
            <div className="flex items-center gap-4 flex-col">
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
