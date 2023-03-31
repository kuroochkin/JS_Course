const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(obj){
    if(obj.lenght == 0){
        return "Семья пуста";
    } else{
        let result = "Семья состоит из: ";
        for(let item of obj){
            result += `${item} `;
        }
        return result;
    }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(obj){
    let result = "";
    obj.forEach(function(item){
        result += item.toLowerCase();
        result += "\n";
    });
    return result;
}

console.log(standardizeStrings(favoriteCities));

