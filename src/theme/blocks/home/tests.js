import { css } from "@emotion/react"

const tests = (theme) => css`
  .tests {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__list {
      ${theme.breakpoints.up("md")} {
        display: grid;
        gap: 25px;
        grid-template-columns: calc(33.33% - 16.67px) calc(33.33% - 16.67px) calc(33.33% - 16.67px);
      }
    }
  }

  .test-item {
    overflow: hidden;

    ${theme.breakpoints.down("lg")} {
      padding-top: 25px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 63px;
    }

    &__wrapper {
      position: relative;
      border-radius: ${theme.borderRadius}px;

      ${theme.breakpoints.down("lg")} {
        padding: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        padding: 24px;
      }

      &::before {
        content: "";
        position: absolute;
        display: block;
        background-color: rgba(255, 255, 255, 0.13);
        top: 0;
        right: 0;
        border-radius: 0 0 0 100%;

        ${theme.breakpoints.down("sm")} {
          width: 52%;
          height: 60%;
        }

        ${theme.breakpoints.between("sm", "md")} {
          width: 40%;
          height: 60%;
        }

        ${theme.breakpoints.between("md", "lg")} {
          width: 50%;
          height: 60%;
        }

        ${theme.breakpoints.up("lg")} {
          width: 43%;
          height: 53%;
        }
      }
    }

    &__title {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      color: #ffffff;
      position: relative;

      ${theme.breakpoints.down("lg")} {
        font-size: 20px;
        line-height: 24px;
        padding-top: 44px;
        padding-bottom: 60px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 24px;
        line-height: 30px;
        padding-top: 33px;
        padding-bottom: 57px;
      }
    }

    &__image {
      position: absolute;
      width: 145px;
      height: 160px;
      object-fit: contain;
      object-position: top right;

      ${theme.breakpoints.down("lg")} {
        top: -7%;
        right: 0;
      }

      ${theme.breakpoints.between("md", "lg")} {
        top: -10%;
        right: -14%;
      }

      ${theme.breakpoints.up("lg")} {
        top: -14%;
        right: 0;
      }
    }

    &__button {
      width: 100%;
      background-color: ${theme.palette.common.white};
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default tests
