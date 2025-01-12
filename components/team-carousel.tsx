'use client'

import Image from 'next/image'
import { useState } from 'react'
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

export default function TeamCarousel() {
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
                      className="object-cover"
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

