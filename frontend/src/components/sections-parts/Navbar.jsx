import { useEffect, useState } from 'react'
import content from '../../Constants/content.json'

const Navbar = () => {
  console.log(content)
  const [activeSection, setActiveSection] = useState('Home') // State to manage active section based on scroll position
  const [scrolled, setScrolled] = useState(false) // State to track whether page has been scrolled

  // Function to scroll to a specific section on the page
  const scrollToSection = sectionId => {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      const marginTop = 0
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop
      window.scrollTo({ top: scrollToY, behavior: 'smooth' })
    }
  }

  // Function to determine which section is active based on scroll position
  const determineActiveSection = () => {
    for (let i = content.navLinks.length - 1; i >= 0; i--) {
      const section = document.getElementById(content.navLinks[i])
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(content.navLinks[i])
          break
        }
      }
    }
  }

  // Effect hook to handle scroll event and determine active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      determineActiveSection()
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="bg-primary desktop:w-[120rem] pt-3 w-full px-[8%] z-50 fixed border-b-4 border-tertiary">
      <div className="mb-4 flex items-center justify-between">
        <img
          className="rounded w-48 h-16 object-cover object-center"
          src={content.logo.url}
          alt={content.logo.alt}
        />
        <div className="flex gap-2 text-base text-white">
          <a className="flex items-center justify-center gap-2" href="">
            <img
              className="w-5"
              src="../../../public/images/whatsapp.png"
              alt=""
            />
            <p>{content.contact.whatsapp}</p>
          </a>
          <a className="flex items-center justify-center gap-1" href="">
            <img
              className="w-6"
              src="../../../public/images/instagram.png"
              alt=""
            />
            <p>{content.contact.instagram}</p>
          </a>
        </div>
      </div>
      <div>
        <ul className="flex text-xl items-center gap-[0.3%]">
          {content.navLinks.map(link => (
            <li
              key={link}
              onClick={() => {
                scrollToSection(link)
              }}
              className={`${
                activeSection === link ?
                  'bg-secondary text-white '
                : 'bg-white text-quaternary hover:text-secondary'
              } w-full p-1 font-bold flex items-center justify-center h-12 cursor-pointer rounded-t`}>
              <p>{link}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
