const allShifts = [...Array(26).keys()]
const cipher = (str, keys=allShifts) => {
    const chars = str.split("")
    const res = keys.map( key => {
        return chars.map( c => {
            const char = c.charCodeAt(0)
            if(char > 64 && char < 91)
            {
                return String.fromCharCode(65 + (char + key) % 65 % 26)
            }
            else if(char > 96 && char < 123)
            {
                return String.fromCharCode(97 + (char + key) % 97 % 26)
            }
            else
            {
                return String.fromCharCode(char)
            }
        })
    })

    return res.map( (r, i) => { return { key: keys[i], result: r.join("") } } )
}
