import PropTypes from "prop-types"
import Course from "components/home/Course"

const Courses = ({ title, items }) => (
  <section className="courses">
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="courses__list">
        {items.map(({ id, ...props }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Course key={`${id}${i}`} {...props} />
        ))}
      </div>
    </div>
  </section>
)

Courses.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}

export default Courses
