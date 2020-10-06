const iterativeFact = num => {
  let res = 1
  for(let x = 1; x <= num; x++)
  {
    res *= x
  }
  return res
}

const recursiveFact = num => {
  if(num === 1 || num === 0)
  {
    return num
  }
  else
  {
    return num * recursiveFact(num - 1)
  }
}
