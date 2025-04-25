import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';

interface ServiceProcess {
  title: string;
  description: string;
  image?: string;
}

interface Service {
  title: string;
  description: string;
  longDescription: string;
  heroImage: string;
  details: {
    title: string;
    content: string;
    image?: string;
  }[];
  whatMakesUsSpecial: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  images: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

const services: Record<string, Service> = {
  'web-development': {
    title: 'Web-Entwicklung',
    description: 'Wir entwickeln moderne, responsive und benutzerfreundliche Websites, die Ihre Marke perfekt repräsentieren.',
    longDescription: 'Unsere Web-Entwicklung kombiniert modernste Technologien mit kreativem Design, um Websites zu schaffen, die nicht nur gut aussehen, sondern auch hervorragend funktionieren. Wir legen besonderen Wert auf Benutzerfreundlichkeit, Performance und Suchmaschinenoptimierung.',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    details: [
      {
        title: 'Moderne Technologien',
        content: 'Wir setzen auf aktuelle Frameworks und Technologien wie React, Next.js und TypeScript, um performante und skalierbare Webanwendungen zu entwickeln.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Responsive Design',
        content: 'Ihre Website wird auf allen Geräten perfekt dargestellt - vom Smartphone bis zum Desktop. Wir achten auf optimale Benutzererfahrung auf allen Plattformen.'
      },
      {
        title: 'Performance-Optimierung',
        content: 'Schnelle Ladezeiten sind entscheidend für den Erfolg Ihrer Website. Wir optimieren Performance, SEO und Benutzerfreundlichkeit.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Agile Entwicklung',
        description: 'Wir arbeiten in kurzen Entwicklungszyklen und integrieren Ihr Feedback kontinuierlich.'
      },
      {
        title: 'Moderne Architektur',
        description: 'Unsere Lösungen sind zukunftssicher und leicht erweiterbar.'
      },
      {
        title: 'Full-Service',
        description: 'Von der Konzeption bis zum Launch begleiten wir Sie durch den gesamten Prozess.'
      }
    ],
    benefits: [
      {
        title: 'Steigerung der Online-Sichtbarkeit',
        description: 'Ihre Website wird in Suchmaschinen besser gefunden und erreicht mehr potenzielle Kunden.'
      },
      {
        title: 'Verbesserte Benutzererfahrung',
        description: 'Intuitive Navigation und schnelle Ladezeiten sorgen für zufriedene Besucher.'
      },
      {
        title: 'Höhere Conversion-Raten',
        description: 'Optimierte Benutzerführung führt zu mehr Conversions und Umsatz.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
    ],
    faq: [
      {
        question: 'Wie lange dauert die Entwicklung einer Website?',
        answer: 'Die Entwicklungszeit hängt von Umfang und Komplexität ab. Eine typische Website benötigt 4-8 Wochen.'
      },
      {
        question: 'Welche Technologien verwenden Sie?',
        answer: 'Wir setzen auf moderne Technologien wie React, Next.js, TypeScript und Tailwind CSS.'
      },
      {
        question: 'Bieten Sie auch Wartung und Support?',
        answer: 'Ja, wir bieten umfassende Wartung und Support für alle von uns entwickelten Websites.'
      }
    ]
  },
  'seo': {
    title: 'SEO',
    description: 'Optimieren Sie Ihre Online-Präsenz und erreichen Sie mehr potenzielle Kunden durch strategische Suchmaschinenoptimierung.',
    longDescription: 'Unsere SEO-Dienstleistungen helfen Ihnen, Ihre Online-Sichtbarkeit zu steigern und mehr qualifizierte Besucher auf Ihre Website zu bringen. Wir kombinieren technische Expertise mit strategischem Denken, um nachhaltige Ergebnisse zu erzielen.',
    heroImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
    details: [
      {
        title: 'Keyword-Recherche',
        content: 'Wir identifizieren die relevanten Keywords für Ihr Unternehmen und entwickeln eine maßgeschneiderte SEO-Strategie.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'On-Page Optimierung',
        content: 'Wir optimieren Ihre Website für Suchmaschinen und verbessern die technische Performance.'
      },
      {
        title: 'Content-Optimierung',
        content: 'Wir erstellen und optimieren Inhalte, die sowohl Suchmaschinen als auch Ihre Zielgruppe begeistern.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Datengetriebene Strategie',
        description: 'Wir basieren unsere Entscheidungen auf fundierten Daten und Analysen.'
      },
      {
        title: 'Nachhaltige Ergebnisse',
        description: 'Wir setzen auf langfristige Optimierung statt kurzfristiger Tricks.'
      },
      {
        title: 'Transparente Berichterstattung',
        description: 'Sie erhalten regelmäßige, detaillierte Berichte über Ihre SEO-Performance.'
      }
    ],
    benefits: [
      {
        title: 'Höhere Sichtbarkeit',
        description: 'Ihre Website wird in Suchmaschinen besser gefunden und erreicht mehr potenzielle Kunden.'
      },
      {
        title: 'Qualifizierter Traffic',
        description: 'Mehr Besucher, die tatsächlich an Ihren Produkten oder Dienstleistungen interessiert sind.'
      },
      {
        title: 'Nachhaltige Ergebnisse',
        description: 'Langfristige Verbesserungen statt kurzfristiger Erfolge.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop'
    ],
    faq: [
      {
        question: 'Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?',
        answer: 'SEO ist ein langfristiger Prozess. Erste Ergebnisse sind meist nach 3-6 Monaten sichtbar.'
      },
      {
        question: 'Welche SEO-Tools verwenden Sie?',
        answer: 'Wir nutzen eine Kombination aus Google Analytics, Search Console, Ahrefs und SEMrush.'
      },
      {
        question: 'Wie oft werden die Rankings überprüft?',
        answer: 'Wir überwachen Ihre Rankings kontinuierlich und erstellen monatliche Berichte.'
      }
    ]
  },
  'marketing': {
    title: 'Marketing',
    description: 'Entwickeln Sie eine starke Markenidentität und erreichen Sie Ihre Zielgruppe mit effektiven Marketingstrategien.',
    longDescription: 'Unser Marketing-Team entwickelt maßgeschneiderte Strategien, die Ihre Marke stärken und Ihre Zielgruppe effektiv erreichen. Wir kombinieren kreative Ideen mit datengetriebenen Entscheidungen für optimale Ergebnisse.',
    heroImage: '/images/services/marketing-hero.jpg',
    details: [
      {
        title: 'Markenentwicklung',
        content: 'Wir entwickeln eine einzigartige Markenidentität, die Ihre Zielgruppe begeistert.',
        image: '/images/services/marketing-brand.jpg'
      },
      {
        title: 'Content Marketing',
        content: 'Wir erstellen ansprechende Inhalte, die Ihre Zielgruppe erreichen und überzeugen.'
      },
      {
        title: 'Performance Marketing',
        content: 'Wir optimieren Ihre Marketing-Kampagnen für maximale ROI.',
        image: '/images/services/marketing-performance.jpg'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Kreative Lösungen',
        description: 'Wir denken außerhalb der Box und entwickeln innovative Marketing-Strategien.'
      },
      {
        title: 'Datengetriebene Entscheidungen',
        description: 'Alle unsere Entscheidungen basieren auf fundierten Daten und Analysen.'
      },
      {
        title: 'Ganzheitlicher Ansatz',
        description: 'Wir betrachten Ihr Marketing als Ganzes und entwickeln integrierte Strategien.'
      }
    ],
    benefits: [
      {
        title: 'Stärkere Markenidentität',
        description: 'Eine einzigartige und unverwechselbare Marke, die Ihre Zielgruppe begeistert.'
      },
      {
        title: 'Gezielte Zielgruppenansprache',
        description: 'Effektive Kommunikation mit Ihrer Zielgruppe auf den richtigen Kanälen.'
      },
      {
        title: 'Höhere Conversion-Raten',
        description: 'Optimierte Marketing-Kampagnen führen zu mehr Conversions und Umsatz.'
      }
    ],
    images: [
      '/images/services/marketing-1.jpg',
      '/images/services/marketing-2.jpg',
      '/images/services/marketing-3.jpg',
      '/images/services/marketing-4.jpg'
    ],
    faq: [
      {
        question: 'Wie messen Sie den Erfolg Ihrer Marketing-Kampagnen?',
        answer: 'Wir nutzen verschiedene KPIs wie Conversion-Raten, ROI und Engagement-Metriken.'
      },
      {
        question: 'Welche Marketing-Kanäle empfehlen Sie?',
        answer: 'Die Wahl der Kanäle hängt von Ihrer Zielgruppe und Ihren Zielen ab. Wir entwickeln eine maßgeschneiderte Strategie.'
      },
      {
        question: 'Wie lange dauert es, bis Marketing-Kampagnen Wirkung zeigen?',
        answer: 'Die ersten Ergebnisse sind meist nach 2-3 Monaten sichtbar, die volle Wirkung entfaltet sich über 6-12 Monate.'
      }
    ]
  },
  'graphic-design': {
    title: 'Grafikdesign',
    description: 'Erstellen Sie eine visuell ansprechende Markenidentität mit professionellem Grafikdesign.',
    longDescription: 'Unser Grafikdesign-Team entwickelt kreative und einzigartige Designs, die Ihre Marke perfekt repräsentieren. Von Logos bis hin zu kompletten Branding-Konzepten - wir schaffen visuelle Identitäten, die begeistern.',
    heroImage: '/images/services/graphic-design-hero.jpg',
    details: [
      {
        title: 'Logo Design',
        content: 'Wir entwickeln einzigartige Logos, die Ihre Marke perfekt repräsentieren.',
        image: '/images/services/graphic-design-logo.jpg'
      },
      {
        title: 'Branding',
        content: 'Wir erstellen umfassende Branding-Konzepte mit konsistenter visueller Sprache.'
      },
      {
        title: 'Print & Digital Design',
        content: 'Wir gestalten ansprechende Designs für alle Medien - von Print bis Digital.',
        image: '/images/services/graphic-design-digital.jpg'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Kreative Exzellenz',
        description: 'Unsere Designer sind Experten in ihrem Fach und schaffen einzigartige Designs.'
      },
      {
        title: 'Strategischer Ansatz',
        description: 'Wir entwickeln Designs, die nicht nur gut aussehen, sondern auch Ihre Ziele unterstützen.'
      },
      {
        title: 'Konsistente Qualität',
        description: 'Wir garantieren höchste Qualitätsstandards in allen unseren Designs.'
      }
    ],
    benefits: [
      {
        title: 'Professionelle Designs',
        description: 'Hochwertige Designs, die Ihre Marke perfekt repräsentieren.'
      },
      {
        title: 'Einzigartige Markenidentität',
        description: 'Eine unverwechselbare visuelle Identität, die sich von der Konkurrenz abhebt.'
      },
      {
        title: 'Konsistente visuelle Sprache',
        description: 'Einheitliche Designs über alle Kanäle hinweg für maximale Markenwirkung.'
      }
    ],
    images: [
      '/images/services/graphic-design-1.jpg',
      '/images/services/graphic-design-2.jpg',
      '/images/services/graphic-design-3.jpg',
      '/images/services/graphic-design-4.jpg'
    ],
    faq: [
      {
        question: 'Wie läuft der Design-Prozess ab?',
        answer: 'Wir beginnen mit einem Briefing, entwickeln Konzepte, integrieren Ihr Feedback und finalisieren das Design.'
      },
      {
        question: 'Welche Dateiformate liefern Sie?',
        answer: 'Wir liefern alle gängigen Formate für Print und Digital, einschließlich Vektordateien.'
      },
      {
        question: 'Wie viele Revisionen sind im Preis enthalten?',
        answer: 'Wir bieten 3 Revisionen im Basis-Paket an, weitere können optional hinzugebucht werden.'
      }
    ]
  },
  'social-media': {
    title: 'Social Media',
    description: 'Stärken Sie Ihre Online-Präsenz und bauen Sie eine engagierte Community auf.',
    longDescription: 'Unser Social Media-Team entwickelt und betreut Ihre Präsenz in sozialen Medien. Wir erstellen ansprechende Inhalte, managen Ihre Community und optimieren Ihre Performance für maximale Reichweite und Engagement.',
    heroImage: '/images/services/social-media-hero.jpg',
    details: [
      {
        title: 'Content Creation',
        content: 'Wir erstellen ansprechende Inhalte, die Ihre Zielgruppe begeistern.',
        image: '/images/services/social-media-content.jpg'
      },
      {
        title: 'Community Management',
        content: 'Wir betreuen Ihre Community und sorgen für aktive Interaktion.'
      },
      {
        title: 'Performance-Optimierung',
        content: 'Wir optimieren Ihre Social Media-Aktivitäten für maximale Reichweite.',
        image: '/images/services/social-media-performance.jpg'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Strategische Planung',
        description: 'Wir entwickeln maßgeschneiderte Social Media-Strategien für Ihre Ziele.'
      },
      {
        title: 'Kreative Inhalte',
        description: 'Unsere Inhalte begeistern Ihre Zielgruppe und generieren Engagement.'
      },
      {
        title: 'Datengetriebene Optimierung',
        description: 'Wir optimieren kontinuierlich basierend auf Performance-Daten.'
      }
    ],
    benefits: [
      {
        title: 'Stärkere Online-Präsenz',
        description: 'Eine professionelle und aktive Präsenz in sozialen Medien.'
      },
      {
        title: 'Engagierte Community',
        description: 'Eine aktive und loyalen Community, die mit Ihrer Marke interagiert.'
      },
      {
        title: 'Höhere Reichweite',
        description: 'Mehr Sichtbarkeit und Reichweite für Ihre Marke in sozialen Medien.'
      }
    ],
    images: [
      '/images/services/social-media-1.jpg',
      '/images/services/social-media-2.jpg',
      '/images/services/social-media-3.jpg',
      '/images/services/social-media-4.jpg'
    ],
    faq: [
      {
        question: 'Welche Social Media-Plattformen empfehlen Sie?',
        answer: 'Die Wahl der Plattformen hängt von Ihrer Zielgruppe ab. Wir entwickeln eine maßgeschneiderte Strategie.'
      },
      {
        question: 'Wie oft posten Sie auf Social Media?',
        answer: 'Die Posting-Frequenz wird individuell angepasst, typisch sind 3-5 Posts pro Woche.'
      },
      {
        question: 'Wie messen Sie den Erfolg?',
        answer: 'Wir tracken KPIs wie Engagement, Reichweite und Conversion-Raten.'
      }
    ]
  },
  'content-creation': {
    title: 'Content Creation',
    description: 'Erstellen Sie überzeugende Inhalte, die Ihre Zielgruppe begeistern und Ihre Marke stärken.',
    longDescription: 'Unser Content-Team entwickelt hochwertige Inhalte, die Ihre Zielgruppe begeistern und Ihre Marke stärken. Von Blog-Posts bis hin zu Videos - wir schaffen Inhalte, die überzeugen und Ergebnisse liefern.',
    heroImage: '/images/services/content-creation-hero.jpg',
    details: [
      {
        title: 'Content Strategie',
        content: 'Wir entwickeln eine maßgeschneiderte Content-Strategie für Ihre Ziele.',
        image: '/images/services/content-strategy.jpg'
      },
      {
        title: 'Blog Content',
        content: 'Wir erstellen informative und ansprechende Blog-Beiträge.'
      },
      {
        title: 'Video Content',
        content: 'Wir produzieren professionelle Videos für Ihre Marke.',
        image: '/images/services/content-video.jpg'
      }
    ],
    whatMakesUsSpecial: [
      {
        title: 'Kreative Exzellenz',
        description: 'Unsere Content-Creator sind Experten in ihrem Fach.'
      },
      {
        title: 'Strategischer Ansatz',
        description: 'Wir entwickeln Inhalte, die Ihre Marketing-Ziele unterstützen.'
      },
      {
        title: 'Hohe Qualität',
        description: 'Wir garantieren höchste Qualitätsstandards in allen unseren Inhalten.'
      }
    ],
    benefits: [
      {
        title: 'Hochwertige Inhalte',
        description: 'Professionell erstellte Inhalte, die Ihre Zielgruppe begeistern.'
      },
      {
        title: 'Bessere Sichtbarkeit',
        description: 'Optimierte Inhalte für mehr Reichweite in Suchmaschinen.'
      },
      {
        title: 'Stärkere Markenidentität',
        description: 'Konsistente Inhalte, die Ihre Marke stärken.'
      }
    ],
    images: [
      '/images/services/content-1.jpg',
      '/images/services/content-2.jpg',
      '/images/services/content-3.jpg',
      '/images/services/content-4.jpg'
    ],
    faq: [
      {
        question: 'Welche Arten von Content erstellen Sie?',
        answer: 'Wir erstellen Blog-Posts, Social Media Content, Videos, E-Books und mehr.'
      },
      {
        question: 'Wie oft werden neue Inhalte erstellt?',
        answer: 'Die Frequenz wird individuell angepasst, typisch sind 2-4 Blog-Posts pro Monat.'
      },
      {
        question: 'Wie lange dauert die Erstellung von Content?',
        answer: 'Die Dauer hängt vom Content-Typ ab, typisch sind 1-2 Wochen pro Blog-Post.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-primary text-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Service nicht gefunden</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/60 mb-8">
              {service.description}
            </p>
            <p className="text-white/80 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="btn-secondary"
          >
            Zurück zur Übersicht
          </Link>
        </motion.div>

        {/* Details Section */}
        <div className="space-y-24">
          {service.details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                <h2 className="text-3xl font-bold mb-6">{detail.title}</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {detail.content}
                </p>
              </div>
              {detail.image && (
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="rounded-2xl w-full h-[400px] object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}

          {/* What Makes Us Special */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Was uns besonders macht</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.whatMakesUsSpecial.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Wie wir Ihnen helfen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold">{item.question}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-white/60">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Gespräch und lassen Sie uns gemeinsam Ihre Ziele erreichen.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail; 