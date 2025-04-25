import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import { projectList } from '../data/projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full bg-primary text-white py-32">
      <CustomCursor />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Unsere Projekte</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreich umgesetzten Projekte. Jedes Projekt ist einzigartig und spiegelt unsere Expertise in verschiedenen Bereichen wider.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`} className="block group project-card">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-sm text-white/80">{project.year}</span>
                    </div>
                    <p className="text-sm text-white/80 mb-2">{project.client}</p>
                    <p className="text-sm text-white/90 mb-4">{project.description}</p>
                    <span className="inline-block px-3 py-1 text-sm bg-white/10 rounded-full text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/contact"
          className="btn"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
};

export default ProjectsPage; 