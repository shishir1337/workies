'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    title: "TechCorp's Traffic Soars With SEO Optimization",
    growth: "+50%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-828449ea48c6a11a7609895919d4fcc2-y58p15z8sbBmh7LYlyH6tDdDx33OJq.webp",
    category: "SEO Optimization",
  },
  {
    title: "FashionWear's Engagement Soars With Creative Campaigns",
    growth: "+75%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-828449ea48c6a11a7609895919d4fcc2-y58p15z8sbBmh7LYlyH6tDdDx33OJq.webp",
    category: "Brand Strategy",
  },
  {
    title: "UrbanNest's Brand Revamp Boosts Recognition",
    growth: "+50%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-828449ea48c6a11a7609895919d4fcc2-y58p15z8sbBmh7LYlyH6tDdDx33OJq.webp",
    category: "Social Media Management",
  },
]

export default function CaseStudies() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                {study.category}
              </div>
              <div className="absolute top-4 right-4 bg-[#004D3B] text-white px-3 py-1 rounded-full text-sm">
                {study.growth}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive case study showcasing our strategic approach and results.
              </p>
              <Button variant="link" className="text-[#004D3B] p-0 hover:underline">
                Read Case Study →
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

