import { css } from "@emotion/react"

const subtitle = (theme) => css`
  .subtitle {
    text-align: center;

    ${theme.breakpoints.down("lg")} {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 6px;
    }

    ${theme.breakpoints.up("lg")} {
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
`

export default subtitle
