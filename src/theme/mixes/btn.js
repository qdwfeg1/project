import { css } from "@emotion/react"

const btn = (theme) => css`
  .btn {
    display: inline-block;
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.common.white};
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 0 solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: ${theme.typography.fontSize};
    border-radius: ${theme.borderRadius / 2}px;
    text-transform: uppercase;

    &-primary {
      color: ${theme.palette.common.white};
      background-color: ${theme.palette.primary.main};
    }
  }
`

export default btn
