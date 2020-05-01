import { kFormat } from "../utility"

const numberK = n => {
  let formatted = kFormat(n);
  return `<p title="${n}">${formatted}</p>`
}

export default numberK;