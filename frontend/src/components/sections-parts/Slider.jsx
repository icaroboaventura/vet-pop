import React, { useState, useEffect, useRef } from 'react'
import content from '../../Constants/content.json'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { colors } from '../../utils/functions'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex(
        prevIndex => (prevIndex + 1) % content.slideImgs.length,
      )
    }, 3000)
  }

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? content.slideImgs.length - 1 : prevIndex - 1,
    )
    startInterval()
  }

  const goToNext = () => {
    setCurrentIndex(
      prevIndex => (prevIndex + 1) % content.slideImgs.length,
    )
    startInterval()
  }

  const goToIndex = index => {
    setCurrentIndex(index)
    startInterval()
  }

  return (
    <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem]  overflow-hidden">
      {content.slideImgs.map((image, index) => (
        <div
          key={index}
          className={`absolute h-full bg-cover w-full bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}></div>
      ))}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {content.slideImgs.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 shadow-lg rounded-full cursor-pointer transition-opacity duration-300 ${
              index === currentIndex ? 'bg-tertiary' : 'bg-white'
            }`}
            onClick={() => goToIndex(index)}></span>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={goToPrevious}>
        <KeyboardArrowLeftRoundedIcon
          sx={{
            color: 'white',
            width: '50px',
            height: '50px',
          }}
        />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={goToNext}>
        <KeyboardArrowRightRoundedIcon
          sx={{ color: 'white', width: '50px', height: '50px' }}
        />
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-secondary w-[84%] h-3 rounded-t-lg "></div>
    </div>
  )
}

export default Slider
