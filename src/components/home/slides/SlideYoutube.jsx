import { useState } from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import { css } from "@emotion/react"

const SlideYoutube = ({ youTubeLink }) => {
  const videoId =
    youTubeLink?.replace("https://youtu.be/", "")?.replace("/", "")?.split("?")[0] || ""
  const imagePreview = `"https://img.youtube.com/vi/${videoId}/maxresdefault.jpg"`
  const [light, setLight] = useState(imagePreview)

  const config = {
    youtube: {
      playerVars: {
        autoplay: 1,
        hl: "en",
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
      },
    },
  }

  const styles = css`
    .react-player__preview {
      @media (max-width: 320px) {
        background-image: url("https://img.youtube.com/vi/${videoId}/mqdefault.jpg") !important;
      }
      @media (min-width: 320.02px) and (max-width: 480px) {
        background-image: url("https://img.youtube.com/vi/${videoId}/hqdefault.jpg") !important;
      }
      @media (min-width: 480.02px) and (max-width: 640px) {
        background-image: url("https://img.youtube.com/vi/${videoId}/sddefault.jpg") !important;
      }
      @media (min-width: 640.02px) and (max-width: 1280px) {
        background-image: url("https://img.youtube.com/vi/${videoId}/hq720.jpg") !important;
      }
    }
  `

  return (
    <div className="slide-youtube">
      <ReactPlayer
        url={youTubeLink}
        config={config}
        playing={true}
        controls={true}
        light={light}
        volume={1}
        muted={true}
        className="slide-youtube__container"
        css={styles}
        width="100%"
        height="0"
        onReady={() => setLight("")}
        onEnded={() => setLight(imagePreview)}
      />
    </div>
  )
}

SlideYoutube.propTypes = {
  youTubeLink: PropTypes.string.isRequired,
}

export default SlideYoutube
