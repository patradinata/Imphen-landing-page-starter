import { FaGithub, FaLinkedin, FaTelegram, FaCheckCircle, FaInstagram } from "react-icons/fa";

export default function ContributionSection() {
  return (
    <section className="relative pt-4">
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl font-bold leading-tight">
          Punya ide keren buat <span className="text-blue-600">ngembangin website komunitas?</span> 🚀
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">Kami terbuka banget untuk masukan, ide, dan kontribusi bareng!</p>
      </div>

      <div
        data-aos="zoom-in"
        className="overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-4xl border border-slate-200 px-8 pt-6  flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 transition duration-300"
      >
        <div className="absolute -top-6 -left-10 w-40 h-40 bg-blue-300 opacity-30 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 right-0 w-40 h-40 bg-orange-500 opacity-30 rounded-full blur-2xl z-0" />
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <div className="flex flex-row justify-center md:justify-start items-center md:items-start gap-2 md:gap-4">
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mr-2">Patra</h3>
            <span className="text-sm bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full">🚧 Open for Collab</span>
          </div>
          <p className="text-gray-700">
            Saya adalah pembuat website IMPHNEN, seorang <strong>junior front end developer</strong> yang suka ngulik project, tapi sering mentok di buat repo aja karena malas 🥱
          </p>

          <div className="flex justify-center md:justify-start gap-3 text-2xl text-blue-500 mt-4">
            <a href="https://github.com/patradinata" aria-label="GitHub Patra Dinata" target="_blank" className="hover:text-blue-700 transition duration-200">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/patradinata" aria-label="LinkedIn Patra Dinata" target="_blank" className="hover:text-blue-700 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Telegram Patra Dinata" target="_blank" className="hover:text-blue-700 transition duration-200">
              <FaTelegram />
            </a>
            <a href="https://www.instagram.com/patra_dinata" aria-label="instagram patra dinata" target="_blank" className="hover:text-blue-700 transition-all duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="relative">
          <img src="/avatars/founders/1.svg" alt="Avatar" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
