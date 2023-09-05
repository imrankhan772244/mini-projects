const api_url="https://api.quotable.io/random";

async function getQuote(url){
 const response=await fetch(url);
 var data=await response.json();
  document.getElementById("quote").innerHTML=data.content;
  document.getElementById("author").innerHTML=data.author;
}
getQuote(api_url);

document.getElementById("new_quote").addEventListener('click',function(){
    getQuote(api_url);
});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+document.getElementById("quote").innerHTML +" --> by "+document.getElementById("author").innerHTML,
    "Tweet Window","width=600","height=300");
}

document.getElementById("tweet").addEventListener('click',tweet);