
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop',
    alt: 'Dad teaching life lessons in nature',
    caption: 'Teaching us to appreciate the simple things'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=400&fit=crop',
    alt: 'Dad with his beloved horses',
    caption: 'Always had a way with animals'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop',
    alt: 'The family living room',
    caption: 'Where all the best conversations happened'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop',
    alt: 'Dad\'s cooking experiments',
    caption: 'Master of the "creative" meal'
  }
];

export const PhotoGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const goToPrevious = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (selectedPhotoIndex === null) return;
    
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'Escape':
        event.preventDefault();
        closeLightbox();
        break;
    }
  };

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4">
          Captured Moments
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Every photo tells a story, and Dad's got the best stories of all
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-lg"
                aria-label={`View ${photo.alt} in lightbox`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <Dialog open={selectedPhoto !== null} onOpenChange={closeLightbox}>
        <DialogContent 
          className="max-w-6xl w-full p-0 bg-black border-0 focus:outline-none"
          onKeyDown={handleKeyDown}
          aria-describedby="lightbox-description"
        >
          {selectedPhoto && (
            <div className="relative min-h-[80vh] flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-20 text-white hover:bg-white/20 h-12 w-12 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next photo"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Main Image */}
              <div className="flex flex-col items-center justify-center w-full h-full p-8">
                <img
                  src={selectedPhoto.src.replace('w=500&h=400', 'w=1200&h=900')}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Caption and Counter */}
                <div className="mt-6 text-center">
                  <p className="text-white text-xl font-medium mb-2" id="lightbox-description">
                    {selectedPhoto.caption}
                  </p>
                  <p className="text-white/60 text-sm">
                    {selectedPhotoIndex! + 1} of {photos.length}
                  </p>
                </div>
              </div>

              {/* Keyboard Hints */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs text-center">
                <p>Use arrow keys to navigate • ESC to close</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
