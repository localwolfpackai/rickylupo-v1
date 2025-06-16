
import { Card } from '@/components/ui/card';

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
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover: scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
