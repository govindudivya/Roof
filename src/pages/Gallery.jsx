import { useState, useEffect, useRef } from 'react';
import ImageLightbox from '../components/ImageLightbox';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  // Gallery images - using Unsplash placeholder images for roofing projects
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern luxury roofing project',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium metal roofing installation',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Elegant residential roofing',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Professional roofing craftsmanship',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Contemporary roofing design',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'High-quality roofing materials',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Luxury home roofing project',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Expert roofing installation',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1600607688969-a5fcd3261650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium roofing finish',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern architectural roofing',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Durable roofing solution',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Elegant roofing design',
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(null);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-dark via-primary-dark-alt to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our premium roofing projects and see the quality craftsmanship we deliver
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section 
        ref={galleryRef}
        className="py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid Layout - Masonry style with varying heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {galleryImages.map((image, index) => {
              // Vary aspect ratios for masonry effect - some taller, some wider
              const aspectRatios = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[5/4]'];
              const aspectClass = aspectRatios[index % aspectRatios.length];
              
              return (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 active:translate-y-0 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container with Varying Aspect Ratio for Masonry Effect */}
                  <div className={`relative ${aspectClass} overflow-hidden bg-gray-100`}>
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                        <div className="bg-white/95 text-primary-dark px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          View Full Size
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </div>
  );
};

export default Gallery;
