import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import { serviceList } from '../data/services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full bg-primary text-white py-32">
      <CustomCursor />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Unsere Services</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Entdecken Sie unsere umfassenden Dienstleistungen, die Ihre Marke auf das nächste Level heben. Wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/services/${service.id}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Gespräch und lassen Sie uns gemeinsam Ihre Ziele erreichen.
          </p>
          <Link
            to="/contact"
            className="btn"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 