import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const imageUrl =
    typeof currentImage === "string" ? currentImage : currentImage?.url;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-1 right-1 sm:top-2 md:top-4 sm:right-2 md:right-4 z-60 text-white hover:text-gray-300 transition-colors p-1 sm:p-1.5 md:p-2 bg-black/30 rounded-full"
      >
        <X size={20} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-1 sm:p-1.5 md:p-2 bg-black/30 rounded-full"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-1 sm:p-1.5 md:p-2 bg-black/30 rounded-full"
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight size={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
          </button>
        </>
      )}

      {/* Main image */}
      <div className="relative max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-5xl xl:max-w-6xl max-h-[90vh] sm:max-h-[92vh] md:max-h-[95vh] p-1 sm:p-2 md:p-4 lg:p-6">
        <img
          src={imageUrl}
          alt={`Demo Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-sm sm:rounded"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
