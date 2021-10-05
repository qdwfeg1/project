import { css } from "@emotion/react"

const formControl = (theme) => css`
  .form-control {
    //display: block;
    //width: 100%;
    font-family: inherit;
    font-weight: 500;
    color: ${theme.palette.common.black};
    background-color: ${theme.palette.gray["100"]};
    background-clip: padding-box;
    border: none;
    border-radius: ${theme.borderRadius / 2.5}px;
    appearance: none;

    ${theme.breakpoints.down("lg")} {
      padding: 15px;
      font-size: 14px;
      line-height: 18px;
    }

    ${theme.breakpoints.up("lg")} {
      padding: 18px;
      font-size: 20px;
      line-height: 24px;
    }

    &[type="file"] {
      overflow: hidden;

      &:not(:disabled):not([readonly]) {
        cursor: pointer;
      }
    }

    &:focus {
      color: ${theme.palette.common.black};
      background-color: ${theme.palette.gray["100"]};
      border-color: transparent;
      outline: 0;
    }

    &::placeholder {
      color: ${theme.palette.gray["400"]};
      opacity: 1;
    }

    &:disabled,
    &[readonly] {
      color: ${theme.palette.gray["300"]};
      opacity: 1;
    }

    &::file-selector-button {
      color: ${theme.palette.common.black};
      pointer-events: none;
      border-color: inherit;
      border-style: solid;
      border-width: 0;
      border-inline-end-width: 1px;
      border-radius: 0;
    }

    &:hover:not(:disabled):not([readonly])::file-selector-button {
      background-color: ${theme.palette.gray["100"]};
    }

    &::-webkit-file-upload-button {
      color: ${theme.palette.common.black};
      pointer-events: none;
      border-color: inherit;
      border-style: solid;
      border-width: 0;
      border-inline-end-width: 1px;
      border-radius: 0;
    }

    &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
      background-color: ${theme.palette.gray["100"]};
    }

    &.error {
      background-color: ${theme.palette.error.light};
    }
  }
`

export default formControl
