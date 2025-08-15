'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sailboat, MapPin, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Sailboat className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Lever les Voiles</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Lever les{' '}
              <span className="text-blue-600">Voiles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Découvrez l&apos;aventure maritime avec nos croisières exceptionnelles. 
              Naviguez vers des destinations de rêve et créez des souvenirs inoubliables.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Découvrir nos croisières
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir Lever les Voiles ?</h2>
            <p className="text-lg text-gray-600">Une expérience maritime unique et personnalisée</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sailboat,
                title: "Croisières sur mesure",
                description: "Des itinéraires personnalisés selon vos envies et votre budget"
              },
              {
                icon: MapPin,
                title: "Destinations exclusives",
                description: "Découvrez des ports et criques accessibles uniquement en voilier"
              },
              {
                icon: Users,
                title: "Équipage expérimenté",
                description: "Une équipe passionnée pour vous accompagner en toute sécurité"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos de Lever les Voiles</h2>
              <p className="text-lg text-gray-600 mb-6">
                Depuis plus de 10 ans, nous organisons des croisières exceptionnelles pour les amoureux de la mer. 
                Notre passion pour la navigation à voile nous pousse à partager cette expérience unique avec nos clients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Que vous soyez débutant ou marin expérimenté, nous adaptons nos croisières à votre niveau 
                pour vous offrir une aventure maritime inoubliable.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                                     <div className="text-sm text-gray-600">Années d&apos;expérience</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
                <p className="text-lg mb-6">
                  Rendre la navigation à voile accessible à tous en proposant des expériences 
                  authentiques et personnalisées.
                </p>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                                     <span>Croisières disponibles toute l&apos;année</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prêt à lever les voiles ?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour planifier votre prochaine aventure maritime
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Par téléphone</h3>
                <p className="text-lg text-blue-600 font-semibold">+33 1 23 45 67 89</p>
                <p className="text-gray-600">Lun-Ven: 9h-18h</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Par email</h3>
                <p className="text-lg text-blue-600 font-semibold">contact@leverlesvoiles.org</p>
                <p className="text-gray-600">Réponse sous 24h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sailboat className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Lever les Voiles</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire pour des croisières inoubliables depuis plus de 10 ans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>+33 1 23 45 67 89</p>
                <p>contact@leverlesvoiles.org</p>
                <p>Port de plaisance<br />75000 Paris, France</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lever les Voiles. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
