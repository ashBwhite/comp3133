const fs = require('fs')

//Async
console.log("START")
const data = fs.readFileSync('input_countries.csv')
console.log(data.toString())
console.log("END")

//Delete Canada.txt
fs.unlink('canada.txt', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File Deleted...")
})

//Delete usa.txt
fs.unlink('usa.txt', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File Deleted...")
})

//File write to Canada.txt
async function appendData(data){
    try{
        await fs.writeFile('canada.txt', data, () => {flag: 'a'})
    }catch(error){
        console.log('Error :' + error)
    }
}

appendData('country,year,population\ncanada,1985,23456778\ncanada,1986,23457589')

//File write to usa.txt
async function appendData1(data){
    try{
        await fs.writeFile('usa.txt', data, () => {flag: 'a'})
    }catch(error){
        console.log('Error :' + error)
    }
}

appendData1('country,year,population\nusa,1952,157553000\nusa,1957,171984000')