'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const { toast } = useToast()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [isClient, setIsClient] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Set initial window size
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Global mouse position for background effects
      setGlobalMousePosition({ x: e.clientX, y: e.clientY })
      
      // Button-relative mouse position for button highlight
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <div className="min-h-full relative overflow-hidden">
      {/* Animated background with mouse-following gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(circle 600px at ${globalMousePosition.x}px ${globalMousePosition.y}px, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(236, 72, 153, 0.05) 50%, 
              transparent 70%
            ),
            linear-gradient(45deg, 
              rgba(59, 130, 246, 0.03) 0%, 
              rgba(147, 51, 234, 0.03) 50%, 
              rgba(236, 72, 153, 0.03) 100%
            )
          `
        }}
      />
      
      {/* Sparkle effects */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${(globalMousePosition.x + 100) % windowSize.width}px`,
              top: `${(globalMousePosition.y + 50) % windowSize.height}px`,
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-80 animate-ping"
            style={{
              left: `${(globalMousePosition.x - 80) % windowSize.width}px`,
              top: `${(globalMousePosition.y - 30) % windowSize.height}px`,
              animationDelay: '0.5s'
            }}
          />
          <div 
            className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70 animate-pulse"
            style={{
              left: `${(globalMousePosition.x + 60) % windowSize.width}px`,
              top: `${(globalMousePosition.y + 80) % windowSize.height}px`,
              animationDelay: '1s'
            }}
          />
        </div>
      )}

      <section className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Welcome to Your App
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Build something amazing with modern web technologies. Your journey starts here.
          </p>
          <div className="mt-8">
            <Button 
              ref={buttonRef}
              onClick={() => toast({ title: "✨ Button clicked!", description: "Your ultra-shiny button is working perfectly!" })}
              size="lg"
              className="px-8 py-3 relative overflow-hidden text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400"
            >
              <span className="relative z-20 drop-shadow-lg">✨ Click Me! ✨</span>
              
              {/* Main mouse-following highlight */}
              <div 
                className="absolute inset-0 opacity-40 transition-all duration-200 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.6) 0%, 
                    rgba(255, 255, 255, 0.3) 30%, 
                    rgba(255, 255, 255, 0.1) 60%, 
                    transparent 80%
                  )`
                }}
              />
              
              {/* Secondary glow effect */}
              <div 
                className="absolute inset-0 opacity-20 transition-all duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    transparent 70%
                  )`
                }}
              />
              
              {/* Animated shimmer overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 animate-pulse" />
              </div>
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-md border border-white/20 pointer-events-none" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}









