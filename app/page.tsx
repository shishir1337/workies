import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '@/components/loading-spinner'

const Hero = dynamic(() => import('@/components/hero'), { ssr: true })
const VideoSection = dynamic(() => import('@/components/video-section'), { ssr: true })
const AboutSection = dynamic(() => import('@/components/about-section'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/services-section'), { ssr: true })
const CaseStudiesSection = dynamic(() => import('@/components/case-studies-section'), { ssr: true })
const TeamSection = dynamic(() => import('@/components/team-section'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), { ssr: true })

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <VideoSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CaseStudiesSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
    </>
  )
}

