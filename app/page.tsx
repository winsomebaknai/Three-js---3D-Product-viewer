'use client';

import { useState, useEffect, Suspense } from 'react';
import { Hero } from '@/components/ui/Hero';
import { ProductSelector } from '@/components/ui/ProductSelector';
import { ViewerControls } from '@/components/ui/ViewerControl';
import { Footer } from '@/components/ui/Footer';
import { Scene } from '@/components/three/Scene';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { products } from '@/lib/products';
import { useGLTF } from '@react-three/drei';


export default function Home() {
  
  const [activeProduct, setActiveProduct] = useState(products[0]);
  
  
  const [autoRotate, setAutoRotate] = useState(true);
  
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    products.forEach((product) => {
      useGLTF.preload(product.modelPath);
    });
  }, []);

  
  const handleSelectProduct = (product: typeof products[0]) => {
    if (product.id === activeProduct.id) return; // Already selected
    
    setIsLoading(true);       
    setActiveProduct(product);    
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  
  const handleToggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  
  const handleResetCamera = () => {
    
    console.log('Reset camera requested');
  };

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      
      <Hero />

      
      <section className="flex-1 relative px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto h-[500px] md:h-[600px] lg:h-[700px] relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          
          {isLoading && <LoadingSpinner />}

          {/* Viewer Controls (Auto-rotate, Reset) */}
          <ViewerControls
            autoRotate={autoRotate}
            onToggleAutoRotate={handleToggleAutoRotate}
            onResetCamera={handleResetCamera}
          />

          {/* 3D Scene Canvas */}
          <Suspense fallback={<LoadingSpinner />}>
            <Scene
              product={activeProduct}
              autoRotate={autoRotate}
            />
          </Suspense>

          {/* Product Info Badge (bottom-left corner) */}
          <div className="absolute bottom-4 left-4 z-20 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Now Viewing</p>
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
              {activeProduct.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeProduct.description}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT SELECTOR */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            Choose a Product
          </h2>
          <ProductSelector
            products={products}
            activeProduct={activeProduct}
            onSelectProduct={handleSelectProduct}
          />
        </div>
      </section>

      {/* FEATURES SECTION (Optional) */}
      <section className="py-12 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Realistic Rendering
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Advanced lighting and shadows for photorealistic 3D models
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10">
              <div className="text-4xl mb-4">🖱️</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Intuitive Controls
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Smooth orbit, zoom, and pan with mouse or touch
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                High Performance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized for smooth 60fps on all devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

