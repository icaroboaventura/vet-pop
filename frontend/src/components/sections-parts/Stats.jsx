import content from '../../Constants/content.json'

const Stats = () => {
  return (
    <div className="flex">
      <div className="mx-[8%] w-full rounded-b-3xl flex flex-wrap items-center justify-center text-white font-lilita-one bg-secondary gap-11 px-6 pb-8 shadow-lg ">
        {content.stats.map(stat => (
          <div
            key={stat.stat}
            className="flex flex-col items-center justify-center">
            <p className=" tablet:text-5xl text-3xl">{stat.count}</p>
            <p className=" tablet:text-2xl text-xl">{stat.stat}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
