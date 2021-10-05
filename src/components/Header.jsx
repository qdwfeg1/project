import { useState } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx"
import Link from "components/Link"

import formatPhoneNumber from "utils/formatPhoneNumber"
import scrollLock from "utils/scrollLock"

const Header = ({ pathLang, logo, navbar, phone, button, name }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    scrollLock(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <header className={clsx("header", isOpen && "open")}>
      <div className="header__wrapper container">
        <Link to={pathLang} aria-label={name}>
          <GatsbyImage
            className="header__logo-wrapper"
            image={getImage(logo)}
            alt={name}
            objectFit="contain"
          />
        </Link>
        <div className="header__right">
          <a
            className="header__phone"
            href={`tel:${phone}`}
            aria-label={formatPhoneNumber(phone)}
            dangerouslySetInnerHTML={{ __html: formatPhoneNumber(phone, true) }}
          />
          <button
            className={clsx("btn", "navbar-toggler", isOpen && "open")}
            type="button"
            onClick={handleToggle}
            aria-label="Menu Toggler"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to={button.link} className="btn btn-primary header__btn-desktop">
            {button.title}
          </Link>
        </div>
        <div className={clsx("header__left", isOpen && "open")}>
          <ul className="navbar">
            {navbar.map(({ id, title, link, navItems = [] }) => (
              <li key={id} className="nav-item">
                <Link to={link} className={clsx("nav-link", navItems?.length && "arrow")}>
                  {title}
                </Link>

                {!!navItems?.length && (
                  <ul className="dropdown-menu">
                    {navItems.map(({ id: idItem, title: titleItem, link: linkItem }) => (
                      <li key={idItem}>
                        <Link to={linkItem} className="dropdown-link">
                          {titleItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div>
            <Link to={button.link} className="btn btn-primary header__btn-mobile">
              {button.title}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  pathLang: PropTypes.string.isRequired,
  logo: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
  }).isRequired,
  navbar: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      navItems: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          title: PropTypes.string,
          link: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  phone: PropTypes.string.isRequired,
  button: PropTypes.exact({
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
}

export default Header
