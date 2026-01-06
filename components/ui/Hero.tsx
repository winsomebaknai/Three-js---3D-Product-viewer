'use client';


export function Hero() {
  return (
    <section className="relative z-10 px-6 pt-20 pb-12 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
        Interactive 3D Showcase
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
        Experience products in immersive 3D. Rotate, zoom, and explore every detail with intuitive controls.
      </p>

      {/* Tagline */}
      <p className="text-sm text-gray-500 dark:text-gray-500">
        Built with Next.js, Three.js & React Three Fiber
      </p>

      {/* Optional: Call to action badges */}
      <div className="flex gap-3 justify-center mt-8 flex-wrap">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          🎨 Realistic Lighting
        </span>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          📱 Touch Controls
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          ⚡ High Performance
        </span>
      </div>
    </section>
  );
}