import { css } from "@emotion/react"

const reboot = (theme) => css`
  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  :root {
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize};
    font-weight: ${theme.typography.fontWeightRegular};
    line-height: ${theme.typography.lineHeight};
    margin: 0;
    color: ${theme.palette.common.black};
    background-color: ${theme.palette.common.white};
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    margin: 1rem 0;
    opacity: 0.25;
    color: inherit;
    border: 0;
    background-color: currentColor;

    &:not([size]) {
      height: 1px;
    }
  }

  h6,
  h5,
  h4,
  h3,
  h2 {
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;

    @media (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);

    @media (min-width: 1200px) {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);

    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr {
    &[title],
    &[data-original-title] {
      cursor: help;
      text-decoration: underline dotted;
      text-decoration-skip-ink: none;
    }
  }

  address {
    font-style: normal;
    line-height: inherit;
    margin-bottom: 1rem;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    text-decoration: none;
    color: ${theme.palette.primary.dark};

    &:not([href]):not([class]) {
      &,
      &:hover {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
    font-size: 1em;
    direction: ltr;
    unicode-bidi: bidi-override;
  }

  pre {
    font-size: 0.875em;
    display: block;
    overflow: auto;
    margin-top: 0;
    margin-bottom: 1rem;

    code {
      font-size: inherit;
      word-break: normal;
      color: inherit;
    }
  }

  code {
    font-size: 0.875em;
    word-wrap: break-word;
    color: #d63384;

    a > & {
      color: inherit;
    }
  }

  kbd {
    font-size: 0.875em;
    padding: 0.2rem 0.4rem;
    color: #fff;
    border-radius: 0.2rem;
    background-color: #212529;

    kbd {
      font-size: 1em;
      font-weight: 700;
      padding: 0;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    color: #6c757d;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-width: 0;
    border-style: solid;
    border-color: inherit;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;

    &:focus:not(:focus-visible) {
      outline: 0;
    }
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;

    &:disabled {
      opacity: 1;
    }
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
    float: left;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0;

    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }

    + * {
      clear: left;
    }
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
  }
`

export default reboot
