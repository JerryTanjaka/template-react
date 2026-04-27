import { motion } from 'framer-motion';
import { UserPlus, Brain, Target, Rocket } from 'lucide-react';

const stepsData = [
  { 
    icon: UserPlus, 
    step: '01', 
    title: "Cree ton profil", 
    description: 'En 2 minutes, importe ton CV ou decris tes competences.' 
  },
  { 
    icon: Brain, 
    step: '02', 
    title: 'Analyse IA', 
    description: "Notre IA evalue ton profil et identifie les opportunites." 
  },
  { 
    icon: Target, 
    step: '03', 
    title: 'Plan personnalise', 
    description: 'Recois un parcours adapte a tes objectifs professionnels.' 
  },
  { 
    icon: Rocket, 
    step: '04', 
    title: 'Passe a action', 
    description: 'Apply, prepare-toi et accelere ta recherche.' 
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-[#12121a]">
      <div className="w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#d946ef]/10 border border-[#d946ef]/20 text-[#d946ef] text-sm font-medium mb-4">
            En 4 etapes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comment ca <span className="gradient-text">marche</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            C est simple, rapide, et ca fonctionne vraiment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stepsData.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < stepsData.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] opacity-30" />
                )}
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-[#12121a] border border-[#8b5cf6]/30 flex items-center justify-center mb-6 hover:border-[#8b5cf6]/60 transition-colors">
                    <Icon className="w-10 h-10 text-[#8b5cf6]" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-bold mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}