import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary text-white py-32">
        <div className="container mx-auto  text-center">
          <h1 className="text-4xl font-bold mb-4">Projekt nicht gefunden</h1>
          <Link to="/projects" className="text-white/60 hover:text-white transition-colors">
            Zurück zur Projektübersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            to="/projects"
            className="btn-secondary"
          >
            Zurück zur Übersicht
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center justify-center gap-4 text-white/60">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full aspect-[21/9] overflow-hidden rounded-2xl mb-16">
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Die Herausforderung</h2>
              <p className="text-white/80 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Unsere Lösung</h2>
              <p className="text-white/80 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {project.images.map((image, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="mt-4 text-sm text-white/60">{image.caption}</p>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="mb-24">
            <h2 className="text-2xl font-semibold mb-8 text-center">Ergebnisse</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-lg text-center">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-white/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-light mb-6">
              {project.testimonial.quote}
            </blockquote>
            <cite className="not-italic">
              <div className="font-semibold">{project.testimonial.author}</div>
              <div className="text-white/60">{project.testimonial.position}</div>
            </cite>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 