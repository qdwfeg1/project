const breakpoints = {
  values: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
}
const typography = {
  rootFontSize: 16,
}
typography.pxToRem = (value) => `${value / typography.rootFontSize}rem`

const theme = {
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key] / 16}em)`,
    down: (key) => `@media (max-width: ${(breakpoints.values[key] - 0.1) / 16}em)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min] / 16}em) and (max-width: ${
        (breakpoints.values[max] - 0.1) / 16
      }em)`,
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#0176d8",
      dark: "#00246E",
    },
    gray: {
      100: "#F4F5F6",
      200: "#EFF3F5",
      300: "#e3e3e3",
      400: "#A3A3A3",
      700: "#515867",
    },
    error: {
      light: "#ffebeb",
    },
  },
  borderRadius: 20,
  typography: {
    ...typography,
    fontFamily: `Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontSize: typography.pxToRem(16),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: 1.5,
  },
  shadows: ["0px 6px 8px rgba(26, 28, 30, 0.07)"],
}

export default theme
