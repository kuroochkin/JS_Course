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

let arr = {};

for (let i = 0; i <= 5; i++)
{
    arr[i] = i+5;
} 

console.log(arr);

