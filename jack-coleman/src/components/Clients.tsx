import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import { Link } from 'react-router-dom';

const clients = [
  {
    name: 'TechStart GmbH',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    industry: 'Technologie',
  },
  {
    name: 'BioMarkt',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    industry: 'Einzelhandel',
  },
  {
    name: 'Modehaus Schmidt',
    logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
    industry: 'Mode',
  },
  {
    name: 'GreenEnergy',
    logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    industry: 'Energie',
  },
  {
    name: 'FoodDelivery',
    logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    industry: 'Gastronomie',
  },
  {
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    industry: 'Gesundheit',
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-primary">
      <CustomCursor />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Unsere Kunden</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Wir sind stolz darauf, mit diesen großartigen Unternehmen zusammenzuarbeiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{client.name}</h3>
                  <p className="text-white/60">{client.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/clients"
            className="btn-secondary"
          >
            Alle Kunden ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients; 