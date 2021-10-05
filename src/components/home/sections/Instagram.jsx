import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
// import instaUserName from "lib/instaUserName"
// import instaUserId from "lib/instaUserId"
import Link from "components/Link"

// const USER_ID = 3028356009
// const USER_NAME = "lightenglishvitebsk"

const Instagram = ({ title }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  /*
  useEffect( () => {
    if (typeof window !== 'undefined') {
      setData(JSON.parse(localStorage.getItem(USER_NAME)) || [])
    }
    try {
/!*
      instaUserName
        .getFeed(USER_NAME)
        .then((media) => {
          setLoading(false)
          setData(media)
          if (typeof window !== 'undefined') {
            localStorage.setItem(USER_NAME, JSON.stringify(media))
          }
        })
*!/
/!*
      instaUserId(USER_ID)
        .then((media) => {
          setLoading(false)
          setData(media)
          if (typeof window !== 'undefined') {
            localStorage.setItem(USER_NAME, JSON.stringify(media))
          }
        })
*!/
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }, [])
*/

  if (data.length > 0 || !error)
    return (
      <section className="instagram">
        <div className="container instagram__container">
          <h1 className="title">{title}</h1>
          <Swiper slidesPerView="auto" loop={true} spaceBetween={8}>
            {[...Array(10)].map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                {data.length > 0 || !loading ? (
                  <Link to={data[index]?.url || ""} className="instagram-item">
                    <img
                      src={data[index]?.src || ""}
                      alt={data[index]?.alt || ""}
                      className="instagram-item__image"
                    />
                  </Link>
                ) : (
                  <div className="instagram-item">
                    <div className="instagram-item__skeleton" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
  return null
}

Instagram.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Instagram
