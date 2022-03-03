function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message=shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalplaces){
    let celsius=(f-32)*5/9
    if (decimalplaces){
        return celsius.toFixed(decimalplaces)
    }else
    return celsius
}


let todayTemp=75
todayCelsius=f_to_c(todayTemp,3)
console.log(todayCelsius)