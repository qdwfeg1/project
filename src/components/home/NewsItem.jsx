import PropTypes from "prop-types"
import Link from "components/Link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewsItem = ({ pathLang, slug, title, excerpt, images }) => {
  return (
    <Link className="news-item" to={`${pathLang}news/${slug}`}>
      <GatsbyImage
        className="news-item__image-wrapper"
        image={getImage(images[0])}
        alt={images[0]?.alt}
        objectFit="cover"
      />
      <div className="news-item__content">
        <h2 className="news-item__title">{title}</h2>
        <p className="news-item__short-desc">{excerpt?.text}</p>
      </div>
    </Link>
  )
}

NewsItem.propTypes = {
  pathLang: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      gatsbyImageData: PropTypes.object,
      alt: PropTypes.string,
    }),
  ).isRequired,
  excerpt: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
}

export default NewsItem
