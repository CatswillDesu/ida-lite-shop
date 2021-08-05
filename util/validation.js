export function validateName(name) {
  if (name.length < 3 || name.length > 16) {
    return false
  }
  return true
}

export function validatePhone(phone) {
  return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone)
}
