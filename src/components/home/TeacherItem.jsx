import PropTypes from "prop-types"
import FireworkIcon from "components/icons/FireworkIcon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TeacherItem = ({ image, name, position, quote, linkTitle, handleModal }) => (
  <div className="teacher-item" onClick={handleModal} role="button" tabIndex="0">
    <div className="teacher-item__image-wrapper">
      <div className="teacher-item__image">
        <GatsbyImage image={getImage(image)} alt={image.alt} objectFit="cover" />
      </div>
      <FireworkIcon className="teacher-item__fireworks" />
    </div>
    <div className="teacher-item__content">
      <h2 className="teacher-item__name">{name}</h2>
      <div className="teacher-item__position">{position}</div>
      <div className="teacher-item__short-desc">{quote}</div>
      <button type="button" className="btn teacher-item__btn">
        {linkTitle}
      </button>
    </div>
  </div>
)

TeacherItem.propTypes = {
  image: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
  linkTitle: PropTypes.string.isRequired,
}

export default TeacherItem
