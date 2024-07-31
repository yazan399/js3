async function get_pizza(){
const response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
const data= await response.json();

const page=data.recipes;

const result =page.map(function(ele){
    return `
   <div class='pizza'>
    <h2>${ele.title}</h2>
    <img src='${ele.image_url}'>

</div>
    
    
    `;

}).join('');

document.querySelector(".data").innerHTML=result;
}
get_pizza();