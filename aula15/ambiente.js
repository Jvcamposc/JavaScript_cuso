let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`nosso vetor e o ${num.length}`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!') 
}else{
    console.log(`O valor 8 esta na posição ${num}`)
}
