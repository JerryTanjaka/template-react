import { motion } from 'framer-motion';
import { Users, Briefcase, TrendingUp, Star } from 'lucide-react';

const statsData = [
  { icon: Users, value: '10,000+', label: 'Utilisateurs actifs', color: '#8b5cf6' },
  { icon: Briefcase, value: '50,000+', label: 'Entretiens simules', color: '#d946ef' },
  { icon: TrendingUp, value: '85%', label: 'Taux de reussite', color: '#8b5cf6' },
  { icon: Star, value: '4.9/5', label: 'Note moyenne', color: '#d946ef' },
];

const testimonialsData = [
  {
    name: 'Marie K.',
    role: 'Développeuse full-stack',
    content: "Grace a NexusAI, j ai obtenu 3 entretiens en une semaine. La simulation m a vraiment aidee a gagner en confiance.",
    avatar: 'MK'
  },
  {
    name: 'Thomas R.',
    role: 'Designer UX/UI',
    content: "Le plan de progression est genial. J ai pu developper les competences que les recruteurs recherchaient vraiment.",
    avatar: 'TR'
  },
  {
    name: 'Sarah L.',
    role: 'Product Manager',
    content: "Les conseils pour mon CV ont fait toute la difference. Je recommande a 100% !",
    avatar: 'SL'
  },
];

export function Showcase() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/10 blur-[80px]" />
      
      <div className="w-full px-6 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="neon-card p-6 rounded-xl text-center"
                >
                  <div 
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-zinc-500 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ce qu'en disent nos <span className="gradient-text">utilisateurs</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-zinc-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8b5cf6] text-[#8b5cf6]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}