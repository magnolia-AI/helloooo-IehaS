'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [scrollY, setScrollY] = useState(0)
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

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15+ for optimal performance and speed"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with modern best practices"
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Stunning UI components with smooth animations"
    },
    {
      icon: Rocket,
      title: "Ready to Launch",
      description: "Production-ready template to kickstart your project"
    }
  ]

  return (
    <div className="min-h-full relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.1) 0%, transparent 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Welcome to the Future
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Build Something
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Transform your ideas into reality with our modern, fast, and beautiful web application template. 
            Built with the latest technologies for developers who demand excellence.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              ref={buttonRef}
              onClick={() => toast({ 
                title: "🚀 Ready to launch!", 
                description: "Your journey to building something amazing starts here!" 
              })}
              size="lg"
              className="px-8 py-4 relative overflow-hidden text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group"
            >
              <span className="relative z-10 drop-shadow-sm flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div 
                className="absolute inset-0 opacity-20 transition-all duration-200 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    rgba(255, 255, 255, 0.2) 40%, 
                    transparent 70%
                  )`
                }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
              Why Choose Our Template?
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Everything you need to build modern web applications, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Building?
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Join thousands of developers who have chosen our template to bring their ideas to life.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => toast({ 
                  title: "🎉 Welcome aboard!", 
                  description: "Let's build something incredible together!" 
                })}
              >
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}






