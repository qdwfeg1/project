import { useState } from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import TeacherItem from "components/home/TeacherItem"
import TeacherModal from "components/home/TeacherModal"
import scrollLock from "utils/scrollLock"

const Teachers = ({ title, linkTitle, items }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [modalData, setModalData] = useState(items[0])

  const handleModal = (data = null) => {
    scrollLock(!!data)
    setIsShowModal(!!data)
    if (data) setModalData(data)
  }

  return (
    <section className="teachers">
      <div className="container teachers__container">
        <h1 className="title">{title}</h1>
        <Swiper
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={8}
          navigation={true}
        >
          {items.map(({ id, ...props }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`${id}${i}`}>
              <TeacherItem
                linkTitle={linkTitle}
                handleModal={() => handleModal(props)}
                {...props}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <TeacherModal isShow={isShowModal} closeModal={() => handleModal(null)} {...modalData} />
    </section>
  )
}

Teachers.propTypes = {
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
}

export default Teachers
