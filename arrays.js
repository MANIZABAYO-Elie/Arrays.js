let fruits= ["Mangoes","Bananas","oranges"]
let n = fruits.length
newArray = fruits.push("apples")
console.log(newArray);
console.log(fruits);
let newArray2 = fruits.pop()
console.log(newArray2);
let  array3 = fruits.unshift("pineapple")
console.log(array3);
newArray2= fruits.toString()
console.log(newArray2);
// new ARRAY
const cities= ["kigali","Rubavu","Musanze"]
console.log (cities[0])
// arrays function
const array=[70,80,90,78,75,30]
let sum =0;
for (let index = 0; index < array.length; index++) {
    sum += array[index];
    
}
console.log(sum);
// array.map
const numbers =[1,2,3,4,5,6,7,8,9,10]
const filteredNumbers= numbers.map((number,index)=>{
    if(index<3){
return number
    }
})
console.log(filteredNumbers);
// filter arrays

const values =[13,28,74,80,90,29,40,30,37,35,43]
const even = values.filter(getEvenNumber)
function getEvenNumber(number){
    if (number%2===0) {
        return number;
        
    }
}
console.log(even);