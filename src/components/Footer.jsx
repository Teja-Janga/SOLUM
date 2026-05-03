import { BsGithub } from "react-icons/bs";

const Footer = () => (
    <footer className="mt-auto py-6 border-t bg-white/60 border-slate-400 flex flex-col gap-2 items-center px-2">
        <p className="text-black/75 text-[12px] font-medium">
            © {new Date().getFullYear()} | Developed by <span className="text-blue-500 hover:text-blue-600 cursor-pointer font-bold">Teja Janga - テジャ</span>
        </p>
        <a 
            href="https://github.com/Teja-Janga/SOLUM" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-black/70 hover:text-black transition-colors"
        >
            <span className="text-[12px] font-medium uppercase tracking-widest">View Source</span>
            <BsGithub size={20} />
        </a>
    </footer>
);

export default Footer;