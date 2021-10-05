import { css } from "@emotion/react"

const teachers = (theme) => css`
  .teachers {
    ${theme.breakpoints.down("lg")} {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    ${theme.breakpoints.up("lg")} {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__container {
      ${theme.breakpoints.down("sm")} {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .swiper {
      ${theme.breakpoints.down("xl")} {
        padding-right: 16px;
        padding-left: 16px;
        padding-top: 12px;
      }

      ${theme.breakpoints.up("xl")} {
        padding-right: 40px;
        padding-left: 40px;
        padding-top: 29px;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: 40%;
      width: var(--swiper-navigation-size);
      background-color: ${theme.palette.gray["300"]};
      border-radius: 50%;

      ${theme.breakpoints.down("lg")} {
        padding: 17px;
      }

      ${theme.breakpoints.up("lg")} {
        padding: 24px;
      }

      &:after {
        content: none;
      }

      &::before {
        content: "";
        display: block;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjI5MjggMC4zNzQwOTlDMTAuNjgzMyAtMC4wMTY0MjUgMTEuMzE2NSAtMC4wMTY0MjUzIDExLjcwNyAwLjM3NDA5OUwxMi4yOTA5IDAuOTU4MDE3QzEyLjY4MTIgMS4zNDgyOSAxMi42ODE1IDEuOTgwOTcgMTIuMjkxNiAyLjM3MTZMNS4wOTI0MiA5LjU4MzY2SDIxLjMzMzNDMjEuODg1NSA5LjU4MzY2IDIyLjMzMzMgMTAuMDMxNCAyMi4zMzMzIDEwLjU4MzdWMTEuNDE3QzIyLjMzMzMgMTEuOTY5MyAyMS44ODU1IDEyLjQxNyAyMS4zMzMzIDEyLjQxN0g1LjA5MjQyTDEyLjI5MTYgMTkuNjI5QzEyLjY4MTUgMjAuMDE5NyAxMi42ODEyIDIwLjY1MjMgMTIuMjkwOSAyMS4wNDI2TDExLjcwNyAyMS42MjY1QzExLjMxNjUgMjIuMDE3MSAxMC42ODMzIDIyLjAxNzEgMTAuMjkyOCAyMS42MjY1TDAuMzczNjk5IDExLjcwNzRDLTAuMDE2ODI0NyAxMS4zMTY5IC0wLjAxNjgyNjYgMTAuNjgzNyAwLjM3MzY5OSAxMC4yOTMyTDEwLjI5MjggMC4zNzQwOTlaIiBmaWxsPSIjMDE3Q0UzIi8+Cjwvc3ZnPgo=");
        background-size: contain;
        background-repeat: no-repeat;

        ${theme.breakpoints.down("lg")} {
          width: 16px;
          height: 16px;
        }

        ${theme.breakpoints.up("lg")} {
          width: 23px;
          height: 23px;
        }
      }
    }

    .swiper-button-prev {
      ${theme.breakpoints.down("sm")} {
        left: 16px;
      }

      ${theme.breakpoints.up("sm")} {
        left: 0;
      }
    }

    .swiper-button-next {
      ${theme.breakpoints.down("sm")} {
        right: 16px;
      }
      ${theme.breakpoints.up("sm")} {
        right: 0;
      }

      &::before {
        transform: rotate(180deg);
      }
    }

    .swiper-slide {
      ${theme.breakpoints.down("md")} {
        width: 100%;
      }

      ${theme.breakpoints.up("md")} {
        width: calc(100% / 3);
      }

      &:nth-of-type(odd) .teacher-item__fireworks {
        bottom: 25%;
      }

      &:nth-of-type(even) .teacher-item__fireworks {
        top: 0;
      }
    }
  }

  .teacher {
    &-item {
      max-width: 298px;
      margin-left: auto;
      margin-right: auto;

      ${theme.breakpoints.down("md")} {
        text-align: center;
      }

      &__image-wrapper {
        position: relative;

        ${theme.breakpoints.down("md")} {
          margin-left: auto;
          margin-right: auto;
        }

        ${theme.breakpoints.down("lg")} {
          max-width: 237px;
          max-height: 262px;
          margin-bottom: 10px;
        }

        ${theme.breakpoints.up("lg")} {
          max-width: 297px;
          max-height: 329px;
          margin-bottom: 33px;
        }
      }

      &__image {
        width: 100%;
        height: auto;
        mask-repeat: no-repeat;

        ${theme.breakpoints.down("lg")} {
          mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM3IiBoZWlnaHQ9IjI2MiIgdmlld0JveD0iMCAwIDIzNyAyNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIzNyIgaGVpZ2h0PSIyNjIiPgo8cGF0aCBkPSJNMC42NDg3OTEgMTA0Ljk2MUMxMi4xMzE0IDIyNy4zNTUgNzcuMTk5NCAyNTguODIzIDEwOC4yOTggMjU5LjI1OEMxMzYuMzUyIDI2My4wNjQgMTg5LjE5OCAyNjUuNzgyIDE5MS44MDggMjM4LjM4MUMxOTQuMjU4IDIxMi42NTYgMjA2LjgxNCAxNzkuOTg5IDIxNC42NDMgMTY2Ljk0MUMyMzcuODY5IDEzNy4xOSAyMzcuODA0IDk5LjA4OSAyMzUuMTk0IDgxLjc5OTlDMjE0LjY0MyAtMTQuMTA2IC0xMy43MDQ1IC00OC4wMzE2IDAuNjQ4NzkxIDEwNC45NjFaIiBmaWxsPSIjRTNFNEU0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cmVjdCB4PSItNTUuNzg1MiIgeT0iLTM0LjMzMjYiIHdpZHRoPSIzNTMuNjEyIiBoZWlnaHQ9IjMzNS4zNDQiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9zdmc+Cg==");
        }

        ${theme.breakpoints.up("lg")} {
          mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk3IiBoZWlnaHQ9IjMyOSIgdmlld0JveD0iMCAwIDI5NyAzMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPG1hc2sgaWQ9Im1hc2swIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjk3IgogICAgICAgIGhlaWdodD0iMzI5Ij4KICAgIDxwYXRoCiAgICAgIGQ9Ik0wLjgxMzQ5NCAxMzIuMjI3QzE1LjIxMTEgMjg1LjY5MiA5Ni43OTczIDMyNS4xNDkgMTM1Ljc5MSAzMjUuNjk1QzE3MC45NjcgMzMwLjQ2NyAyMzcuMjI4IDMzMy44NzUgMjQwLjUgMjk5LjUxN0MyNDMuNTcyIDI2Ny4yNjIgMjU5LjMxNSAyMjYuMzAyIDI2OS4xMzIgMjA5Ljk0MkMyOTguMjU0IDE3Mi42MzkgMjk4LjE3MyAxMjQuODY1IDI5NC45IDEwMy4xODdDMjY5LjEzMiAtMTcuMDY1OCAtMTcuMTgzNSAtNTkuNjAzOSAwLjgxMzQ5NCAxMzIuMjI3WiIKICAgICAgZmlsbD0iI0UzRTRFNCIvPgogIDwvbWFzaz4KICA8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CiAgICA8cmVjdCB4PSItNDkiIHk9Ii04MSIgd2lkdGg9IjM4NiIgaGVpZ2h0PSI1NzgiIGZpbGw9ImJsYWNrIi8+CiAgPC9nPgo8L3N2Zz4K");
        }
      }

      &__fireworks {
        position: absolute;
        right: 0;

        ${theme.breakpoints.down("lg")} {
          width: 57px;
          height: 57px;
        }

        ${theme.breakpoints.up("lg")} {
          width: 87px;
          height: 87px;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;

        ${theme.breakpoints.down("lg")} {
          gap: 4px;
        }

        ${theme.breakpoints.up("lg")} {
          gap: 12px;
        }
      }

      &__name {
        font-weight: 600;
        line-height: 26px;

        ${theme.breakpoints.down("lg")} {
          font-size: 18px;
        }

        ${theme.breakpoints.up("lg")} {
          font-size: 24px;
        }
      }

      &__position {
        font-size: 14px;
        line-height: 20px;
        color: ${theme.palette.primary.dark};
      }

      &__short-desc {
        font-size: 14px;
        line-height: 20px;
      }

      &__btn {
        ${theme.breakpoints.down("lg")} {
          display: none;
        }

        ${theme.breakpoints.up("lg")} {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-transform: uppercase;
          color: ${theme.palette.primary.main};
          display: inline-flex;
          align-items: center;
          padding: 0;

          &::after {
            content: "";
            display: inline-block;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjU4NzcgMy45MjA3N0MxMC4yNjMxIDMuNTk2MTYgOS43MzY3NyAzLjU5NjE2IDkuNDEyMTYgMy45MjA3N0M5LjA4Nzc1IDQuMjQ1MTggOS4wODc1MSA0Ljc3MTA3IDkuNDExNjMgNS4wOTU3N0wxMy40NzQ5IDkuMTY2MzRINC4xNjY1OUMzLjcwNjM1IDkuMTY2MzQgMy4zMzMyNSA5LjUzOTQ0IDMuMzMzMjUgOS45OTk2N0MzLjMzMzI1IDEwLjQ1OTkgMy43MDYzNSAxMC44MzMgNC4xNjY1OCAxMC44MzNIMTMuNDc0OUw5LjQxMTYzIDE0LjkwMzZDOS4wODc1MSAxNS4yMjgzIDkuMDg3NzUgMTUuNzU0MiA5LjQxMjE2IDE2LjA3ODZDOS43MzY3NyAxNi40MDMyIDEwLjI2MzEgMTYuNDAzMiAxMC41ODc3IDE2LjA3ODZMMTUuOTU5NSAxMC43MDY4QzE2LjM1IDEwLjMxNjMgMTYuMzUgOS42ODMwOSAxNS45NTk1IDkuMjkyNTdMMTAuNTg3NyAzLjkyMDc3WiIgZmlsbD0iIzAxN0NFMyIvPgo8L3N2Zz4K");
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    &-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      h3 {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
      }

      p {
        font-size: 16px;
        line-height: 26px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      &:not(.show) {
        opacity: 0;
        pointer-events: none;
      }

      &.show {
        opacity: 1;
      }

      &:not(.show) &__dialog {
        transform: translateY(-25%);
      }

      &.show &__dialog {
        transform: translateY(0);
      }

      &__backdrop {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.25);
      }

      &__dialog {
        max-width: 800px;
        background-color: ${theme.palette.common.white};
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: 0.3s;

        ${theme.breakpoints.down("sm")} {
          width: 100%;
          max-height: 100%;
        }

        ${theme.breakpoints.up("sm")} {
          width: calc(100% - 20px);
          max-height: calc(100% - 20px);
          border-radius: ${theme.borderRadius}px;
        }
      }

      &__header {
        ${theme.breakpoints.down("lg")} {
          padding: 16px;
        }

        ${theme.breakpoints.up("lg")} {
          padding: 48px;
        }
      }

      &__btn-close {
        border: none;
        float: right;
        width: 44px;
        height: 44px;
        padding: 0;
        background-color: transparent;
        position: relative;

        ${theme.breakpoints.down("lg")} {
          margin-top: -8px;
          margin-right: -8px;
        }

        ${theme.breakpoints.up("lg")} {
          margin-top: -30px;
          margin-right: -30px;
        }

        &::before,
        &::after {
          position: absolute;
          left: 50%;
          top: 25%;
          content: " ";
          height: 25px;
          width: 2px;
          background-color: #333;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }

      &__image-wrapper {
        border-radius: 50%;
        overflow: hidden;

        ${theme.breakpoints.down("lg")} {
          width: 60px;
          height: 60px;
          flex: 0 0 60px;
          margin-right: 16px;
        }

        ${theme.breakpoints.up("lg")} {
          width: 120px;
          height: 120px;
          flex: 0 0 120px;
          margin-right: 28px;
        }
      }

      &__title-wrapper {
        display: flex;
        align-items: center;
      }

      &__body {
        overflow: auto;

        ${theme.breakpoints.down("lg")} {
          padding: 0 16px 16px;
        }

        ${theme.breakpoints.up("lg")} {
          padding: 0 48px 56px;
        }
      }

      &__position {
        font-size: 16px;
        line-height: 20px;
        color: ${theme.palette.primary.dark};
      }

      &__name {
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
      }
    }
  }
`

export default teachers
