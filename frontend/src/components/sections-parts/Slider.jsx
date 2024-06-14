import React, { useState, useEffect, useRef } from 'react'
import content from '../../Constants/content.json'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0) // State to manage current slide index
  const intervalRef = useRef(null) // Ref to hold interval ID for slideshow

  // Function to start the slideshow interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(
        prevIndex => (prevIndex + 1) % content.slideImgs.length,
      )
    }, 3000) // Change slide every 3 seconds
  }

  // Effect hook to start the interval on component mount
  useEffect(() => {
    startInterval()
    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalRef.current)
  }, [])

  // Function to go to the next slide
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % content.slideImgs.length
    setCurrentIndex(newIndex)
    resetInterval() // Reset interval after manual navigation
  }

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    const newIndex =
      currentIndex === 0 ? content.slideImgs.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    resetInterval() // Reset interval after manual navigation
  }

  // Function to reset the slideshow interval
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    startInterval()
  }

  // Function to handle button click to navigate directly to a slide
  const handleButtonClick = index => {
    setCurrentIndex(index)
    resetInterval() // Reset interval after manual navigation
  }

  return (
    <div className="relative w-full min-h-svh overflow-hidden borber">
      {content.slideImgs.map((slide, index) => (
        <div
          key={slide.alt}
          className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}>
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full pt-20 h-svh object-cover object-center"
          />
        </div>
      ))}
      {/* Previous slide button */}
      <button
        onClick={goToPreviousSlide}
        className="absolute bottom-0 left-0 w-1/2 h-full"></button>
      {/* Next slide button */}
      <button
        onClick={goToNextSlide}
        className="absolute bottom-0 right-0 w-1/2 h-full"></button>
      {/* Slide navigation buttons */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
        {content.slideImgs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-tertiary' : 'bg-white'
            }`}></button>
        ))}
      </div>
      <div
        className="mx-[8%] shadow-lg  absolute bottom-0 rounded-t-3xl bg-secondary w-[84%]
       h-9"></div>
    </div>
  )
}

export default Slider
