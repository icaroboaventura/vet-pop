import React, { useState } from 'react'
import content from '../../Constants/content.json'

const Owners = () => {
  const [selectedOwner, setSelectedOwner] = useState(null)

  const handleImageClick = owner => {
    setSelectedOwner(owner)
  }

  const closePopup = () => {
    setSelectedOwner(null)
  }

  return (
    <>
      <div className="flex items-center justify-center gap-[2%]">
        {content.owners.map((owner, index) => (
          <div
            key={index}
            className="relative w-full max-w-[130px] rounded-full hover:scale-105 hover:shadow-xl transform transition-transform duration-300 ease-in-out shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(owner)}>
            <img
              src={owner.url}
              alt={owner.alt}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary opacity-0 hover:opacity-75 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <span className="flex justify-center items-center whitespace-nowrap font-lilita-one text-white text-clamp-text ">
                Ver mais
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedOwner && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-10/12 min-h-1/2 h-1/2 p-4 rounded-lg mx-auto shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-2xl text-tertiary font-lilita-one"
              onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Owners
