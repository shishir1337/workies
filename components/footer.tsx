import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#004D3B] to-[#00A86B] rounded-3xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready To Launch Your Digital Marketing Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to start your digital marketing journey? Let us help you achieve your goals.
          </p>
          <Button className="bg-white text-[#004D3B] hover:bg-gray-100">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#004D3B] flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-semibold">WORKIES</span>
            </div>
            <p className="text-gray-600 mb-4">
              Digital marketing agency focused on helping businesses grow through effective online strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#004D3B]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#004D3B]" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#004D3B]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#004D3B]" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#004D3B]">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#004D3B]">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-[#004D3B]">Services</a></li>
              <li><a href="#work" className="text-gray-600 hover:text-[#004D3B]">Work</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#004D3B]">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#004D3B]">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#004D3B]">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#004D3B]">Content Strategy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay up to date with our latest news and products.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-grow" aria-label="Email for newsletter" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} WORKIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

