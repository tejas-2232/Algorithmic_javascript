//deep comparison of multi-dimensional arrays with recursion

const deepCompare = (a, b) => {
  let res = true
    
  if(Array.isArray(a) && Array.isArray(b))
  {
    let count = 0;

    while(res && count < a.length)
    {
      res = !a.some( (val, i) => {
        return !deepCompare(val, b[i])
      })

      count++
    }
  }
  else
  {
      res = (a === b)
  }

  return res

}
