import { css } from "@emotion/react"

const course = (theme) => css`
  .courses {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__list {
      display: grid;
      gap: 25px;

      ${theme.breakpoints.down("lg")} {
        padding-top: 10px;
      }

      ${theme.breakpoints.up("lg")} {
        padding-top: 14px;
      }

      ${theme.breakpoints.up("md")} {
        grid-template-columns: calc(50% - 12.5px) calc(50% - 12.5px);
      }
    }
  }

  .course-item {
    display: block;
    min-height: 250px;
    width: 100%;
    border-radius: ${theme.borderRadius}px;
    box-shadow: ${theme.shadows[0]};
    color: ${theme.palette.common.black};

    ${theme.breakpoints.down("lg")} {
      padding: 16px;
    }

    ${theme.breakpoints.up("lg")} {
      padding: 24px;
    }

    &-with-price {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      white-space: pre-line;
      margin-bottom: 12px;

      ${theme.breakpoints.down("lg")} {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
      }

      ${theme.breakpoints.up("lg")} {
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
      }
    }

    &__subtitle {
      white-space: pre-line;

      ${theme.breakpoints.down("lg")} {
        font-size: 14px;
        line-height: 18px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__images {
      float: right;
      margin-top: -12px;
      margin-right: -12px;
      padding-left: 4px;
      padding-bottom: 4px;
    }

    &__image {
      display: block;

      ${theme.breakpoints.down("lg")} {
        max-width: 100px;
        max-height: 60px;
      }

      ${theme.breakpoints.up("lg")} {
        max-width: 180px;
        max-height: 108px;
      }
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__title-date {
      color: ${theme.palette.gray["700"]};

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
        line-height: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
        line-height: 21px;
      }
    }

    &__date {
      font-weight: 700;
      color: ${theme.palette.primary.dark};

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
        line-height: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
        line-height: 21px;
      }
    }

    &__title-price {
      text-align: right;
      color: ${theme.palette.gray["700"]};

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
        line-height: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
        line-height: 20px;
      }
    }

    &__price {
      font-weight: 700;
      text-align: right;
      color: ${theme.palette.primary.dark};

      ${theme.breakpoints.down("lg")} {
        font-size: 20px;
        line-height: 24px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }
`

export default course
