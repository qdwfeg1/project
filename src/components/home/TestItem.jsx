import PropTypes from "prop-types"
import { css } from "@emotion/react"
import Link from "components/Link"

const TestItem = ({ title, link, btnTitle, color, image }) => (
  <div className="test-item">
    <div
      css={css`
        background-color: ${color};
      `}
      className="test-item__wrapper"
    >
      <img src={image.file.src} alt={image.alt} className="test-item__image" />
      <h2 className="test-item__title">{title}</h2>
      <Link
        css={css`
          color: ${color};
        `}
        className="btn test-item__button"
        to={link}
      >
        {btnTitle}
      </Link>
    </div>
  </div>
)

TestItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.exact({
    file: PropTypes.exact({
      src: PropTypes.string,
    }),
    alt: PropTypes.string,
  }).isRequired,
}

export default TestItem
