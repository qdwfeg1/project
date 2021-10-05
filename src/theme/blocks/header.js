import { css } from "@emotion/react"

const header = (theme) => css`
  .header {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${theme.palette.common.white};
    padding-top: 4px;
    padding-bottom: 4px;

    &__wrapper {
      display: flex;
      align-items: center;

      ${theme.breakpoints.down("lg")} {
        flex-wrap: wrap;
        justify-content: space-between;
      }

      ${theme.breakpoints.down("sm")} {
        padding-right: 10px;
        padding-left: 10px;
      }
    }

    &__logo-wrapper {
      max-width: 91px;
      height: 72px;
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 10px;

      ${theme.breakpoints.up("lg")} {
        order: 1;
        max-width: 425px;
        margin-left: auto;
      }
    }

    &__phone {
      padding: 12px 8px;
      line-height: 1;

      strong {
        font-weight: ${theme.typography.fontWeightBold};
      }

      ${theme.breakpoints.down("sm")} {
        font-size: 14px;
      }

      ${theme.breakpoints.between("sm", "lg")} {
        font-size: 16px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 18px;
      }
    }

    &__btn-desktop {
      ${theme.breakpoints.down("lg")} {
        display: none;
      }

      ${theme.breakpoints.up("lg")} {
        padding: 10px 20px;
        text-align: center;
      }
    }

    &__left {
      ${theme.breakpoints.down("lg")} {
        width: 100%;
        transition: 0.3s;
      }

      ${theme.breakpoints.up("lg")} {
        display: flex;
      }

      ${theme.breakpoints.between("lg", "xl")} {
        margin-left: 20px;
      }

      ${theme.breakpoints.up("xl")} {
        margin-left: 38px;
      }

      &:not(.open) {
        ${theme.breakpoints.down("lg")} {
          overflow: hidden;
          height: 0;
        }
      }

      &.open {
        ${theme.breakpoints.down("lg")} {
          overflow: auto;
          display: flex;
          margin-top: 4px;
          padding-top: 10px;
          flex-direction: column;
          height: calc(100vh - 80px);
          padding-bottom: 100px;
        }
      }
    }

    &__btn-mobile {
      ${theme.breakpoints.between("md", "lg")} {
        max-width: 300px;
      }

      ${theme.breakpoints.down("lg")} {
        padding: 15px 22px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        border-radius: ${theme.borderRadius / 2}px;
        margin-left: 16px;
        margin-right: 16px;
        width: calc(100% - 32px);
        text-align: center;
      }

      ${theme.breakpoints.up("lg")} {
        display: none;
      }
    }
  }

  .navbar {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;

    ${theme.breakpoints.up("lg")} {
      display: flex;
    }

    &-toggler {
      ${theme.breakpoints.down("lg")} {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        padding: 6px;

        &-icon {
          position: relative;

          &,
          &::before,
          &::after {
            display: block;
            height: 3px;
            background-color: ${theme.palette.primary.dark};
            border-radius: 3px;
            transition: 0.3s;
          }

          &::before,
          &::after {
            content: "";
            position: absolute;
            left: 0;
            width: 26px;
          }

          &::before {
            bottom: 8px;
          }

          &::after {
            top: 8px;
          }
        }

        &:not(.open) &-icon {
          width: 26px;
        }

        &.open &-icon {
          width: 0;

          &::before {
            transform: rotate(45deg) translate(-3px, 15px);
          }

          &::after {
            transform: rotate(-45deg) translate(-4px, -14px);
          }
        }
      }

      ${theme.breakpoints.up("lg")} {
        display: none;
      }
    }
  }

  .nav-item {
    ${theme.breakpoints.down("lg")} {
      margin-bottom: 16px;
    }

    ${theme.breakpoints.up("lg")} {
      position: relative;

      &:not(:hover) > ul {
        display: none;
      }

      &:hover > ul {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
      }
    }
  }

  .nav-link {
    font-weight: 700;
    text-transform: uppercase;

    ${theme.breakpoints.down("lg")} {
      font-size: 14px;
      line-height: 18px;
      padding: 10px 16px;
      display: block;
    }

    ${theme.breakpoints.up("lg")} {
      padding: 12px 8px;
      font-size: 18px;
      line-height: 1;
      display: block;
      white-space: nowrap;

      &.arrow::after {
        content: "";
        border: solid ${theme.palette.primary.dark};
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
        margin: 0 3px 3px 10px;
      }
    }
  }

  .dropdown {
    &-menu {
      list-style: none;
      padding-left: 0;

      ${theme.breakpoints.up("lg")} {
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 8px;
        background-color: ${theme.palette.common.white};
        border: 1px solid ${theme.palette.gray["300"]};
        box-shadow: ${theme.shadows[0]};
      }
    }

    &-link {
      ${theme.breakpoints.down("lg")} {
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        padding: 6px 16px 6px 34px;
        display: block;
      }

      ${theme.breakpoints.up("lg")} {
        display: block;
        white-space: nowrap;
        padding: 4px 16px;
      }
    }
  }
`

export default header
