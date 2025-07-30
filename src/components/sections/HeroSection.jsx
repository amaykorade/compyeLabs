'use client'

import { Sparkles, CheckCircle, Shield, Zap, Target, ArrowRight, Play, Rocket, Code, Users } from 'lucide-react'
import { Section, Container, Heading, Text, Button, Badge, AnimatedWrapper } from '../ui'
import ParticleBackground from '../layout/ParticleBackground'

const HeroSection = () => {
  return (
    <Section id="home" background="gradient" className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <ParticleBackground />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Container className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <AnimatedWrapper animation="fadeIn" delay={0.2}>
            <div className="mb-16">
              <Badge variant="primary" size="lg" className="inline-flex items-center text-lg px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm">
                <Sparkles size={24} className="mr-3" />
                Professional MVP Development Agency
              </Badge>
            </div>
          </AnimatedWrapper>
          
          {/* Main Heading */}
          <AnimatedWrapper animation="fadeIn" delay={0.3}>
            <div className="mb-16">
              <Heading level={1} variant="gradient" className="leading-[0.85] tracking-tight text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8">
                We Build
                <br />
                <span className="text-white font-black drop-shadow-2xl">Amazing Products</span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold">That Scale</span>
              </Heading>
            </div>
          </AnimatedWrapper>
          
          {/* Subheading */}
          <AnimatedWrapper animation="fadeIn" delay={0.4}>
            <div className="mb-20 space-y-8">
              <Text size="2xl" className="text-gray-100 font-bold leading-relaxed max-w-4xl mx-auto text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
                From Concept to Launch in Record Time
              </Text>
              <Text size="xl" className="text-gray-300 leading-relaxed max-w-5xl mx-auto text-xl md:text-2xl lg:text-3xl font-medium">
                We're a specialized agency that transforms your ideas into powerful, scalable products. 
                Our expert team delivers MVPs and full SaaS solutions with cutting-edge technology and AI integration.
              </Text>
            </div>
          </AnimatedWrapper>
          
          {/* CTA Buttons */}
          <AnimatedWrapper animation="fadeIn" delay={0.6}>
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button size="lg" icon="arrow" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </Button>
                <Button variant="secondary" size="lg" icon="play" className="border-2 border-gray-600 hover:border-blue-500 px-16 py-8 text-2xl font-bold rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  View Our Work
                </Button>
              </div>
            </div>
          </AnimatedWrapper>
          
          {/* Stats */}
          <AnimatedWrapper animation="fadeIn" delay={0.7}>
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="p-4 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Rocket size={32} className="text-blue-400 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 font-medium">Products Launched</div>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-purple-500/10 rounded-2xl mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Code size={32} className="text-purple-400 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">15 Days</div>
                  <div className="text-gray-400 font-medium">Average MVP Time</div>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Users size={32} className="text-cyan-400 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
          
          {/* Trust Indicators */}
          <AnimatedWrapper animation="fadeIn" delay={0.8}>
            <div className="pt-16 border-t-2 border-gray-700/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <div className="flex items-center group">
                  <div className="p-3 bg-green-500/20 rounded-full mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <span className="text-gray-200 font-bold text-xl group-hover:text-white transition-colors duration-300">Rapid Development</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-blue-500/20 rounded-full mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Shield size={28} className="text-blue-400" />
                  </div>
                  <span className="text-gray-200 font-bold text-xl group-hover:text-white transition-colors duration-300">Production Ready</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-yellow-500/20 rounded-full mr-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <Zap size={28} className="text-yellow-400" />
                  </div>
                  <span className="text-gray-200 font-bold text-xl group-hover:text-white transition-colors duration-300">AI Powered</span>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection 