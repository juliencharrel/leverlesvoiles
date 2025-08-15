'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Users, Palette, Sparkles, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="h-8 w-8 text-pink-400" />
              <span className="text-xl font-bold text-white">Lever les Voiles</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <Link href="#about" className="text-white/80 hover:text-pink-400 transition-colors">Qui sommes-nous</Link>
              <Link href="#activities" className="text-white/80 hover:text-pink-400 transition-colors">Activités</Link>
              <Link href="#contact" className="text-white/80 hover:text-pink-400 transition-colors">Contact</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ClientOnly>
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20"
          />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [180, 360, 180],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
            />
          </div>
        </ClientOnly>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6"
          >
            Lever les{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Voiles
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto"
          >
            Promouvoir l&apos;Art Vivant et l&apos;Authenticité
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Découvrir notre mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Nous rejoindre
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Qui Sommes-Nous ?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Une association dédiée à la promotion, la production et la diffusion de spectacles vivants et de diverses formes d&apos;art.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Notre Mission</h3>
              <p className="text-lg text-white/80 mb-6">
                Nous offrons un espace de collaboration et d&apos;échange entre artistes, créateurs, techniciens et intervenants du secteur culturel.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Notre approche unique explore la dialectique fascinante entre <span className="text-pink-400 font-semibold">jouer un rôle sur scène</span> et <span className="text-purple-400 font-semibold">avoir un travail dans la vie</span>. 
                Comment ces deux mondes s&apos;influencent-ils mutuellement ? Comment l&apos;authenticité se manifeste-t-elle dans ces deux contextes ?
              </p>
              <div className="space-y-4">
                {[
                  "Soutenir la création artistique",
                  "Explorer les dynamiques sociales et interactions humaines à travers les arts vivants",
                  "Promouvoir l'authenticité et l'ouverture dans les relations sociales",
                  "Interroger la dialectique entre jeu scénique et réalité quotidienne"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Music, title: "Spectacles Vivants", count: "50+" },
                    { icon: Users, title: "Artistes", count: "100+" },
                    { icon: Palette, title: "Créations", count: "25+" },
                    { icon: Sparkles, title: "Événements", count: "75+" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-3">
                        <stat.icon className="h-8 w-8 text-pink-400" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
                      <div className="text-sm text-white/70">{stat.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nos Activités
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Découvrez nos programmes et activités pour promouvoir l&apos;art vivant et l&apos;authenticité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ateliers et Stages",
                description: "Formations pratiques pour artistes de tous niveaux",
                icon: Palette,
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Résidences Artistiques",
                description: "Espaces dédiés à la création et à l'innovation artistique",
                icon: Sparkles,
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Conférences et Débats",
                description: "Discussions pour approfondir la compréhension des arts vivants",
                icon: Users,
                color: "from-indigo-500 to-blue-500"
              },
              {
                title: "Activités Éducatives",
                description: "Programmes pour tous les âges visant à promouvoir l'authenticité",
                icon: Music,
                color: "from-blue-500 to-cyan-500"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${activity.color} rounded-2xl mb-4`}>
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-white/70">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialectique Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              La Dialectique du Rôle
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Entre jeu scénique et réalité quotidienne, comment l&apos;authenticité se manifeste-t-elle ?
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Sur Scène : Le Rôle</h3>
              <div className="space-y-4 text-white/80">
                <p>Quand nous jouons un personnage, nous explorons des facettes de nous-mêmes que nous n&apos;osons pas toujours exprimer dans la vie quotidienne. Le théâtre devient un laboratoire de l&apos;authenticité.</p>
                <p>Comment le fait de <span className="text-pink-400 font-semibold">jouer un rôle</span> peut-il nous aider à mieux comprendre qui nous sommes vraiment ? Comment cette expérience transforme-t-elle notre rapport à nous-mêmes et aux autres ?</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Dans la Vie : Le Travail</h3>
              <div className="space-y-4 text-white/80">
                <p>Dans notre vie professionnelle, nous portons souvent des masques sociaux, des rôles que la société nous assigne. Mais ces rôles ne sont-ils pas aussi une forme de jeu ?</p>
                <p>Comment notre <span className="text-purple-400 font-semibold">travail quotidien</span> peut-il être enrichi par notre expérience artistique ? Comment l&apos;art peut-il nous aider à être plus authentiques dans nos interactions professionnelles ?</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Notre Questionnement</h3>
              <p className="text-lg text-white/80 mb-6">
                Cette dialectique nous amène à questionner : où se situe la frontière entre <span className="text-pink-400">performance</span> et <span className="text-purple-400">authenticité</span> ? 
                Comment ces deux mondes peuvent-ils s&apos;enrichir mutuellement ?
              </p>
              <p className="text-white/70">
                À travers nos ateliers et nos créations, nous explorons ces questions pour mieux comprendre 
                comment l&apos;art peut nous aider à être plus authentiques dans tous les aspects de notre vie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/60 to-purple-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rejoignez-Nous
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Nous collaborons avec diverses associations, institutions et organisations partageant nos objectifs, 
              au niveau local, national et international.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Notre réflexion sur la dialectique entre <span className="text-pink-400">rôle scénique</span> et <span className="text-purple-400">réalité quotidienne </span> 
              nous amène à questionner : comment l&apos;art peut-il nous aider à être plus authentiques dans nos vies professionnelles ? 
              Comment nos expériences de travail enrichissent-elles notre expression artistique ?
            </p>
            <p className="text-lg text-white/70 mb-8">
              Souhaitez-vous contribuer à notre mission ou participer à nos activités ? 
              Contactez-nous pour plus d&apos;informations sur nos programmes et opportunités de collaboration.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/50 to-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Pour toute question ou information, veuillez nous contacter
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-md mx-auto"
            >
              <Mail className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Email</h3>
              <p className="text-pink-400 font-semibold text-center">contact@leverlesvoiles.org</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-pink-400" />
                <span className="text-xl font-bold">Lever les Voiles</span>
              </div>
              <p className="text-white/60">
                Promouvoir l&apos;Art Vivant et l&apos;Authenticité depuis plus de 10 ans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-white/60 hover:text-pink-400 transition-colors">Qui sommes-nous</Link></li>
                <li><Link href="#activities" className="text-white/60 hover:text-pink-400 transition-colors">Activités</Link></li>
                <li><Link href="#contact" className="text-white/60 hover:text-pink-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/60">
                <p>contact@leverlesvoiles.org</p>
                <p>Association d&apos;Art Vivant<br />France</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Lever les Voiles. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
