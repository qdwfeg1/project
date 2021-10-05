import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import ReviewItem from "components/home/ReviewItem"

const Reviews = ({ title, subtitle, items }) => (
  <section className="reviews">
    <div className="container reviews__container">
      <h1 className="title">{title}</h1>
      {!!subtitle && <p className="subtitle">{subtitle}</p>}
      <Swiper slidesPerView="auto" loop={true} spaceBetween={30} pagination={{ clickable: true }}>
        {items.map(({ id, ...props }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${id}${i}`}>
            <ReviewItem {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

Reviews.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}

Reviews.defaultProps = {
  subtitle: "",
}

export default Reviews
