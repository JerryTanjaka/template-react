import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-[#1f1f2e]">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">NexusAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="#features" className="text-sm text-zinc-400 hover:text-[#8b5cf6] transition-colors">
            Fonctionnalites
          </Link>
          <Link to="#how" className="text-sm text-zinc-400 hover:text-[#8b5cf6] transition-colors">
            Comment ca marche
          </Link>
          <Link to="#contact" className="text-sm text-zinc-400 hover:text-[#8b5cf6] transition-colors">
            Contact
          </Link>
        </nav>

        <Link 
          to="/auth" 
          className="neon-btn text-sm relative z-10"
        >
          Connexion
        </Link>
      </div>
    </header>
  );
}