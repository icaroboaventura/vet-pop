import { useEffect, useState } from 'react'
import { content } from '../../Constants/index'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState()
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = sectionId => {
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      const marginTop = 0
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop
      window.scrollTo({ top: scrollToY, behavior: 'smooth' })
    }
  }
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
    <nav className="bg-primary desktop:w-[120rem] pt-3 w-full px-[2%]   fixed border-b-8 border-tertiary">
      <div className="bg-white w-32 h-[4rem] mb-3 self-start"></div>
      <div>
        <ul className="flex items-center gap-[0.3%]">
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
          <div className="text-white font-bold flex flex-col items-center justify-center px-1 ">
            <p>WhatsApp</p>
            <p>Instagram</p>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
