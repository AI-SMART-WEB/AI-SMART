import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PageStyles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Main Campus',
      category: 'Campus',
      caption: 'Campus Moments - Between lectures and labs, community is where confidence is built'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Collaboration in Motion',
      category: 'Events',
      caption: 'Ideas move faster when minds move together'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'The Language of Machines',
      category: 'Facilities',
      caption: 'Lines of code as verses in a new language of possibility'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Study Hall',
      category: 'Facilities',
      caption: 'Learning Without Borders - Tools for a journey that never truly ends'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Global Classroom',
      category: 'Events',
      caption: 'Many accents, one conversation — a world of perspectives in a single room'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Robotic Futures',
      category: 'Facilities',
      caption: 'From mechanical motion to embodied intelligence, the future moves with purpose'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Immersive Realities',
      category: 'Facilities',
      caption: 'Step inside the simulation where learning, play, and discovery merge'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Innovation Labs',
      category: 'Facilities',
      caption: 'Access to research labs and innovation centers for hands-on learning'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Future-Ready Graduates',
      category: 'Events',
      caption: 'From first day on campus to first day on the job — a path designed with purpose'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Innovation Across Cultures',
      category: 'Events',
      caption: 'When cultures connect, innovation accelerates — and the world grows smaller, brighter, closer'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Four Cities, One Future',
      category: 'Campus',
      caption: 'From Paris to Dubai, Germany to Bucharest — one degree, many worlds'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ethics in the Loop',
      category: 'Facilities',
      caption: 'True intelligence is not just powerful — it is principled, responsible, and human-aware'
    }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      rotateY: 5,
      z: 50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      <div className="page-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Campus Gallery</h1>
          <p>Take a virtual tour of our beautiful campus and facilities</p>
        </motion.div>
      </div>

      <div className="container">
        <motion.div 
          className="gallery-grid-page"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item-page"
              custom={index}
              variants={imageVariants}
              whileHover="hover"
              onClick={() => setSelectedImage(image)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay-page">
                <h4>{image.title}</h4>
                <span>{image.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              className="close-modal"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;

