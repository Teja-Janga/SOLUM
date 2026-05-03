import { BsGithub } from "react-icons/bs";

const Footer = () => (
    <footer className="mt-auto py-6 border-t bg-black/80 border-slate-200 flex justify-evenly items-center px-2">
        <p className="text-slate-200 text-sm font-medium">
            © {new Date().getFullYear()} | Developed by <span className="text-blue-500 hover:text-blue-600 cursor-pointer font-bold">Teja Janga - テジャ</span>
        </p>
        <a 
            href="https://github.com/YOUR_USERNAME/YOUR_REPO" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-black transition-colors"
        >
            <span className="text-xs font-bold uppercase tracking-widest">View Source</span>
            <BsGithub size={22} />
        </a>
    </footer>
);

export default Footer;