import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';

const services = [
  {
    title: 'Web-Entwicklung',
    description: 'Moderne und responsive Websites',
    icon: '🌐',
    path: '/services/web-development',
  },
  {
    title: 'SEO',
    description: 'Optimierung für Suchmaschinen',
    icon: '🔍',
    path: '/services/seo',
  },
  {
    title: 'Marketing',
    description: 'Strategische Marketing-Konzepte',
    icon: '📈',
    path: '/services/marketing',
  },
  {
    title: 'Grafikdesign',
    description: 'Kreative Designs für Ihre Marke',
    icon: '🎨',
    path: '/services/graphic-design',
  },
  {
    title: 'Social Media',
    description: 'Engagement in sozialen Medien',
    icon: '📱',
    path: '/services/social-media',
  },
  {
    title: 'Content Creation',
    description: 'Überzeugende Inhalte',
    icon: '✍️',
    path: '/services/content-creation',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary">
      <CustomCursor />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Entdecken Sie unsere umfassenden Dienstleistungen, die Ihre Marke auf das nächste Level heben.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={service.path} className="block group">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 mb-4">{service.description}</p>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 