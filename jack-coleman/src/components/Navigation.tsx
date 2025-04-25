import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Projekte', href: '/projects' },
    { name: 'Kunden', href: '/clients' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <>
      <CustomCursor />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-secondary"
              >
                Jack-Coleman
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.name === 'Leistungen' ? (
                    <div
                      onMouseEnter={() => setShowServices(true)}
                      onMouseLeave={() => setShowServices(false)}
                      className="relative"
                    >
                      <motion.a
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        {item.name}
                      </motion.a>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      whileHover={{ scale: 1.05 }}
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      {item.name}
                    </motion.a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-secondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Services Menu */}
        <AnimatePresence>
          {showServices && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute left-0 right-0 bg-primary/90 backdrop-blur-md border-t border-secondary/10"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              {/* Unsichtbarer Bereich für besseres Hover-Verhalten */}
              <div className="absolute -top-4 left-0 right-0 h-4" />
              
              <div className="container py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.path}
                      className="group"
                    >
                      <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-primary/50 transition-colors">
                        <span className="text-3xl mb-3">{service.icon}</span>
                        <h3 className="text-secondary font-semibold group-hover:text-secondary/80">
                          {service.title}
                        </h3>
                        <p className="text-sm text-secondary/60 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100vh' }}
                exit={{ opacity: 0, height: 0 }}
                className="fixed inset-0 z-50 md:hidden"
              >
                <div className="h-full bg-primary/95 backdrop-blur-md border-t border-white/10 overflow-y-auto">
                  <div className="container py-6">
                    <div className="space-y-6">
                      {/* Main Navigation */}
                      <div className="space-y-2">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Services Section */}
                      <div className="pt-4 border-t border-white/10">
                        <h3 className="px-4 text-sm font-semibold text-white/60 mb-2">Leistungen</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                              <Link
                                to={service.path}
                                className="block p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">{service.icon}</span>
                                  <div>
                                    <h4 className="font-medium">{service.title}</h4>
                                    <p className="text-sm text-white/60">{service.description}</p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="pt-4 border-t border-white/10"
                      >
                        <Link
                          to="/contact"
                          className="btn"
                          onClick={() => setIsOpen(false)}
                        >
                          Jetzt Kontakt aufnehmen
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation; 