'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState('tools')

  const tools = [
    {
      name: 'textEditor',
      description: 'Create, view, and modify files in the project',
      icon: '📝',
      color: 'bg-blue-500'
    },
    {
      name: 'shell',
      description: 'Execute shell commands and install dependencies',
      icon: '💻',
      color: 'bg-green-500'
    },
    {
      name: 'imageGeneration',
      description: 'Generate AI images with custom prompts',
      icon: '🎨',
      color: 'bg-purple-500'
    },
    {
      name: 'fuzzyCodeSearch',
      description: 'Search for code using semantic similarity',
      icon: '🔍',
      color: 'bg-orange-500'
    },
    {
      name: 'directReferenceSearch',
      description: 'Find exact matches using grep search',
      icon: '🎯',
      color: 'bg-red-500'
    },
    {
      name: 'branchAwareness',
      description: 'Check and sync changes from main branch',
      icon: '🌿',
      color: 'bg-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Magnolia AI Tools Demo
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive showcase of all available tools for building modern web applications
          </p>
        </motion.div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tools">Available Tools</TabsTrigger>
            <TabsTrigger value="features">Key Features</TabsTrigger>
            <TabsTrigger value="workflow">Workflow Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center text-2xl`}>
                          {tool.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            Tool
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Next.js 15+ Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Built with the latest Next.js features including App Router, 
                    Server Components, and modern React patterns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    Shadcn/ui Components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Pre-installed with a complete set of beautiful, accessible 
                    UI components ready to use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Framer Motion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Smooth animations and interactions powered by Framer Motion 
                    for a modern user experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔧</span>
                    Development Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Complete toolchain for file management, code search, 
                    dependency installation, and branch synchronization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workflow" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Typical Development Workflow</CardTitle>
                <CardDescription>
                  How Magnolia uses all tools together to build applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">Branch Awareness Check</h3>
                      <p className="text-slate-600 text-sm">
                        Check for updates on main branch and sync compatible changes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">Code Exploration</h3>
                      <p className="text-slate-600 text-sm">
                        Use fuzzy search and direct reference search to understand existing code
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Dependency Management</h3>
                      <p className="text-slate-600 text-sm">
                        Install required packages using shell commands
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold">File Creation & Editing</h3>
                      <p className="text-slate-600 text-sm">
                        Create and modify files with complete, valid code
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold">Asset Generation</h3>
                      <p className="text-slate-600 text-sm">
                        Generate AI images when needed for the application
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> This demo page was created using all these tools in sequence - 
                    branch checking, code exploration, dependency installation, and file creation!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Ready to Build Something Amazing? 🚀
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
