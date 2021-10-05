import { css } from "@emotion/react"
import container from "src/theme/mixes/container"
import btn from "src/theme/mixes/btn"
import formControl from "theme/mixes/form-control"
import formSelect from "theme/mixes/form-select"
import title from "src/theme/mixes/title"
import subtitle from "src/theme/mixes/subtitle"
import swiper from "theme/vendors/swiper"
import header from "src/theme/blocks/header"
import footer from "src/theme/blocks/footer"

import applicationForm from "theme/blocks/home/application-form"
import courses from "theme/blocks/home/courses"
import instagram from "theme/blocks/home/instagram"
import news from "theme/blocks/home/news"
import reviews from "theme/blocks/home/review"
import slider from "theme/blocks/home/slider"
import teachers from "theme/blocks/home/teachers"
import tests from "theme/blocks/home/tests"

const home = (theme) => css`
  ${container(theme)}
  ${btn(theme)}
  ${formControl(theme)}
  ${formSelect(theme)}
  ${title(theme)}
  ${subtitle(theme)}
  ${swiper(theme)}
  ${header(theme)}
  ${footer(theme)}
  ${slider(theme)}
  ${courses(theme)}
  ${tests(theme)}
  ${teachers(theme)}
  ${news(theme)}
  ${reviews(theme)}
  ${instagram(theme)}
  ${applicationForm(theme)}
`

export default home
