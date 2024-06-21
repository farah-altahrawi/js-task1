var the_title='';
the_title+="<h1>Favorite Restaurants</h1>";
document.querySelector(".the-title").innerHTML=the_title;

var cafe =['Oud Cafe','Dar Neimah','Roasters Coffee House'];
var data='';
for (var i=0; i<=2; i++){
    data+=`<li> ${cafe[i]}</li>`;
}
document.querySelector("ul").innerHTML=data;
