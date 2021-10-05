import PropTypes from "prop-types"
import TestItem from "components/home/TestItem"

const Tests = ({ title, subtitle, btnTitle, items }) => (
  <section className="tests">
    <div className="container">
      <h1 className="title">{title}</h1>
      {!!subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="tests__list">
        {items.map(({ id, ...props }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TestItem key={`${id}${i}`} btnTitle={btnTitle} {...props} />
        ))}
      </div>
    </div>
  </section>
)

Tests.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  btnTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}

Tests.defaultProps = {
  subtitle: "",
}

export default Tests
