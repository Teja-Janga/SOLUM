import { BsGithub } from "react-icons/bs";

const Footer = () => (
    <footer className="mt-auto py-4 border-t bg-white/60 border-slate-500 flex flex-col gap-3 items-center px-2">
        <p className="text-black/75 text-sm font-bold">
            © {new Date().getFullYear()} | Developed by <span className="text-[#213577] cursor-pointer font-bold">Teja Janga - テジャ</span>
        </p>
        <a 
            href="https://github.com/Teja-Janga/SOLUM" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-black/70 hover:text-black transition-colors"
        >
            <span className="text-[12px] font-bold uppercase tracking-widest">View Source</span>
            <BsGithub size={20} />
        </a>
    </footer>
);

export default Footer;