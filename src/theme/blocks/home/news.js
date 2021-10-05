import { css } from "@emotion/react"

const news = (theme) => css`
  .news {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 18px;
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
        padding-top: 4px;
        padding-bottom: 46px;
      }

      ${theme.breakpoints.up("lg")} {
        padding-top: 17px;
        padding-bottom: 56px;
      }

      ${theme.breakpoints.up("xl")} {
        padding-right: 20px;
        padding-left: 20px;
      }

      &-slide {
        ${theme.breakpoints.down("md")} {
          width: 100%;
        }

        ${theme.breakpoints.up("md")} {
          width: 50%;
          padding-left: 6px;
          padding-right: 12px;
        }
      }

      &-pagination-bullet {
        border: 5px solid ${theme.palette.common.white};
      }
    }

    &-item {
      display: flex;
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      border-radius: ${theme.borderRadius}px;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        background: linear-gradient(180deg, rgba(0, 36, 110, 0) 0%, #1f104a 100%);
      }

      &__image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &__content {
        position: absolute;
        z-index: 1;

        ${theme.breakpoints.down("lg")} {
          bottom: 16px;
          left: 16px;
          right: 16px;
        }

        ${theme.breakpoints.up("lg")} {
          bottom: 24px;
          left: 24px;
          right: 24px;
        }
      }

      &__title {
        font-weight: bold;
        color: ${theme.palette.common.white};
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        ${theme.breakpoints.down("lg")} {
          font-size: 20px;
          line-height: 24px;
        }

        ${theme.breakpoints.up("lg")} {
          font-size: 24px;
          line-height: 30px;
        }
      }

      &__short-desc {
        line-height: 20px;
        color: ${theme.palette.common.white};
        margin-bottom: 0;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        ${theme.breakpoints.down("lg")} {
          font-size: 12px;
        }

        ${theme.breakpoints.up("lg")} {
          font-size: 14px;
        }
      }
    }
  }
`

export default news
