import { motion } from 'framer-motion';
import { FileSearch, MessageSquare, TrendingUp, Shield, Sparkles, Clock } from 'lucide-react';

const featuresData = [
  { 
    icon: FileSearch, 
    title: 'Analyse de CV intelligente', 
    description: 'Notre IA lit ton CV et identifie les points a ameliorer pour maximiser tes chances.',
    tag: 'Populaire'
  },
  { 
    icon: MessageSquare, 
    title: "Simulation d'entretien", 
    description: "Pratique avec des entretiens simules adaptatifs qui s'ajustent a ton niveau.",
    tag: 'Nouveau'
  },
  { 
    icon: TrendingUp, 
    title: 'Plan de progression', 
    description: "Un parcours personnalis pour developper les competences les plus demandees.",
    tag: 'IA'
  },
  { 
    icon: Shield, 
    title: 'Conseils securises', 
    description: 'Toutes tes informations sont chiffrees et ne sont jamais partagees.',
    tag: 'Confidentiel'
  },
  { 
    icon: Sparkles, 
    title: 'Suggestions optimisees', 
    description: 'Des recommandations basees sur les offres qui matchent ton profil.',
    tag: 'Smart'
  },
  { 
    icon: Clock, 
    title: 'Disponible 24/7', 
    description: "Accede a tes outils a tout moment, depuis n'importe quel appareil.",
    tag: '24/7'
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-4">
            Nos fonctionnalites
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tout ce qu'il te faut pour <span className="gradient-text">reussir</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Des outils simples mais puissants, concus pour t'aider a avancer dans ta carriere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-card p-6 rounded-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#8b5cf6]/10 text-[#8b5cf6]"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-medium">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}