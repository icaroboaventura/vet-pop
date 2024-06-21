import React, { useRef } from 'react'
import content from '../../Constants/content.json'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

const StoryMedia = () => {
  const carouselRef = useRef(null)

  const handleScroll = scrollOffset => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset
    }
  }

  const handleScrollLeft = () => {
    handleScroll(-200)
  }

  const handleScrollRight = () => {
    handleScroll(200)
  }

  return (
    <div className="relative w-full md:w-[69.5%] mx-auto">
      {/* Left Arrow Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-10px]">
        <button
          onClick={handleScrollLeft}
          className="bg-tertiary text-white p-[2px] rounded-full shadow-lg transform active:scale-75 transition-transform">
          <KeyboardArrowLeftRoundedIcon />
        </button>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[-10px]">
        <button
          onClick={handleScrollRight}
          className="bg-tertiary text-white p-[2px] rounded-full shadow-lg transform active:scale-75 transition-transform">
          <KeyboardArrowRightRoundedIcon />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll hide-scroll-bar space-x-3 p-4"
        style={{ scrollBehavior: 'smooth' }} // Ensure smooth scrolling behavior
      >
        {content.storyMedia.map((src, index) => (
          <img
            key={index}
            src={src.url}
            alt={`Slide ${index}`}
            className="flex-shrink-0 md:w-[180px] md:h-[160px] w-[140px] h-[120px] object-cover object-center shadow-md rounded-md"
          />
        ))}
      </div>
    </div>
  )
}

export default StoryMedia
