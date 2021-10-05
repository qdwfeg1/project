import PropTypes from "prop-types"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import Link from "components/Link"

const SlideImage = ({ imageDesktop, imageMobile, link }) => {
  const image = getImage(imageDesktop)
  const images = withArtDirection(image, [
    {
      media: "(max-width: 479.9px)",
      image: getImage(imageMobile),
    },
  ])
  const child = <GatsbyImage image={images} alt={imageDesktop.alt} />
  if (!link) return <div className="slide-image">{child}</div>
  return (
    <Link to={link} className="slide-image">
      {child}
    </Link>
  )
}

SlideImage.propTypes = {
  imageDesktop: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  imageMobile: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  link: PropTypes.string,
}

SlideImage.defaultProps = {
  link: "",
}

export default SlideImage
