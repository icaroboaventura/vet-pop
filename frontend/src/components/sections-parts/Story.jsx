import content from '../../Constants/content.json'
import Owners from './Owners'
import StoryMedia from './StoryMedia'

const Story = () => {
  const storyTextParts = content.story.text.split('(--quebra--texto)')
  return (
    <div className="px-[8%] py-10 flex flex-col gap-8">
      <div className="flex items-center sm:justify-between justify-center gap-3">
        <p className=" font-lilita-one text-primary text-clamp-title text-nowrap">
          {content.story.title}
        </p>
        <div className=" h-1 w-full flex bg-tertiary"></div>
      </div>
      <div className="px-[10%] flex flex-col gap-5">
        <Owners />
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
        <StoryMedia />
      </div>
    </div>
  )
}

export default Story
