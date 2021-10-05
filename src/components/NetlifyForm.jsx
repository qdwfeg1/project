import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const NetlifyForm = ({ children, className, formName, preSubmit, postSubmit, formValues }) => {
  const [inNetlifyBuild, setInNetlifyBuild] = useState(true)
  const [honey, setHoney] = useState("")

  useEffect(() => {
    setInNetlifyBuild(false)
  }, [])

  const formEncodeString = (str) => encodeURIComponent(str).replace(/%20/g, "+")
  const encodeData = (obj) =>
    Object.entries(obj)
      .map((pair) => `${formEncodeString(pair[0])}=${formEncodeString(pair[1])}`)
      .join("&")

  const handleSubmit = async () => {
    try {
      return await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeData({
          ...formValues,
          "form-name": formName,
          infoo: honey,
        }),
      })
    } catch (error) {
      return null
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if ((preSubmit && (await preSubmit())) || !preSubmit) {
      if (await handleSubmit()) {
        if (postSubmit) postSubmit()
      } else {
        throw new Error("Error submitting to Netlify")
      }
    }
  }

  if (inNetlifyBuild)
    return (
      <form
        className={className}
        name={formName}
        onSubmit={onSubmit}
        data-netlify="true"
        netlify-honeypot="infoo"
      >
        {children}
      </form>
    )
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      <p style={{ opacity: "0", position: "absolute", top: "0", left: "0" }}>
        <input
          style={{ width: "0", height: "0", zIndex: "-1" }}
          name="description"
          aria-label="description"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </p>
    </form>
  )
}

NetlifyForm.propTypes = {
  formName: PropTypes.string.isRequired,
  formValues: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  preSubmit: PropTypes.func,
  postSubmit: PropTypes.func,
}

NetlifyForm.defaultProps = {
  children: null,
  className: "",
  preSubmit: () => true,
  postSubmit: () => {},
}

export default NetlifyForm
