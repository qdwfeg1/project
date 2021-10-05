import PropTypes from "prop-types"
import { Global, ThemeProvider } from "@emotion/react"
import theme from "theme"
import reboot from "theme/reboot"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={(themeItem) => reboot(themeItem)} />
    {children}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.any,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
