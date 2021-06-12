const asciify = require('asciify-image')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

convert()

function convert(){
    readline.question('', name => {
        asciify(__dirname+`${name}`, {fit: 'box',height: 100, width:100}, (err, converted)=> {
            console.log(err||converted)
        })
        readline.close()
        convert()
    })
}
    

