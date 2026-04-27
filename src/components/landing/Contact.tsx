import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, text: 'Antananarivo, Madagascar' },
  { icon: Mail, text: 'contact@nexusai.io' },
  { icon: Phone, text: '+261 34 00 000 00' },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#12121a]">
      <div className="w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Parlons de ton <span className="gradient-text">projet</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Une question, une suggestion, ou juste envie de discuter ? On est la.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8b5cf6]" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="neon-card p-8 rounded-2xl"
          >
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Prenom</label>
                  <input 
                    type="text" 
                    placeholder="Ton prenom"
                    className="neon-input" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="ton@email.com"
                    className="neon-input" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Sujet</label>
                <input 
                  type="text" 
                  placeholder="De quoi s agit-il ?"
                  className="neon-input" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                <textarea 
                  placeholder="Dis-nous tout..."
                  rows={4}
                  className="neon-input resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                className="neon-btn w-full flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}