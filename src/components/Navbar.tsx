
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-studio/95 backdrop-blur-md shadow-md"
          : "py-5 bg-studio/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7139fd1f-ae79-4658-bbb3-5f2e11306cb1.png" 
                alt="33 Digital" 
                className="h-16 md:h-20 transition-all duration-300" 
              />
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="text-white focus:outline-none hover:text-studio-accent transition-colors p-2 rounded-full hover:bg-studio-muted/20"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-studio border-l border-gray-800 w-full max-w-xs p-6">
              <div className="flex flex-col items-start justify-start h-full space-y-8 text-xl pt-8">
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? "text-studio-accent" : "text-white"
                  } hover:text-studio-accent transition-colors`}
                >
                  Home
                </Link>
                <Link
                  to="/portfolio"
                  className={`${
                    location.pathname === "/portfolio" ? "text-studio-accent" : "text-white"
                  } hover:text-studio-accent transition-colors`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/about"
                  className={`${
                    location.pathname === "/about" ? "text-studio-accent" : "text-white"
                  } hover:text-studio-accent transition-colors`}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className={`${
                    location.pathname === "/blog" ? "text-studio-accent" : "text-white"
                  } hover:text-studio-accent transition-colors`}
                >
                  Blog
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
