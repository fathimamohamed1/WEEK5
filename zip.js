function isMinnesotaZip(code){
    //All MN zip are between these"55002 and 56763
    if(code>=55002 && code<=56763){
        return true
    }else {
        return false
    }
}
console.log(isMinnesotaZip('55404'))
console.log(isMinnesotaZip('55002'))
console.log(isMinnesotaZip('57004'))
console.log(isMinnesotaZip('55000'))


function cityStateAddress(city,state){
    let address=city+',' + state.toUpperCase()
    return address
}
console.log(cityStateAddress('Minneapolis','mn'))
let address=cityStateAddress('Seattle','WA')
console.log(address)

function validGPA(gpa){
    if(gpa>=0 && gpa<=4){
        return true
    }else{
        return false
    }
}

console.log(validGPA('2'))
console.log(validGPA('5'))
console.log(validGPA('4'))
console.log(validGPA('-1'))



    let classCode =2560
    let className='Web programming'
    let Department='ITEC'

console.log(`This class is ${Department} ${classCode} ${className}`)
