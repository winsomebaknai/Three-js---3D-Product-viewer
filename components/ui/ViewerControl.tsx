'use client';


interface ViewerControlsProps {
  autoRotate: boolean;
  onToggleAutoRotate: () => void;
  onResetCamera: () => void;
}

export function ViewerControls({
  autoRotate,
  onToggleAutoRotate,
  onResetCamera,
}: ViewerControlsProps) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
      {/* Auto-Rotate Toggle */}
      <button
        onClick={onToggleAutoRotate}
        className={`
          group px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm 
          transition-all duration-300 font-medium text-sm
          flex items-center gap-2
          ${
            autoRotate
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800'
          }
        `}
        title={autoRotate ? 'Stop auto-rotation' : 'Enable auto-rotation'}
      >
        <span className="text-lg">
          {autoRotate ? '⏸️' : '▶️'}
        </span>
        <span className="hidden sm:inline">
          {autoRotate ? 'Pause' : 'Auto Rotate'}
        </span>
      </button>

      {/* Reset Camera Button */}
      <button
        onClick={onResetCamera}
        className="
          group px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm
          bg-white/90 dark:bg-gray-800/90 
          text-gray-700 dark:text-gray-200
          hover:bg-white dark:hover:bg-gray-800
          transition-all duration-300 font-medium text-sm
          flex items-center gap-2
        "
        title="Reset camera to initial position"
      >
        <span className="text-lg group-hover:rotate-180 transition-transform duration-500">
          🔄
        </span>
        <span className="hidden sm:inline">Reset View</span>
      </button>

      {/* Optional: Instructions hint */}
      <div className="mt-2 px-4 py-2 rounded-xl bg-black/70 text-white text-xs backdrop-blur-sm hidden lg:block">
        <p className="font-medium mb-1">💡 Controls</p>
        <p className="opacity-80">Drag to rotate</p>
        <p className="opacity-80">Scroll to zoom</p>
        <p className="opacity-80">Right-click to pan</p>
      </div>
    </div>
  );
}