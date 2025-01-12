'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Client 1",
    role: "Marketing Director",
    content: "The digital marketing team has transformed our online presence with their innovative strategies and dedication to results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-828449ea48c6a11a7609895919d4fcc2-y58p15z8sbBmh7LYlyH6tDdDx33OJq.webp",
  },
  {
    name: "Client 2",
    role: "CEO",
    content: "Working with this agency has been a game-changer for our business. Their expertise in digital marketing is unmatched.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-828449ea48c6a11a7609895919d4fcc2-y58p15z8sbBmh7LYlyH6tDdDx33OJq.webp",
  },
]

export default function Testimonials({ useRandomAvatars = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <Avatar className="w-24 h-24 border-4 border-[#004D3B]">
              <AvatarImage src={useRandomAvatars ? `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}` : testimonials[currentIndex].image} />
              <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-xl mb-6">{testimonials[currentIndex].content}</p>
          <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
          <p className="text-gray-600">{testimonials[currentIndex].role}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

