import { css } from "@emotion/react"

const title = (theme) => css`
  .title {
    font-weight: 700;
    color: ${theme.palette.primary.dark};
    text-align: center;

    ${theme.breakpoints.down("lg")} {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 12px;
    }

    ${theme.breakpoints.up("lg")} {
      font-size: 44px;
      line-height: 50px;
      margin-bottom: 16px;
    }
  }
`

export default title
