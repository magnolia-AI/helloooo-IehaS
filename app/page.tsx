'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from "@/hooks/use-toast"
import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sparkles, Rocket, Heart, Star, Zap, Rainbow, Smile, Music } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    
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

  const handleButtonClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    setShowConfetti(true)
    
    const messages = [
      "🎉 Awesome click!",
      "✨ You're on fire!",
      "🚀 Keep clicking!",
      "💫 Amazing!",
      "🌟 Fantastic!",
      "🎊 You're unstoppable!",
      "💥 Boom! Another one!",
      "🎈 Party time!"
    ]
    
    toast({ 
      title: messages[Math.floor(Math.random() * messages.length)], 
      description: `Click count: ${newCount}! You're having fun!` 
    })
    
    setTimeout(() => setShowConfetti(false), 2000)
  }

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, duration: 3 },
    { Icon: Star, delay: 0.5, duration: 4 },
    { Icon: Heart, delay: 1, duration: 3.5 },
    { Icon: Zap, delay: 1.5, duration: 3 },
    { Icon: Rainbow, delay: 2, duration: 4.5 },
    { Icon: Smile, delay: 2.5, duration: 3.5 },
    { Icon: Music, delay: 3, duration: 4 },
    { Icon: Rocket, delay: 3.5, duration: 3 }
  ]

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-blue-400 via-green-500 to-yellow-500 opacity-10 animate-pulse" />
      
      {/* Floating Icons */}
      {isMounted && windowSize.width > 0 && (
        <div className="fixed inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, duration }, index) => (
            <motion.div
              key={index}
              className="absolute text-purple-300 opacity-20"
              initial={{ 
                x: Math.random() * windowSize.width, 
                y: windowSize.height + 50,
                rotate: 0,
                scale: 0.5
              }}
              animate={{ 
                y: -50,
                rotate: 360,
                scale: [0.5, 1, 0.5],
                x: Math.random() * windowSize.width
              }}
              transition={{ 
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && isMounted && windowSize.width > 0 && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
                initial={{ 
                  x: windowSize.width / 2, 
                  y: windowSize.height / 2,
                  scale: 0
                }}
                animate={{ 
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                  scale: [0, 1, 0],
                  rotate: 360
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.section 
        className="container mx-auto px-4 pt-24 pb-20 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Something Fun & Interactive
            </Badge>
            
            <h1 className="text-6xl font-bold tracking-tight lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Welcome to Fun Land!
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
              This is your playground of interactive elements, smooth animations, and delightful surprises. 
              Click around, hover over things, and enjoy the magic! ✨
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              ref={buttonRef}
              onClick={handleButtonClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              size="lg"
              className="px-8 py-4 relative overflow-hidden text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600"
            >
              <motion.span 
                className="relative z-10 drop-shadow-sm flex items-center gap-2"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Rocket className="w-5 h-5" />
                Click for Magic! ({clickCount})
              </motion.span>
              <div 
                className="absolute inset-0 opacity-30 transition-all duration-200 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, 
                    rgba(255, 255, 255, 0.4) 0%, 
                    rgba(255, 255, 255, 0.2) 40%, 
                    transparent 70%
                  )`
                }}
              />
            </Button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
                onClick={() => toast({ title: "🎨 Creative Mode!", description: "You discovered the secret button!" })}
              >
                <Star className="w-5 h-5 mr-2" />
                Explore More
              </Button>
            </motion.div>
          </motion.div>

          {/* Interactive Cards */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Heart, title: "Made with Love", desc: "Every pixel crafted with care", color: "from-red-400 to-pink-500" },
              { icon: Zap, title: "Lightning Fast", desc: "Smooth animations everywhere", color: "from-yellow-400 to-orange-500" },
              { icon: Rainbow, title: "Colorful Fun", desc: "Bringing joy to your screen", color: "from-purple-400 to-blue-500" }
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-2 border-transparent hover:border-purple-200 transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-purple-50">
                  <CardContent className="p-0 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Stats */}
          <motion.div 
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-800">Fun Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{clickCount}</div>
                <div className="text-sm text-purple-500">Magic Clicks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">∞</div>
                <div className="text-sm text-pink-500">Fun Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-blue-500">Awesome</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">🎉</div>
                <div className="text-sm text-green-500">Mood</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}











