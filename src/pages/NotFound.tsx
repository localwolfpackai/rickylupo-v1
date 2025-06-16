
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="text-8xl mb-8">🔍</div>
        <h1 className="font-playfair text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="font-playfair text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Dad's Looking for This Page...
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Looks like Dad unplugged something again, or maybe he's still looking for his reading glasses. 
          Either way, this page seems to have wandered off like Dad at the hardware store.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="min-h-[48px] px-8">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Dad's Home Base
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
            <button onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </Button>
        </div>
        
        <div className="mt-12 p-6 bg-white/50 dark:bg-black/30 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            "Have you tried turning it off and on again?" - Dad's universal tech support advice
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
