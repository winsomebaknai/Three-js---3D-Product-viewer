'use client';

import type { Product } from '@/lib/products';


interface ProductSelectorProps {
  products: Product[];
  activeProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export function ProductSelector({
  products,
  activeProduct,
  onSelectProduct,
}: ProductSelectorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
      {products.map((product) => {
        const isActive = activeProduct.id === product.id;
        
        return (
          <button
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className={`
              group relative px-8 py-6 rounded-2xl border-2 transition-all duration-300
              ${
                isActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-200 dark:shadow-blue-900/50'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 hover:shadow-md'
              }
            `}
          >
            {/* Active indicator */}
            {isActive && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}

            {/* Product Icon/Emoji (you can replace with actual icons) */}
            <div className="text-4xl mb-3">
              {product.id === 'car' && '🚗'}
              {product.id === 'sneaker' && '👟'}
              {product.id === 'headphones' && '🎧'}
            </div>

            {/* Product Name */}
            <h3 className={`
              font-semibold text-lg mb-2 transition-colors
              ${isActive ? 'text-blue-700 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'}
            `}>
              {product.name}
            </h3>

            {/* Product Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {product.description}
            </p>

            {/* Hover effect underline */}
            <div className={`
              mt-3 h-1 bg-blue-500 rounded-full transition-all duration-300
              ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
            `} />
          </button>
        );
      })}
    </div>
  );
}