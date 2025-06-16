
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', internal: true },
  { label: 'Photo Vault', href: '/photo-vault', internal: true },
  { label: 'Wise Guys', href: '/wise-guys', internal: true },
  { label: 'Cool Stuff', href: 'https://bruno-simon.com/', internal: false }
];

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = location.pathname === item.href;
    
    if (item.internal) {
      return (
        <Link
          to={item.href}
          className={`text-sm font-medium transition-colors duration-200 relative group ${
            isActive 
              ? 'text-warmth-600 dark:text-warmth-400' 
              : 'text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400'
          }`}
        >
          {item.label}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-warmth-500 transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400 transition-colors duration-200 relative group flex items-center gap-1"
      >
        {item.label}
        <ExternalLink className="h-3 w-3" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warmth-500 transition-all duration-300 group-hover:w-full" />
      </a>
    );
  };

  const MobileNavLink = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = location.pathname === item.href;
    
    if (item.internal) {
      return (
        <Link
          to={item.href}
          className={`block text-lg font-medium transition-colors duration-200 py-2 ${
            isActive 
              ? 'text-warmth-600 dark:text-warmth-400' 
              : 'text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400'
          }`}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-warmth-600 dark:hover:text-warmth-400 transition-colors duration-200 py-2 flex items-center gap-2"
      >
        {item.label}
        <ExternalLink className="h-4 w-4" />
      </a>
    );
  };

  return (
    <>
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-white/30 metallic-button">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[44px] min-w-[44px]"
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
              <h2 className="font-playfair text-xl font-bold">Dad's Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px]"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <MobileNavLink key={item.label} item={item} />
                ))}
                <div className="pt-4 border-t mt-6">
                  <p className="text-xs text-gray-500 italic">
                    "What's the WiFi password again?"
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
