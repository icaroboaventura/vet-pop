const StoryMedia = () => {
  return (
    <>
      <div className="flex gap-5 pb-10 pt-2 items-center overflow-x-scroll no-scrollbar .no-scrollbar::-webkit-scrollbar">
        {content.storyMedia.map((media, index) => (
          <img
            key={index}
            src={media.url}
            alt={media.alt}
            className="w-[14rem] h-[12rem] rounded object-cover object-center shadow-lg hover:shadow-xl"
          />
        ))}
      </div>
    </>
  )
}

export default StoryMedia
