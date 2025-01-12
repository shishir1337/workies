'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full bg-[#004D3B] text-white text-sm font-semibold"
            >
              Innovative Digital Solutions
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-800 block mb-2">WORKIES</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#004D3B] to-[#00A86B]">
                DIGITAL MARKETING AGENCY
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-xl">
              We help businesses grow online through effective digital marketing strategies and innovative solutions tailored to your unique needs.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#004D3B] hover:bg-[#003D2B] text-white px-8 py-6 text-lg w-full sm:w-auto group transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg border-[#004D3B] text-[#004D3B] hover:bg-[#004D3B] hover:text-white w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#004D3B]/20 to-transparent rounded-lg"></div>
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Digital Marketing Team" 
              width={800}
              height={600}
              className="rounded-lg shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Zap className="text-[#004D3B] h-6 w-6" />
                <span className="font-semibold text-gray-800">Boost Your Online Presence</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

