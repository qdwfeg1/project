import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, ...props }) => {
  if (/^(ftp|http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-/]))?$/.test(to))
    return (
      <a href={to || "/"} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  return (
    <GatsbyLink to={to || "/"} {...props}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
}

Link.defaultProps = {
  children: null,
  to: "/",
}

export default Link
