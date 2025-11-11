'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DevPreviewPage() {
  const [selectedView, setSelectedView] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  const views = {
    mobile: { width: 375, name: 'Mobile', icon: '📱', class: 'max-w-[375px]' },
    tablet: { width: 768, name: 'Tablet', icon: '📱', class: 'max-w-[768px]' },
    desktop: { width: 1200, name: 'Desktop', icon: '💻', class: 'max-w-[1200px]' },
  };

  const currentView = views[selectedView];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">🔍 Responsive Preview Tool</h1>
          <p className="text-gray-600 mb-2">Developer/Admin preview - See how the website looks across different device sizes</p>
          <p className="text-sm text-gray-500 mb-6">Visit: <code className="bg-gray-100 px-2 py-1 rounded">/dev-preview</code></p>
          
          {/* View Selector */}
          <div className="flex flex-wrap gap-3 mb-6">
            {(['mobile', 'tablet', 'desktop'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedView === view
                    ? 'bg-brand-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <span className="mr-2">{views[view].icon}</span>
                {views[view].name}
                <span className="ml-2 text-xs opacity-75">({views[view].width}px)</span>
              </button>
            ))}
          </div>

          {/* Preview Frame */}
          <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xl mx-auto" style={{ maxWidth: `${currentView.width + 40}px` }}>
            <div className="bg-gray-800 p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white text-xs font-mono px-4 py-1 bg-gray-700 rounded">
                {currentView.width}px
              </div>
            </div>
            <div className="bg-white overflow-hidden" style={{ height: '85vh', position: 'relative' }}>
              <div 
                className="h-full overflow-y-auto transition-all duration-300"
                style={{ 
                  width: `${currentView.width}px`,
                  minWidth: `${currentView.width}px`,
                  maxWidth: `${currentView.width}px`,
                }}
              >
                <Navbar />
                <main>
                  <HeroSection />
                  <section className="container mx-auto max-w-3xl mt-8 sm:mt-12 mb-8 sm:mb-10 px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Sample Qualifications Section</h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4">
                      This shows how content sections adapt across different screen sizes. The responsive behavior is visible when switching between Mobile, Tablet, and Desktop views.
                    </p>
                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                      <div className="rounded-xl bg-white shadow border border-brand-200 p-3 sm:p-4">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Card 1</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Sample card content that adapts to screen size</p>
                      </div>
                      <div className="rounded-xl bg-white shadow border border-brand-200 p-3 sm:p-4">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Card 2</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Another sample card demonstrating responsive grid</p>
                      </div>
                    </div>
                  </section>
                  <Testimonials />
                  <section className="bg-gray-50">
                    <div className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                      <div className="flex-1 w-full">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">Ready to get started?</h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl text-center md:text-left">Book an appointment for compassionate, evidence-based breastfeeding and pediatric support.</p>
                      </div>
                    </div>
                  </section>
                </main>
                <Footer />
              </div>
            </div>
          </div>
          
          {/* Testing Instructions */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800 mb-2">
              <strong>💡 Testing Tip:</strong> Use your browser's DevTools (F12) to accurately test responsive breakpoints. 
            </p>
            <p className="text-xs text-blue-700">
              The preview above shows the layout at fixed widths. For true responsive testing, press F12 → Toggle Device Toolbar (or Cmd+Shift+M) and select different device sizes.
            </p>
          </div>
        </div>

        {/* Breakpoint Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Responsive Breakpoints</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Mobile</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Width:</strong> &lt; 640px (sm)
              </p>
              <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Single column layouts</li>
                <li>Stacked navigation</li>
                <li>Full-width buttons</li>
                <li>Centered text alignment</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Tablet</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Width:</strong> 640px - 1024px (sm - md)
              </p>
              <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Two column grids</li>
                <li>Horizontal navigation</li>
                <li>Adjusted font sizes</li>
                <li>Flexible layouts</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Desktop</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Width:</strong> &gt; 1024px (md+)
              </p>
              <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Multi-column layouts</li>
                <li>Full navigation menu</li>
                <li>Larger font sizes</li>
                <li>Side-by-side content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-700">
              Homepage
            </Link>
            <Link href="/about" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              FAQ
            </Link>
            <Link href="/past-events" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Past Events
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Contact
            </Link>
            <Link href="/appointment" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

