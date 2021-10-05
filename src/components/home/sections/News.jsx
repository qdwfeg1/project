import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import NewsItem from "components/home/NewsItem"

const News = ({ pathLang, title, items }) => (
  <section className="news">
    <div className="container news__container">
      <h1 className="title">{title}</h1>
      <Swiper slidesPerView="auto" loop={true} spaceBetween={8} pagination={{ clickable: true }}>
        {items.map(({ id, ...props }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${id}${i}`}>
            <NewsItem pathLang={pathLang} {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

News.propTypes = {
  pathLang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}

export default News
