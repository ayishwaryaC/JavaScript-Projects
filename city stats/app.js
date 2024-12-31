const button =document.querySelector('button')
let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click',displayStats)
function displayStats(){
    
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;
    let population = 0,language = '',literacyRate = 0;
    switch(city){
        case 'Chennai':
           population = 7446653
           literacyRate = 88.71
           language = 'tamil'
           break
        case 'Bangalore':
           population = 6455456
           literacyRate = 66.9
           language = 'kannada'
           break
        case 'Mumbai':
            population = 4245677343
            literacyRate = 99.5
            language = 'marathi'
            break
        case 'Dubai':
            population = 75321578
            literacyRate = 45.8
            language = 'Hindi'
            break
        

    }










    let text = `The indian city of the ${city} as population of ${population}.The language they spoken is ${language} and literacy rate is ${literacyRate}%` ;
    let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML = text

}