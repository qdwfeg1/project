import { css } from "@emotion/react"

const formSelect = (theme) => css`
  .form-select {
    //display: block;
    //width: 100%;
    font-family: inherit;
    font-weight: 500;
    color: ${theme.palette.common.black};
    background-color: ${theme.palette.gray["100"]};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: none;
    border-radius: ${theme.borderRadius / 2.5}px;
    appearance: none;
    text-overflow: ellipsis;
    position: relative;

    ${theme.breakpoints.down("lg")} {
      padding: 15px 27px 15px 15px;
      font-size: 14px;
      line-height: 18px;
    }

    ${theme.breakpoints.up("lg")} {
      padding: 18px 27px 18px 18px;
      font-size: 20px;
      line-height: 24px;
    }

    &:focus {
      border-color: transparent;
      outline: 0;
    }

    &[multiple],
    &[size]:not([size="1"]) {
      background-image: none;
    }

    &:disabled {
      color: ${theme.palette.gray["300"]};
      background-color: ${theme.palette.gray["100"]};
      border-color: transparent;
    }

    &.placeholder {
      color: ${theme.palette.gray["400"]};
    }

    &:-moz-focusring {
      color: transparent;
      text-shadow: none;
    }

    &.error {
      background-color: ${theme.palette.error.light};
    }

    & > option {
      color: ${theme.palette.common.black};
      background-color: ${theme.palette.common.white};
    }
  }
`

export default formSelect
