import content from '../../Constants/content.json'
import Slider from '../sections-parts/Slider'
import Stats from '../sections-parts/Stats'
import Story from '../sections-parts/Story'
const Home = () => {
  return (
    <section id={content.navLinks[0]}>
      <Slider />
      <Stats />
      <Story />
    </section>
  )
}

export default Home
