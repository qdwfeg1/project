import { css } from "@emotion/react"

const container = (theme) => css`
  .container {
    ${theme.breakpoints.up("sm")} {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
    }

    ${theme.breakpoints.between("sm", "md")} {
      max-width: ${theme.typography.pxToRem(theme.breakpoints.values.sm)};
    }

    ${theme.breakpoints.between("md", "lg")} {
      max-width: ${theme.typography.pxToRem(theme.breakpoints.values.md)};
    }

    ${theme.breakpoints.between("lg", "xl")} {
      max-width: ${theme.typography.pxToRem(theme.breakpoints.values.lg)};
    }

    ${theme.breakpoints.up("xl")} {
      max-width: ${theme.typography.pxToRem(theme.breakpoints.values.xl)};
      padding-right: 40px;
      padding-left: 40px;
    }

    ${theme.breakpoints.down("xl")} {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
`

export default container
