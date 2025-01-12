'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Director",
    content: "The digital marketing team has transformed our online presence with their innovative strategies and dedication to results.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    role: "CEO",
    content: "Working with this agency has been a game-changer for our business. Their expertise in digital marketing is unmatched.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Mike Johnson",
    role: "E-commerce Manager",
    content: "Our online sales have skyrocketed since partnering with WORKIES. Their data-driven approach delivers real results.",
    image: "https://i.pravatar.cc/150?img=3",
  },
]

export default function TestimonialsSection() {
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
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-[#004D3B] rounded-full p-4 inline-block mb-6">
            <Quote className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from businesses we've helped grow and succeed in the digital landscape
          </p>
        </motion.div>
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
                  <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
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
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

