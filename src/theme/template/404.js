import { css } from "@emotion/react"
import container from "src/theme/mixes/container"
import btn from "src/theme/mixes/btn"
import header from "src/theme/blocks/header"
import footer from "src/theme/blocks/footer"

const notFoundPage = (theme) => css`
  ${container(theme)}
  ${btn(theme)}
  ${header(theme)}
  ${footer(theme)}
`

export default notFoundPage
