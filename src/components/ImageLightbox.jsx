import { useEffect, useState } from 'react';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrevious]);

  // Reset image loaded state and trigger fade when index changes
  useEffect(() => {
    setImageLoaded(false);
    setFadeKey((prev) => prev + 1);
  }, [currentIndex]);

  if (!images || images.length === 0 || currentIndex === null) {
    return null;
  }

  const currentImage = images[currentIndex];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in-scale"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 z-10 text-white hover:text-accent-gold transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-white/20 hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Close lightbox"
      >
        <HiX className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-2 sm:left-4 md:left-8 z-10 text-white hover:text-accent-gold transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Previous image"
        >
          <HiChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-7xl max-h-[90vh] mx-2 sm:mx-4 md:mx-8 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <img
            key={fadeKey}
            src={currentImage.url}
            alt={currentImage.alt || `Gallery image ${currentIndex + 1}`}
            className={`max-w-full max-h-[85vh] sm:max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
          />
        </div>
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 md:right-8 z-10 text-white hover:text-accent-gold transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-white/20 hover:scale-110 active:scale-95 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Next image"
        >
          <HiChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </button>
      )}
    </div>
  );
};

export default ImageLightbox;
