import { FaDiscord, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-slate-100">
      <div className="max-w-6xl p-6  mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600">
        <div className="text-center md:text-left space-y-2 ">
          <p className="text-lg font-semibold text-gray-700 selection:text-gray-600 lg:text-center">
            <i>IMPHEN</i>
          </p>
          <p className="text-sm text-sky-500 selection:text-sky-600">&copy; {new Date().getFullYear()} Dibuat dengan 💙 oleh komunitas.</p>
        </div>

        <div className="flex gap-4 text-lg md:text-xl bg-slate-300 px-4 py-2 rounded-xl group hover:bg-slate-400">
          <a href="https://discord.gg/" target="_blank" aria-label="Discord" className="group group-hover:text-sky-500">
            <FaDiscord />
          </a>
          <a href="https://facebook.com/groups/" target="_blank" aria-label="Facebook Group" className="hover:text-sky-500">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/patra_dinata" target="_blank" aria-label="Instagram" className="hover:text-sky-500">
            <FaInstagram />
          </a>
          <a href="https://github.com/patradinata" target="_blank" aria-label="GitHub" className="hover:text-sky-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
