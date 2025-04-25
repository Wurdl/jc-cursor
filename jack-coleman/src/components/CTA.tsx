import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';

const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <CustomCursor />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Gespräch und lassen Sie uns gemeinsam Ihre Ziele erreichen.
          </p>
          <Link
            to="/contact"
            className="btn"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 