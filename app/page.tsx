'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from 'react'

{/* 
  TEMPLATE PAGE: Home
  This is a template home page.
  Replace all content with content that suits the users request.
*/}
export default function Home() {
  const { toast } = useToast()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [])

  return (
    <div className="min-h-full">

      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to Your App
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Build something amazing with modern web technologies. Your journey starts here.
          </p>
          <div className="mt-8">
            <Button 
              ref={buttonRef}
              onClick={() => toast({ title: "Button clicked!", description: "Your shiny button is working!" })}
              size="lg"
              className="px-8 py-3 relative overflow-hidden text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              <span className="relative z-10 drop-shadow-sm">Click Me!</span>
              <div 
                className="absolute inset-0 opacity-20 transition-all duration-200 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.3) 0%, 
                    rgba(255, 255, 255, 0.15) 40%, 
                    transparent 30%
                  )`
                }}
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}






