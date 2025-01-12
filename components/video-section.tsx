'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlayCircle, Pause } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Our Approach to Digital Marketing</h2>
          <p className="text-gray-600">Watch how we transform businesses through innovative strategies</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Video Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3626148/3626148-uhd_2732_1440_25fps.mp4"
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 text-white border-white hover:bg-white/40 transition-all duration-300 transform hover:scale-110"
              onClick={toggleVideo}
            >
              {isPlaying ? (
                <Pause className="mr-2 h-8 w-8" />
              ) : (
                <PlayCircle className="mr-2 h-8 w-8" />
              )}
              {isPlaying ? 'Pause Video' : 'Watch Our Story'}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

