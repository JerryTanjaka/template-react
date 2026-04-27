import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-[-100px] w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/20 blur-[80px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-[-50px] w-[400px] h-[400px] rounded-full bg-[#d946ef]/15 blur-[80px] animate-[float_8s_ease-in-out_infinite]" />
      
      <div className="relative z-10 w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-sm text-[#8b5cf6]">
            <Zap className="w-4 h-4" />
            Powered by advanced AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          L'intelligence artificielle<br />
          <span className="gradient-text">au service de ta carriere</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto"
        >
          Decouvre comment NexusAI t'aide a analyser tes competences, preparer tes entretiens et accelerer ta recherche d'emploi.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/auth" 
            className="neon-btn text-base px-8 py-4 flex items-center justify-center gap-2 relative z-10"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href="#features" 
            className="neon-btn-outline text-base px-8 py-4 flex items-center justify-center gap-2"
          >
            <Cpu className="w-5 h-5" />
            Voir les fonctions
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>99.9% uptime</span>
          </div>
          <span className="text-zinc-700">|</span>
          <span>+10 000 utilisateurs actifs</span>
          <span className="text-zinc-700">|</span>
          <span>Donnees securisees</span>
        </motion.div>
      </div>
    </section>
  );
}