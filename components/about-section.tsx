'use client'

import { Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Stats from '@/components/stats'
import LoadingSpinner from '@/components/loading-spinner'
import { Button } from '@/components/ui/button'
import { ArrowRight, X } from 'lucide-react'

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="WORKIES Team collaborating in a modern office environment"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">About WORKIES</h2>
            <p className="text-xl text-gray-600 mb-8">
              At WORKIES, we're passionate about driving digital success. Our team of experts combines creativity and data-driven strategies to help your business thrive in the digital landscape.
            </p>
            <Button 
              className="bg-[#004D3B] hover:bg-[#003D2B] text-white"
              onClick={() => setShowModal(true)}
              aria-label="Learn more about WORKIES"
            >
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Impact</h3>
          <Suspense fallback={<LoadingSpinner />}>
            <Stats />
          </Suspense>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </Button>
              <h3 className="text-2xl font-bold mb-4">About WORKIES</h3>
              <p className="mb-4">
                WORKIES is a leading digital marketing agency founded in 2010. We specialize in helping businesses of all sizes achieve their online marketing goals through innovative strategies and cutting-edge technologies.
              </p>
              <p className="mb-4">
                Our team of experts brings diverse skills and experiences to every project, ensuring comprehensive solutions that drive real results. From SEO and content marketing to social media management and PPC campaigns, we offer a full suite of digital marketing services tailored to your unique needs.
              </p>
              <p>
                At WORKIES, we believe in transparency, continuous learning, and measurable results. Our client-centric approach and data-driven methodologies have helped hundreds of businesses increase their online visibility, engage their target audience, and achieve sustainable growth in the digital realm.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

