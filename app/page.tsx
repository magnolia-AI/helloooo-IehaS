'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { useState, useRef } from 'react'

{/* 
  TEMPLATE PAGE: Home
  This is a template home page.
  Replace all content with content that suits the users request.
*/}
export default function Home() {
  const { toast } = useToast()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 }) // Reset to center
  }

  return (
    <div className="min-h-full">

      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Template Starter
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            This is a customizable template. Replace all content with your own using the chat interface.
          </p>
          <div className="mt-8">
            <Button 
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => toast({ title: "Button clicked!", description: "Your shiny button is working!" })}
              size="lg"
              className="px-8 py-3 relative overflow-hidden text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              style={{
                background: `
                  radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    rgba(255, 255, 255, 0.2) 30%, 
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%
                  ),
                  linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)
                `
              }}
            >
              <span className="relative z-10">Click Me!</span>
              <div 
                className="absolute inset-0 opacity-60 transition-all duration-200 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 100px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.6) 0%, 
                    rgba(255, 255, 255, 0.3) 25%, 
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%
                  )`
                }}
              />
              <div 
                className="absolute inset-0 opacity-30 transition-all duration-100 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 50px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.8) 0%, 
                    rgba(255, 255, 255, 0.4) 30%, 
                    transparent 60%
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


