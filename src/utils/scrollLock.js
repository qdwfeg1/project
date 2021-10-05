const scrollLock = (value) => {
  const div = document.createElement("div")
  div.style.overflowY = "scroll"
  div.style.width = "50px"
  div.style.height = "50px"
  document.body.append(div)
  document.body.style.paddingRight = value ? `${div.offsetWidth - div.clientWidth}px` : ""
  div.remove()
  document.body.style.overflow = value ? "hidden" : ""
}

export default scrollLock
