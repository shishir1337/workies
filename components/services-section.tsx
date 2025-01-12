'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe2, TrendingUp, BarChart2, Search, PenTool, Monitor } from 'lucide-react'

const services = [
  {
    icon: Globe2,
    title: 'Web & App Development',
    description: 'We develop responsive and user-friendly websites and applications.',
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns to boost your online presence.',
  },
  {
    icon: BarChart2,
    title: 'Email Marketing',
    description: 'Effective email campaigns to engage and convert your audience.',
  },
  {
    icon: Search,
    title: 'Search Engine Marketing',
    description: 'Data-driven SEM strategies to increase your visibility.',
  },
  {
    icon: PenTool,
    title: 'Creative & Content',
    description: 'Compelling content that tells your brand story.',
  },
  {
    icon: Monitor,
    title: 'Digital Marketing & PPC',
    description: 'Results-focused digital marketing and PPC campaigns.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#004D3B] to-[#00A86B]" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing services to help your business thrive in the online world.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <service.icon className="w-12 h-12 text-[#004D3B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="text-[#004D3B] p-0 hover:underline">
                  Learn More →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

