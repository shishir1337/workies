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

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-[#004D3B] to-[#00A86B] rounded-3xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <service.icon className="w-8 h-8 text-[#004D3B] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="text-[#004D3B] p-0 hover:underline">
                Explore Service →
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

