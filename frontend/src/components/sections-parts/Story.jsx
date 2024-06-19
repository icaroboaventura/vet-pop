import content from '../../Constants/content.json'

const Story = () => {
  const storyTextParts = content.story.text.split('(--quebra--texto)')
  return (
    <div className="mx-[8%] pb-16">
      <div className="flex items-center sm:justify-between justify-center pt-12 pb-8 gap-3">
        <p className=" font-lilita-one text-primary text-clamp-title text-nowrap">
          {content.story.title}
        </p>
        <div className=" h-1 w-full flex bg-tertiary"></div>
      </div>
      <div className="flex sm:justify-between sm:items-start sm:flex-row flex-col-reverse">
        <div className="flex flex-col gap-5 w-full ">
          <div className="flex flex-col gap-5">
            {storyTextParts.map((part, index) => (
              <p key={index} className=" text-senary text-justify">
                {part}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
