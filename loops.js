let birds=['Eagle','Owl','Robin']
console.log(birds)



birds.forEach(function (bird,index){

    console.log(index, bird.toUpperCase())


})
//traditional for loop;
for(let x=0;x<birds.length;x=x+1){
    let bird=birds[x]
    console.log(x,bird)
}