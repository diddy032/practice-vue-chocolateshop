export default function (id, Allproducts) {
  let itemtitle = ''
  Object.values(Allproducts).filter(element => {
    if (id.indexOf(element.id) > -1) {
      itemtitle = element.title
      return element
    }
  })
  return itemtitle
}
