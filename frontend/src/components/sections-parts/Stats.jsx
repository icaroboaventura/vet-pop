import content from '../../Constants/content.json'

const Stats = () => {
  return (
    <div className="flex">
      <div className="mx-[8%] px-[5%] w-full rounded-b-lg  text-white font-lilita-one bg-secondary gap-2 whitespace-nowrap pb-4 shadow-lg grid grid-cols-3 lg:grid-cols-6 ">
        {content.stats.map(stat => (
          <div
            key={stat.stat}
            className="flex flex-col items-center justify-center">
            <p className=" text-clamp-title">{stat.count}</p>
            <p className=" text-clamp-text">{stat.stat}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
