
import { useState, useEffect } from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Grid, List, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    alt: 'Dad teaching life lessons in nature',
    caption: 'Teaching us to appreciate the simple things',
    category: 'wisdom'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop',
    alt: 'Dad with his beloved horses',
    caption: 'Always had a way with animals',
    category: 'animals'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
    alt: 'The family living room',
    caption: 'Where all the best conversations happened',
    category: 'home'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
    alt: 'Dad\'s cooking experiments',
    caption: 'Master of the "creative" meal',
    category: 'cooking'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain adventure',
    caption: 'Dad conquering another summit',
    category: 'adventure'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    alt: 'Workshop wisdom',
    caption: 'Where every project starts with "this should be easy"',
    category: 'workshop'
  }
];

const categories = ['all', 'wisdom', 'animals', 'home', 'cooking', 'adventure', 'workshop'];

export default function PhotoVault() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  useEffect(() => {
    const filtered = photos.filter(photo => {
      const matchesSearch = photo.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.alt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPhotos(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <FloatingNav />
      <WisdomOrb />
      
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Photo Vault
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dad's greatest moments, captured and catalogued by his loving (and slightly obsessive) son
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search Dad's adventures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize h-12 px-4"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'masonry' ? "default" : "outline"}
                onClick={() => setViewMode('masonry')}
                size="icon"
                className="h-12 w-12"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                onClick={() => setViewMode('grid')}
                size="icon"
                className="h-12 w-12"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-6 pb-20">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Dad's looking for his reading glasses... still searching for those photos
            </p>
          </div>
        ) : (
          <div className={`${
            viewMode === 'masonry' 
              ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6' 
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          }`}>
            {filteredPhotos.map((photo, index) => (
              <Card
                key={photo.id}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  viewMode === 'masonry' ? 'mb-6 break-inside-avoid' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
          {selectedPhoto && (
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 h-10 w-10"
              >
                <X className="h-5 w-5" />
              </Button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium mb-2">
                  {selectedPhoto.caption}
                </p>
                <p className="text-white/70 text-sm italic">
                  - As interpreted by his loving (and slightly sarcastic) son
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
