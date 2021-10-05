import { css } from "@emotion/react"

const footer = (theme) => css`
  .footer {
    margin-top: auto;
    line-height: 18px;

    ${theme.breakpoints.down("lg")} {
      font-size: 12px;
    }

    ${theme.breakpoints.up("lg")} {
      font-size: 14px;
    }

    a {
      &:not(:hover),
      &:not(:active) {
        color: ${theme.palette.common.black};
      }

      &:hover,
      &:active {
        color: ${theme.palette.primary.dark};
      }
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid ${theme.palette.gray["300"]};
      padding-bottom: 34px;
      margin-top: 10px;

      ${theme.breakpoints.down("lg")} {
        align-items: center;
        flex-wrap: wrap;
        padding-top: 12px;
        gap: 18px;
      }

      ${theme.breakpoints.up("lg")} {
        gap: 20px;
        padding-top: 20px;
      }
    }

    &__copyright-wrapper {
      width: 100%;

      ${theme.breakpoints.down("lg")} {
        max-width: 50%;
      }

      ${theme.breakpoints.up("lg")} {
        max-width: 163px;
      }
    }

    &__logo-wrapper {
      ${theme.breakpoints.down("lg")} {
        max-width: 84px;
        height: 73.5px;
      }

      ${theme.breakpoints.up("lg")} {
        max-width: 104px;
        height: 91px;
      }
    }

    &__copyright {
      line-height: 18px;
      color: #707982;

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
      }
    }

    &__social-wrapper {
      width: 100%;
      gap: 12px;
      display: flex;

      ${theme.breakpoints.down("lg")} {
        margin-bottom: 15px;
        max-width: calc(50% - 18px);
        justify-content: flex-end;
      }

      ${theme.breakpoints.up("lg")} {
        margin-left: auto;
        max-width: 168px;
        order: 1;
      }
    }

    &__social-icon {
      ${theme.breakpoints.down("lg")} {
        width: 34px;
        height: 34px;
      }

      ${theme.breakpoints.up("lg")} {
        width: 48px;
        height: 48px;
      }
    }

    &__title {
      font-weight: 700;
      line-height: 18px;

      ${theme.breakpoints.down("lg")} {
        font-size: 12px;
        margin-bottom: 6px;
      }

      ${theme.breakpoints.up("lg")} {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }

    &__address-wrapper {
      width: 100%;

      ${theme.breakpoints.up("md")} {
        max-width: 303px;
      }
    }

    &__address-content {
      display: flex;
      flex-direction: column;

      ${theme.breakpoints.down("lg")} {
        gap: 6px;
      }

      ${theme.breakpoints.up("lg")} {
        gap: 14px;
      }
    }

    &__details-organization {
      display: flex;

      ${theme.breakpoints.down("lg")} {
        gap: 12px;
      }

      ${theme.breakpoints.up("lg")} {
        gap: 14px;
      }
    }

    &__email-wrapper {
      width: 100%;

      ${theme.breakpoints.between("md", "lg")} {
        max-width: 33.3%;
      }

      ${theme.breakpoints.up("md")} {
        max-width: 192px;
      }
    }

    &__phone-wrapper {
      width: 100%;

      ${theme.breakpoints.up("md")} {
        max-width: 140px;
      }
    }
  }
`

export default footer
