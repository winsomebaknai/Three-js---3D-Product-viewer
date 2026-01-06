'use client';


export function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-30">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 rounded-full" />
          
          {/* Spinning ring */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
            Loading 3D Model
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please wait...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}