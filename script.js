function searchBook() {

let input = document
.getElementById("search")
.value
.toLowerCase();

let card = document
.getElementsByClassName("card");

for(let i=0;i<card.length;i++){

let title = card[i]
.getElementsByTagName("h2")[0]
.innerText
.toLowerCase();

if(title.indexOf(input)>-1){

card[i].style.display="block";

}else{

card[i].style.display="none";

}

}

}
