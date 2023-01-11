// function callMe(){
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{
//         method:'GET',
//         mode:'no-cors',
//         //GET is by default, so you don't have to define.
//         headers:{
//             'Content-Type':'application/json'
//             //Content-Type: text/html
//             //Content-Type:'appication/x-www-form-rulencoded'.
//         }
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.log(data.time);
//             console.log(data.bpi.USD);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// callMe();
function createCoctail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((res) => {
        if(res.ok){
            return res.json();
        }else{
            console.log('NETWOEK RESPONSE ERROR');
        }
    }).then((data) => {
        displayData(data);
    }).catch((err) => {
        console.log(err);
    })
}


function displayData(data){
    const coctail = data.drinks[0];

    console.log(coctail.strDrink);

    const coctailName = document.createElement('h4');
    coctailName.innerHTML = coctail.strDrink;

    const coctailImage = document.createElement('img');
    coctailImage.src = coctail.strDrinkThumb;
    coctailImage.width = '200';
    coctailImage.height = '200';

    const container = document.getElementById('content');
    container.insertBefore(coctailName, container.firstChild);
    container.insertBefore(coctailImage, container.firstChild);
}