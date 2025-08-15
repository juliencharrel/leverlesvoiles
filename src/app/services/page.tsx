'use client';

import { motion } from 'framer-motion';
import { Sailboat, MapPin, Calendar, Users, Star, Anchor } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Croisière Découverte",
      duration: "3-5 jours",
      price: "À partir de 800€",
      description: "Une introduction parfaite à la navigation à voile pour les débutants.",
      features: ["Équipage professionnel", "Formation navigation", "Ports pittoresques", "Repas inclus"],
      icon: Sailboat,
      popular: false
    },
    {
      title: "Croisière Méditerranée",
      duration: "7-10 jours",
      price: "À partir de 1500€",
      description: "Explorez les plus belles îles et criques de la Méditerranée.",
      features: ["Destinations exclusives", "Équipage expérimenté", "Activités nautiques", "Hébergement premium"],
      icon: MapPin,
      popular: true
    },
    {
      title: "Croisière Atlantique",
      duration: "14-21 jours",
      price: "À partir de 2800€",
      description: "Une aventure océanique pour les marins expérimentés.",
      features: ["Navigation hauturière", "Équipage qualifié", "Équipement sécurité", "Formation avancée"],
      icon: Anchor,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sailboat className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Lever les Voiles</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Nos <span className="text-blue-600">Croisières</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
                         Découvrez nos différentes formules de croisières adaptées à tous les niveaux 
             et à toutes les envies d&apos;aventure maritime.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-lg">
                    <Star className="h-4 w-4 inline mr-1" />
                    Populaire
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">2-8 pers.</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Inclus :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">par personne</div>
                  </div>
                  
                  <Link
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Informations importantes
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conditions de réservation</h3>
              <ul className="space-y-2 text-gray-600">
                                 <li>• Réservation minimum 30 jours à l&apos;avance</li>
                <li>• Acompte de 30% à la réservation</li>
                <li>• Solde 15 jours avant le départ</li>
                                 <li>• Annulation gratuite jusqu&apos;à 7 jours avant</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Équipement fourni</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gilets de sauvetage</li>
                <li>• Équipement de sécurité</li>
                <li>• Draps et serviettes</li>
                <li>• Équipement de pêche</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
                             Prêt pour l&apos;aventure ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous pour personnaliser votre croisière selon vos envies
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
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
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
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
