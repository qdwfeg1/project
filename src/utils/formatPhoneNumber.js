const formatPhoneNumber = (phoneNumber = "", bold = false) => {
  const cleanNum = phoneNumber.toString().replace(/\D/g, "")
  const match = cleanNum.match(/^(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/)
  if (match?.length) {
    return `+${match[1]} (${match[2]}) ${bold ? "<strong>" : ""}${match[3]}-${match[4]}-${
      match[5]
    }${bold ? "</strong>" : ""}`
  }
  return cleanNum
}

export default formatPhoneNumber
