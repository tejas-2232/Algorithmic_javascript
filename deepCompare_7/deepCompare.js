//deep comparison of multi-dimensional arrays with recursion

const deepCompare = (a, b) => {
  if(a === b) return true
    
  if(typeof a === "object" && typeof b === "object")
  {
    if(a instanceof Date && b instanceof Date) return a.valueOf() === b.valueOf()
    else 
    {
      const keysA = Object.keys(a)
      if(keysA.length !== Object.keys(b).length) return false
      return !keysA.some( key => {
        return !deepCompare(a[key], b[key])
      })
    }
  }
  else return false
}
