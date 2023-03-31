const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        let ru = obj['skills']['languages'][0].toUpperCase();
        let eng = obj['skills']['languages'][1].toUpperCase();

        
        return `Мне ${obj.age} и я владею языками: ${ru}, ${eng}`;
    }
};

function showExperience(obj){
    return obj.skills.exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(obj)
{
    const {js, php, ruby} = obj['skills']['programmingLangs'];
    let result = "";

    if(js !== null){
        result += `Язык js изучен на ${js}\n`;
    }
    if(php !== null){
        result += `Язык php изучен на ${php}\n`;
    }
    if(ruby !== null){
        result += `Язык ruby изучен на ${ruby}\n`;
    }

    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

