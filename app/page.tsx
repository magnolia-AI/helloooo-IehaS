"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
const features = [{
  icon: "⚡",
  title: "Lightning Fast",
  description: "Experience blazing fast performance with our optimized infrastructure that delivers content at the speed of light."
}, {
  icon: "🛡️",
  title: "Secure & Reliable",
  description: "Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee for peace of mind."
}, {
  icon: "🚀",
  title: "Easy to Use",
  description: "Intuitive design and user-friendly interface make it simple for anyone to get started and achieve their goals."
}];
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [sparkles, setSparkles] = useState([]);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const generateSparkles = () => {
      const newSparkles = Array.from({
        length: 5
      }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 2
      }));
      setSparkles(newSparkles);
    };
    window.addEventListener('mousemove', handleMouseMove);
    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);
  const handleGetStarted = () => {
    toast({
      title: "Welcome aboard! 🎉",
      description: "Your journey begins now. Let's build something amazing together!"
    });
  };
  const handleLearnMore = () => {
    toast({
      title: "Coming soon! 📚",
      description: "More information will be available soon. Stay tuned!"
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse follower */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192
      }} />

        {/* Floating sparkles */}
        {sparkles.map(sparkle => <div key={sparkle.id} className="absolute text-2xl animate-pulse" style={{
        left: sparkle.x,
        top: sparkle.y,
        animationDelay: 
      }}>
          ✨
        </div>)}

        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full animate-bounce" style={{
        animationDuration: '3s'
      }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg rotate-45 animate-spin" style={{
        animationDuration: '8s'
      }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full animate-ping" style={{
        animationDuration: '4s'
      }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🚀 Built with Next.js 15
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Welcome to 1
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of web applications with our cutting-edge platform designed for modern users who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" onClick={handleGetStarted}>
                Get Started Today
              </Button>

              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200" onClick={handleLearnMore}>
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their experience with our platform.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" onClick={handleGetStarted}>
              Start Your Journey
            </Button>
          </div>
        </section>
      </div>
    </div>;
}
