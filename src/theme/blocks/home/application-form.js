import { css } from "@emotion/react"

const applicationForm = (theme) => css`
  .application-form {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .title,
    .subtitle {
      text-align: left;
    }

    .title {
      ${theme.breakpoints.down("lg")} {
        margin-bottom: 18px;
      }

      ${theme.breakpoints.up("lg")} {
        margin-bottom: 22px;
        max-width: 845px;
      }
    }

    .subtitle {
      ${theme.breakpoints.down("lg")} {
        margin-bottom: 21px;
      }

      ${theme.breakpoints.up("lg")} {
        margin-bottom: 36px;
        max-width: 710px;
      }
    }

    &__form {
      display: flex;
      flex-wrap: wrap;

      ${theme.breakpoints.down("lg")} {
        gap: 6px;
      }

      ${theme.breakpoints.up("lg")} {
        gap: 8px;
      }
    }

    &__label {
      ${theme.breakpoints.up("md")} {
        width: 100%;
      }

      ${theme.breakpoints.between("md", "lg")} {
        max-width: 208px;
      }

      ${theme.breakpoints.between("lg", "xl")} {
        max-width: 308px;
      }

      ${theme.breakpoints.up("xl")} {
        max-width: 330px;
      }

      &.name {
        ${theme.breakpoints.down("md")} {
          width: 100%;
        }
      }

      &.phone {
        ${theme.breakpoints.down("md")} {
          max-width: calc(100% - 120px);
          width: 100%;
        }
      }

      &.age {
        ${theme.breakpoints.down("lg")} {
          max-width: 110px;
        }

        ${theme.breakpoints.up("lg")} {
          max-width: 150px;
        }
      }
    }

    .form-control {
      width: 100%;
    }

    .form-select {
      ${theme.breakpoints.down("lg")} {
        width: 110px;
      }
      ${theme.breakpoints.up("lg")} {
        width: 150px;
      }
    }

    &__btn-wrapper {
      width: 100%;
      position: relative;

      ${theme.breakpoints.between("md", "lg")} {
        max-width: 192px;
      }

      ${theme.breakpoints.between("lg", "xl")} {
        max-width: 200px;
      }

      ${theme.breakpoints.up("xl")} {
        max-width: 285px;
      }
    }

    &__image {
      ${theme.breakpoints.down("lg")} {
        display: none;
      }

      ${theme.breakpoints.up("lg")} {
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        object-fit: contain;
      }

      ${theme.breakpoints.between("lg", "xl")} {
        width: 167px;
        height: 166px;
      }

      ${theme.breakpoints.up("xl")} {
        width: 187px;
        height: 186px;
      }
    }

    .btn {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
      text-transform: uppercase;
      font-weight: 600;
      width: 100%;

      ${theme.breakpoints.down("md")} {
        margin-top: 12px;
      }

      ${theme.breakpoints.down("xl")} {
        padding: 15px;
        font-size: 14px;
        line-height: 20px;
      }

      ${theme.breakpoints.up("lg")} {
        position: relative;
        z-index: 1;
      }

      ${theme.breakpoints.between("lg", "xl")} {
        height: 100%;
      }

      ${theme.breakpoints.up("xl")} {
        padding: 18px;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`

export default applicationForm
