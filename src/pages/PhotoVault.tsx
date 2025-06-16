
import { useState } from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    alt: 'Dad teaching life lessons in nature',
    caption: 'Teaching us to appreciate the simple things'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop',
    alt: 'Dad with his beloved horses',
    caption: 'Always had a way with animals'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
    alt: 'The family living room',
    caption: 'Where all the best conversations happened'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
    alt: 'Dad\'s cooking experiments',
    caption: 'Master of the "creative" meal'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain adventure',
    caption: 'Dad conquering another summit'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    alt: 'Workshop wisdom',
    caption: 'Where every project starts with "this should be easy"'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    alt: 'Dad and nature',
    caption: 'Finding peace in the outdoors'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Dad\'s adventures',
    caption: 'Always up for a new adventure'
  }
];

export default function PhotoVault() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <FloatingNav />
      <WisdomOrb />
      
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6">
              Photo Vault
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Dad's greatest moments, beautifully preserved
            </p>
          </div>
        </div>
      </div>

      {/* Clean Photo Grid */}
      <div className="container mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group overflow-hidden bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 cursor-pointer shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-medium leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          {selectedPhoto && (
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 z-10 text-white hover:bg-white/20 h-12 w-12 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white text-xl font-medium">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
