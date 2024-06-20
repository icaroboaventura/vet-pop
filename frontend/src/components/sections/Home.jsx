import content from '../../Constants/content.json'
import Slider from '../sections-parts/Slider'
import Stats from '../sections-parts/Stats'
import Story from '../sections-parts/Story'
const Home = () => {
  return (
    <section
      id={content.navLinks[0]}
      className="min-h-svh pt-[65px] sm:pt-[110px]">
      <Slider />
      <Stats />
      <Story />
    </section>
  )
}

export default Home
