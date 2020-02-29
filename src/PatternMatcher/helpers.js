export const ascendingArray = maximum => {
  return [...Array(maximum).keys()].map(key => {
    return key + 1
  })
}
