import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ReviewItem = ({ image, name, position, text }) => (
  <div className="review-item">
    <div className="review-item__header">
      <div className="review-item__image-wrapper">
        <div className="review-item__image">
          <GatsbyImage image={getImage(image)} alt={image.alt} objectFit="cover" />
        </div>
      </div>
      <div className="review-item__content">
        <h2 className="review-item__name">{name}</h2>
        <p className="review-item__position">{position}</p>
      </div>
    </div>
    <p className="review-item__comment">{text?.text || ""}</p>
  </div>
)

ReviewItem.propTypes = {
  image: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
}

export default ReviewItem
