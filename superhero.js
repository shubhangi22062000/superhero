const superhero1 = document.getElementById(superhero1);
const card = document.getElementById(card);

card.addEventListener('click',getpic)

function getpic(){
    fetch('https://superheroapi.com/api/access-token/character-id/image')
    .then(res =>res.json())
    .then(data => {
//       superhero-pic.innerHTML=<img src="${data.image}"/> 
        
        let output = '<h2>superhero</h2>';
    data.forEach(function(post){
                 output +=
                 <img src="${data.image}"/> 
                 ;
                 })
     document.getElementById('superhero1').innerHTML=output;

    })
}