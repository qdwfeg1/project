import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx"

const TeacherModal = ({ isShow, image, name, position, description, closeModal }) => (
  <div className={clsx("teacher-modal", isShow && "show")}>
    <div
      className="teacher-modal__backdrop"
      onClick={closeModal}
      role="button"
      tabIndex="0"
      aria-label="close modal"
    />
    <div className="teacher-modal__dialog">
      <div className="teacher-modal__header">
        <button
          className="teacher-modal__btn-close"
          type="button"
          onClick={closeModal}
          aria-label="close"
        />
        <div className="teacher-modal__title-wrapper">
          <div className="teacher-modal__image-wrapper">
            <GatsbyImage image={getImage(image)} alt={image.alt} objectFit="cover" />
          </div>
          <div>
            <h2 className="teacher-modal__name">{name}</h2>
            <div className="teacher-modal__position">{position}</div>
          </div>
        </div>
      </div>
      <div
        className="teacher-modal__body"
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)

TeacherModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  image: PropTypes.exact({
    gatsbyImageData: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.exact({
    childMarkdownRemark: PropTypes.exact({
      html: PropTypes.string,
    }),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default TeacherModal
