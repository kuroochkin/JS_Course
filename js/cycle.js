//dz

for (let i = 5; i <= 10; i++)
{
    console.log(i);
} 

for (let i = 20; i >= 10; i--)
{
    if(i == 12){
        break;
    }
    console.log(i);
}

for (let i = 2; i <= 10; i++ )
{
    if(i % 2 == 1){
        continue;
    }
    console.log(i);
}

const arr = [];

for (let i = 0; i <= 5; i++){
    arr[i] = i+5;
} 

console.log(arr);

const result = [];

for(let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}

console.log("Массив arr: " + arr);
console.log("Массив result: " + result);


let array = [2,5,6,7, "Bob"];

for(let i = 0; i < array.length; i++)
{
    if(typeof(array[i]) === "number"){
        array[i] = array[i]*2;
    }
    if(typeof(array[i]) === "string"){
        array[i] += " - done";
    }
}

console.log(array);

let res = [];
for (let i = 0; i < array.length; i++)
{
    if(typeof(array[i]) === "number"){
        res[i] = array[i]/2;
    }
    if(typeof(array[i]) === "string"){
        res[i] += " Bob";
    }
}

console.log(res);




