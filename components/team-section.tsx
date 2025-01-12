'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Sarah Lee",
    role: "Creative Director",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Michael Chen",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Emily Rodriguez",
    role: "SEO Specialist",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    name: "David Patel",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/300?img=5",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 5 >= team.length ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? team.length - 5 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Exceptional Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our diverse group of experts brings a wealth of experience and innovation to every project.
            Together, we're committed to driving your digital success.
          </p>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6">
              <AnimatePresence mode="sync">
                {team.slice(currentIndex, currentIndex + 5).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-none w-[200px]"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative aspect-square rounded-full overflow-hidden mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                      <p className="text-gray-600 text-center">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next team member"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

