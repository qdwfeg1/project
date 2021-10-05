import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import clsx from "clsx"
import Link from "components/Link"

const Course = ({
  titleItem,
  subtitle,
  text,
  images,
  titlePrice,
  price,
  titleDate,
  date,
  link,
  borderColor,
}) => (
  <Link
    to={link}
    className={clsx(
      "course-item",
      (!!price || !!titlePrice || !!titleDate || !!date) && "course-item-with-price",
    )}
    css={css`
      border: 1px solid ${borderColor};
    `}
  >
    <div>
      <div className="course-item__images">
        {images.map(({ id, alt, ...image }) => (
          <GatsbyImage
            key={id}
            className="course-item__image"
            image={getImage(image)}
            alt={alt}
            objectFit="contain"
          />
        ))}
      </div>
      <h2 className="course-item__title">{titleItem.text}</h2>
      <p className="course-item__subtitle">{subtitle.text}</p>
      {text.text !== " " && <p className="course-item__text">{text.text}</p>}
    </div>
    <div>
      <div className="course-item__bottom">
        <div>
          {!!titleDate && <div className="course-item__title-date">{titleDate}</div>}
          {!!date && <div className="course-item__date">{date}</div>}
        </div>
        <div>
          {!!titlePrice && <div className="course-item__title-price">{titlePrice}</div>}
          {!!price && <div className="course-item__price">{price}</div>}
        </div>
      </div>
    </div>
  </Link>
)

Course.propTypes = {
  titleItem: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
  subtitle: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
  text: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      gatsbyImageData: PropTypes.object,
      alt: PropTypes.string,
    }),
  ).isRequired,
  titlePrice: PropTypes.string,
  price: PropTypes.string,
  titleDate: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
}

Course.defaultProps = {
  titlePrice: "",
  price: "",
  titleDate: "",
  date: "",
}

export default Course
