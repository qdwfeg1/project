import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "components/Link"
import formatPhoneNumber from "utils/formatPhoneNumber"
import VKIcon from "components/icons/VKIcon"
import InstagramIcon from "components/icons/InstagramIcon"

const Footer = ({
  pathLang,
  logo,
  name,
  vkLink,
  instagramLink,
  vitBizLink,
  vitBizIcon,
  phoneTitle,
  phone,
  emailTitle,
  email,
  addressTitle,
  address,
  addressLink,
  openingHours,
  companyName,
  unp,
}) => (
  <footer className="footer container">
    <div className="footer__wrapper">
      <div className="footer__copyright-wrapper">
        <div>
          <Link to={pathLang} aria-label={name}>
            <GatsbyImage
              className="footer__logo-wrapper"
              image={getImage(logo)}
              alt={name}
              objectFit="contain"
            />
          </Link>
        </div>
        <span className="footer__copyright">
          © {name}, {new Date().getFullYear()}
        </span>
      </div>
      <div className="footer__social-wrapper">
        <Link to={vkLink} aria-label="VKontakte" className="footer__social-icon">
          <VKIcon className="footer__social-icon" />
        </Link>
        <Link to={instagramLink} aria-label="Instagram" className="footer__social-icon">
          <InstagramIcon className="footer__social-icon" />
        </Link>
        <Link to={vitBizLink} aria-label="Vitebsk Biz" className="footer__social-icon">
          <GatsbyImage
            className="footer__social-icon"
            image={getImage(vitBizIcon)}
            alt={vitBizIcon.alt}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="footer__address-wrapper">
        <p className="footer__title">{addressTitle}</p>
        <div className="footer__address-content">
          <Link to={addressLink}>{address}</Link>
          <div>{openingHours}</div>
          <div className="footer__details-organization">
            <div>{companyName}</div>
            <div>{unp}</div>
          </div>
        </div>
      </div>
      <div className="footer__email-wrapper">
        <p className="footer__title">{emailTitle}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="footer__phone-wrapper">
        <p className="footer__title">{phoneTitle}</p>
        <a href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  pathLang: PropTypes.string.isRequired,
  logo: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
  }).isRequired,
  name: PropTypes.string.isRequired,
  vkLink: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired,
  vitBizLink: PropTypes.string.isRequired,
  vitBizIcon: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  phoneTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  emailTitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  addressTitle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressLink: PropTypes.string.isRequired,
  openingHours: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  unp: PropTypes.string.isRequired,
}

export default Footer
