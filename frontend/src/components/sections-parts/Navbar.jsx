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
    <nav className="bg-primary desktop:w-[120rem] pt-3 w-full px-[8%] z-50 fixed border-b-4 h-[4rem] sm:h-[7rem] flex flex-col justify-between border-tertiary">
      <div className="mb-4 flex items-center justify-between">
        <img
          className="rounded w-36 h-13 object-cover object-center"
          src={content.logo.url}
          alt={content.logo.alt}
        />
        <div className="gap-2 text-xs text-white hidden sm:flex">
          {content.contactNavbar.map(link => (
            <div
              key={link.media}
              className="flex items-center justify-center gap-1">
              <img src={link.icon} alt={link.media} className="w-4" />
              <p className="text-[0.8rem]">{link.content}</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden flex flex-col gap-[0.3rem]">
          <div className="w-[1.4rem] h-[0.2rem] bg-white rounded"></div>
          <div className="w-[1.4rem] h-[0.2rem] bg-white rounded"></div>
          <div className="w-[1.4rem] h-[0.2rem] bg-white rounded"></div>
        </div>
      </div>
      <ul className="hidden sm:flex text-[0.875rem] items-center gap-[0.3%]">
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
            } w-full p-1 flex items-center justify-center h-10 cursor-pointer rounded-t`}>
            <p>{link}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
