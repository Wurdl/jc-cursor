import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import { Link } from 'react-router-dom';

const clients = [
  {
    name: 'TechStart GmbH',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    industry: 'Technologie',
    description: 'Führend in der Entwicklung innovativer Softwarelösungen.',
  },
  {
    name: 'BioMarkt',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    industry: 'Einzelhandel',
    description: 'Deutschlands größte Bio-Supermarktkette.',
  },
  {
    name: 'Modehaus Schmidt',
    logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
    industry: 'Mode',
    description: 'Tradition trifft Moderne in der Modebranche.',
  },
  {
    name: 'GreenEnergy',
    logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    industry: 'Energie',
    description: 'Pionier in erneuerbaren Energien.',
  },
  {
    name: 'FoodDelivery',
    logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    industry: 'Gastronomie',
    description: 'Innovative Lieferdienst-Plattform.',
  },
  {
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    industry: 'Gesundheit',
    description: 'Moderne Gesundheitsdienstleistungen.',
  },
];

const ClientsPage = () => {
  return (
    <section className="min-h-screen bg-primary">
      <CustomCursor />
      <div className="container mx-auto py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Kunden</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Wir sind stolz darauf, mit diesen großartigen Unternehmen zusammenzuarbeiten und ihre digitale Transformation zu begleiten.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                <p className="text-white/60 mb-4">{client.industry}</p>
                <p className="text-white/80">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
          <p className="text-xl text-white/60 mb-8 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
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

export default ClientsPage; 