import content from '../../Constants/content.json'

const Story = () => {
  const storyTextParts = content.story.text.split('(--quebra--texto)')
  return (
    <div className="mx-[8%] pb-16">
      <div className="flex items-center phone:justify-between justify-center pt-12 pb-8  gap-10">
        <p className=" font-lilita-one text-primary tablet:text-6xl text-4xl text-nowrap phone:border-none border-tertiary border-b-4">
          {content.story.title}
        </p>
        <div className=" phone:h-1 phone:w-full phone:flex hidden bg-tertiary"></div>
      </div>
      <div className="flex phone:justify-between phone:items-start phone:flex-row flex-col-reverse">
        <div className="flex flex-col gap-5 w-full ">
          <div className="flex flex-col gap-5">
            {storyTextParts.map((part, index) => (
              <p key={index} className=" text-senary text-justify">
                {part}
              </p>
            ))}
          </div>
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
        </div>
        <div className="flex-wrap phone:pb-0 phone:pl-10 pb-6 gap-4 flex phone:flex-col phone:justify-end justify-center items-center">
          {content.owners.map((owner, index) => (
            <img
              key={index}
              src={owner.url}
              alt={owner.alt}
              className="phone:w-[11rem] w-[7rem] rounded-full object-cover object-center shadow-lg hover:shadow-xl"
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className="text-center">
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Simple Image Hove
          </h2>
        </div>
        <div className="mt-10 max-w-sm mx-auto">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80"
              alt="Photo by Sébastien Goldberg on Unsplash"
              className="w-full rounded shadow-xl hover:shadow-2xl"
            />
            <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div className="flex-row text-center">
                <h1 className="text-gray-50 font-bold text-lg">
                  Be careful on the way.
                </h1>
                <p className="text-gray-200 font-medium text-sm">Tulus</p>
                <small className="text-xs font-light text-gray-300">
                  Photo by Sébastien Goldberg on Unsplash
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
