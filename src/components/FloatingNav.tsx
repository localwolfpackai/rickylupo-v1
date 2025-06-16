
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Stories', href: '#stories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Wise Guys', href: '#wise-guys' },
  { label: 'Cool Sh*t', href: '#cool-stuff' }
];

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-playfair text-xl font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
