'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'

interface Stat {
  value: number
  label: string
}

async function fetchStats(): Promise<Stat[]> {
  // In a production environment, replace this with an actual API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { value: 90, label: 'Client Retention' },
    { value: 95, label: 'Budget Control' },
    { value: 82, label: 'ROI' },
    { value: 78, label: 'Service Demand' },
    { value: 85, label: 'Agency Growth' },
  ]
}

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStats()
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch stats:', err)
        setError('Failed to load stats. Please try again later.')
        setLoading(false)
      })
  }, [])

  if (error) {
    return (
      <div className="text-center text-red-500" role="alert">
        {error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {loading
        ? Array(5).fill(0).map((_, index) => (
            <div key={index} className="text-center">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
              <Skeleton className="h-4 w-1/2 mx-auto" />
            </div>
          ))
        : stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative h-1 bg-gray-200 mb-4">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#004D3B]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="font-bold text-3xl mb-1" aria-label={`${stat.value}% ${stat.label}`}>
                {stat.value}%
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
    </div>
  )
}

