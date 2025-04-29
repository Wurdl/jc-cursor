import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoScrollSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Video-Fortschritt basierend auf Scroll-Position
  const videoProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  useEffect(() => {
    if (videoRef.current) {
      // Video-Dauer speichern, wenn das Video geladen ist
      const handleLoadedMetadata = () => {
        setVideoDuration(videoRef.current?.duration || 0);
        setIsLoaded(true);
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current || !isLoaded) return;

    // Video-Fortschritt basierend auf Scroll-Position aktualisieren
    const unsubscribe = videoProgress.onChange((progress) => {
      if (videoRef.current) {
        videoRef.current.currentTime = progress * videoDuration;
      }
    });

    return () => {
      unsubscribe();
    };
  }, [videoProgress, videoDuration, isLoaded]);

  return (
    <section className="py-12 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Unsere Geschichte</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Entdecken Sie unsere Reise und wie wir zu dem geworden sind, was wir heute sind.
          </p>
        </motion.div>

        <div 
          ref={containerRef} 
          className="relative h-[400vh]"
        >
          <div className="sticky top-0 left-0 right-0 h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  preload="auto"
                >
                  <source src="./scroll-sequence-test.mp4" type="video/mp4" />
                  Ihr Browser unterstützt keine Video-Wiedergabe.
                </video>
                
                {/* Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Text-Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                    Jack Coleman - Ihre Agentur für kreative Lösungen
                  </h3>
                  <p className="text-sm md:text-base text-white/80 max-w-2xl">
                    Seit unserer Gründung haben wir uns darauf spezialisiert, einzigartige Werbe- und Eventerlebnisse zu schaffen, die Ihre Marke auf das nächste Level heben.
                  </p>
                </div>

                {/* Scroll-Hinweis */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <p className="text-lg md:text-xl mb-2">Scrollen Sie nach oben und unten</p>
                  <div className="flex flex-col items-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <svg className="w-5 h-5 md:w-6 md:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoScrollSequence; 