import { css } from "@emotion/react"

const slider = (theme) => css`
  .slider {
    ${theme.breakpoints.up("lg")} {
      padding-bottom: 18px;
    }

    &__container {
      ${theme.breakpoints.down("sm")} {
        padding-right: 0;
        padding-left: 0;
      }
    }

    .swiper {
      ${theme.breakpoints.down("lg")} {
        padding-bottom: 46px;
      }

      ${theme.breakpoints.up("lg")} {
        padding-bottom: 56px;
      }

      &-slide {
        ${theme.breakpoints.up("sm")} {
          border-radius: ${theme.borderRadius}px;
          overflow: hidden;
        }
      }
    }
  }

  .slide-image {
    display: flex;

    .gatsby-image-wrapper {
      ${theme.breakpoints.down("sm")} {
        height: 0;
        padding-bottom: 100%;
      }
    }
  }

  .slide-youtube {
    &__container {
      width: 100%;
      position: relative;
      height: 0;
      overflow: hidden;

      ${theme.breakpoints.down("sm")} {
        padding-bottom: 100%;
      }

      ${theme.breakpoints.up("sm")} {
        padding-bottom: 56.25%;
      }

      iframe,
      .react-player__preview {
        position: absolute;
        margin: 0;
        padding: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .react-player {
      &__shadow {
        background: ${theme.palette.common.white}!important;
        box-shadow: 0 0 8px rgb(0, 0, 0, 0.25);
      }

      &__play-icon {
        border-color: transparent transparent transparent ${theme.palette.primary.main}!important;
      }
    }
  }
`

export default slider
