import React from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import useNavigation from '../hooks/useNavigation'

const NavBar = () => {
  const { isOpen, toggleOpen } = useNavigation()

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__brand mr-6">
          <Link href={`/`}>Macaroon</Link>
        </div>
        <button onClick={toggleOpen} className="nav__toggle">
          <HiMenuAlt3 size={20} color="#fff" />
        </button>
        <div className={`nav__responsive justify--end ${isOpen()}`}>
          <ul className="nav__links">
            <li className="nav__link">
              <Link href={`/`}>
                <a>HOME</a>
              </Link>
            </li>
            <li className="nav__link">
              <Link href={`/docs`}>
                <a>DOCUMENTATION</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
