function sayHello(name){
    return `Привет, ${name}!`;
}

console.log(sayHello("Влад"));

function returnArray(num)
{
    const arr = [];
    arr[0] = num - 1;
    arr[1] = num;
    arr[2] = num + 1;
    
    return arr;
}

console.log(returnArray(5));

function PrintResult(base, count){
    if(base < 0 || typeof(base) != 'number'){
        return base;
    }
    else{
        let result = "";
        for(let i = 1; i <= count; i++)
        {
            let res = base * i;
    
            if(i == count){
                result += `${res}`;
            } else{
                result += `${res}---`;
            }
        }
        return result;
    }
    
}

console.log(PrintResult(3, 10));



