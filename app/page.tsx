'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

{/* 
  TEMPLATE PAGE: Home
  This is a template home page.
  Replace all content with content that suits the users request.
*/}
export default function Home() {
  const { toast } = useToast()
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
              onClick={() => toast({ title: "Button clicked!", description: "Your simple button is working!" })}
              size="lg"
              className="px-8 py-3 relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
            >
              Click Me!
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

