import { css } from "@emotion/react"

const instagram = (theme) => css`
  .instagram {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__container {
      ${theme.breakpoints.down("sm")} {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .swiper {
      ${theme.breakpoints.down("sm")} {
        padding-left: 16px;
        padding-right: 16px;
      }

      ${theme.breakpoints.up("sm")} {
        border-radius: ${theme.borderRadius}px;
      }
    }

    .swiper-slide {
      ${theme.breakpoints.down("sm")} {
        border-radius: ${theme.borderRadius}px;
        overflow: hidden;
      }

      ${theme.breakpoints.down("sm")} {
        width: 100%;
        height: 100%;
      }

      ${theme.breakpoints.between("sm", "md")} {
        width: calc(100% / 2 - 6px);
        height: calc(100% / 2);
      }

      ${theme.breakpoints.between("md", "lg")} {
        width: calc(100% / 3 - 6px);
        height: calc(100% / 3);
      }

      ${theme.breakpoints.between("lg", "xl")} {
        width: calc(100% / 5 - 6px);
        height: calc(100% / 5);
      }

      ${theme.breakpoints.up("xl")} {
        width: calc(100% / 6 - 6px);
        height: calc(100% / 6);
      }
    }

    &-item {
      display: block;
      width: 100%;
      padding-top: 100%;
      position: relative;

      &__image,
      &__skeleton {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &__image {
        object-fit: cover;
      }

      &__skeleton {
        background-color: rgba(0, 0, 0, 0.11);
        animation: 1.5s ease-in-out 0.5s infinite normal none running animation-loading;
      }
    }
  }

  @keyframes animation-loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`

export default instagram
