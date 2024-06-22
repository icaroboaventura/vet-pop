import React, { useRef, useState } from 'react'
import content from '../../Constants/content.json'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'

const StoryMedia = () => {
  const carouselRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

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

  const handleImageClick = index => {
    setSelectedImage(content.storyMedia[index].url)
  }

  const handleCloseImage = () => {
    setSelectedImage(null)
  }

  return (
    <div className="relative w-full md:w-[69.5%] mx-auto rounded-lg">
      {/* Left Arrow Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-40px]">
        <button
          onClick={handleScrollLeft}
          className="bg-tertiary text-white p-[2px] rounded-full shadow-md transform active:scale-75 transition-transform">
          <KeyboardArrowLeftRoundedIcon />
        </button>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-[-40px]">
        <button
          onClick={handleScrollRight}
          className="bg-tertiary text-white p-[2px] rounded-full shadow-md transform active:scale-75 transition-transform">
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
          <div
            onClick={() => handleImageClick(index)}
            className="relative flex-shrink-0 md:w-[180px] md:h-[160px] w-[140px] h-[120px] shadow-md rounded-md cursor-pointer">
            <img
              key={index}
              src={src.url}
              alt={`Slide ${index}`}
              className="md:w-[180px] md:h-[160px] w-[140px] h-[120px] rounded-md object-cover object-center "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary opacity-0 hover:opacity-75 rounded-md transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <span className="flex justify-center items-center whitespace-nowrap font-lilita-one text-white text-clamp-text ">
                <AspectRatioIcon />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Enlarged Image Overlay */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseImage}>
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </div>
  )
}

export default StoryMedia
