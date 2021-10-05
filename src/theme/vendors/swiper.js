import { css } from "@emotion/react"

import swiperMain from "swiper/css"
import swiperPagination from "swiper/css/pagination"
import swiperNavigation from "swiper/css/navigation"

const swiper = (theme) => css`
  ${swiperMain}
  ${swiperPagination}
  ${swiperNavigation}

  :root {
    --swiper-pagination-bullet-horizontal-gap: 0;
    --swiper-pagination-bullet-size: 22px;
    --swiper-pagination-bullet-inactive-opacity: 1;
    --swiper-pagination-bullet-inactive-color: ${theme.palette.gray["300"]};
    --swiper-pagination-color: ${theme.palette.primary.main};
  }

  html {
    :root {
      ${theme.breakpoints.down("lg")} {
        --swiper-navigation-size: 50px;
      }

      ${theme.breakpoints.up("lg")} {
        --swiper-navigation-size: 70px;
      }
    }
  }

  .swiper {
    &-pagination-bullet {
      border: 5px solid ${theme.palette.common.white};
    }
  }
`

export default swiper
