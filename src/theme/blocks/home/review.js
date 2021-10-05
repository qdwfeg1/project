import { css } from "@emotion/react"

const reviews = (theme) => css`
  .reviews {
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

      ${theme.breakpoints.down("lg")} {
        padding-top: 29px;
        padding-bottom: 46px;
      }

      ${theme.breakpoints.up("lg")} {
        padding-top: 35px;
        padding-bottom: 56px;
      }

      ${theme.breakpoints.up("xl")} {
        padding-right: 20px;
        padding-left: 20px;
      }
    }

    .swiper-slide {
      ${theme.breakpoints.down("md")} {
        width: 100%;
      }

      ${theme.breakpoints.between("md", "lg")} {
        width: calc(50% - 30px);
      }

      ${theme.breakpoints.up("lg")} {
        width: calc(33.33% - 20px);
      }

      &:nth-of-type(odd) {
        .review-item__image-wrapper {
          border: 2px solid #1b4f92;

          &::before {
            left: 49px;
            border-top: 2px solid #de2a60;
            border-left: 2px solid #de2a60;
            transform: rotate(66deg);
          }

          &::after {
            left: 48px;
            border-top: 2px solid #de2a60;
            border-left: 2px solid #de2a60;
            transform: rotate(66deg);
          }
        }
      }

      &:nth-of-type(even) {
        .review-item__image-wrapper {
          border: 2px solid #de2a60;

          &::before {
            left: 9px;
            border-top: 2px solid #1b4f92;
            border-left: 2px solid #1b4f92;
            transform: rotate(33deg);
          }

          &::after {
            left: 14px;
            border-top: 2px solid #1b4f92;
            border-left: 2px solid #1b4f92;
            transform: rotate(33deg);
          }
        }
      }
    }

    .swiper-pagination-bullet {
      border: 5px solid ${theme.palette.common.white};
    }
  }

  .review-item {
    &__header {
      display: flex;
    }

    &__image-wrapper {
      width: 78px;
      height: 78px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      margin-bottom: 12px;
      flex: 0 0 78px;
      position: relative;

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
      }

      &::before {
        top: -28px;
        width: 26px;
        height: 26px;
      }

      &::after {
        top: -16px;
        width: 20px;
        height: 20px;
      }
    }

    &__image {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      overflow: hidden;
    }

    &__name {
      font-weight: 600;
      line-height: 24px;
      margin-bottom: 6px;

      ${theme.breakpoints.down("lg")} {
        font-size: 14px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 20px;
      }
    }

    &__position {
      color: ${theme.palette.gray["700"]};
      margin-bottom: 12px;

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
        line-height: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`

export default reviews
