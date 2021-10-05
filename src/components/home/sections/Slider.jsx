import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import * as Slides from "components/home/slides"

const Slider = ({ items }) => (
  <section className="slider">
    <div className="container slider__container">
      <Swiper loop={true} spaceBetween={8} pagination={{ clickable: true }}>
        {items
          .sort((a, b) => a.position - b.position)
          .map(({ component, id, ...props }) => {
            const Component = Slides[component]
            return (
              <SwiperSlide key={id}>
                <Component {...props} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  </section>
)

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      position: PropTypes.string,
      component: PropTypes.string,
    }),
  ).isRequired,
}

export default Slider
