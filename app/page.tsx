'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const { toast } = useToast();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [isClient, setIsClient] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);

    // Set initial window size
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Global mouse position for background effects
      setGlobalMousePosition({ x: e.clientX, y: e.clientY });

      // Button-relative mouse position for button highlight
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        setMousePosition({ x, y });
      }
    };

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="min-h-full relative overflow-hidden">
      {/* Animated background with mouse-following gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${globalMousePosition.x}px ${globalMousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Sparkle effects */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${(globalMousePosition.x / windowSize.width) * 100}%`,
              top: `${(globalMousePosition.y / windowSize.height) * 100}%`,
              animationDelay: '0s'
            }}
          />

          <div
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-80 animate-ping"
            style={{
              left: `${((globalMousePosition.x + 100) / windowSize.width) * 100}%`,
              top: `${((globalMousePosition.y + 50) / windowSize.height) * 100}%`,
              animationDelay: '0.5s'
            }}
          />

          <div
            className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70 animate-pulse"
            style={{
              left: `${((globalMousePosition.x - 80) / windowSize.width) * 100}%`,
              top: `${((globalMousePosition.y - 30) / windowSize.height) * 100}%`,
              animationDelay: '1s'
            }}
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Welcome!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of web applications with beautiful animations and interactive design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                ref={buttonRef}
                size="lg"
                className=""
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
                }}
                onClick={() => {
                  toast({
                    title: "Welcome!",
                    description: "Your interactive app is ready to use.",
                  });
                }}
              >
                Get Started
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Amazing Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                  <p className="text-gray-600">Built with Next.js 15 for lightning-fast performance and optimal user experience.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
                  <p className="text-gray-600">Modern UI components with smooth animations and interactive elements.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">User Focused</h3>
                  <p className="text-gray-600">Designed with user experience in mind, featuring intuitive interactions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

