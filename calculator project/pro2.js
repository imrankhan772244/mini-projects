var buttons=document.getElementsByClassName("button");
var display=document.querySelector('.screen');
let string='';
// console.log(document.querySelector('.screen').innerHTML);

for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        // console.log(value);
        if(value=='='){
            string=eval(string);
            display.innerText=string;
        }
        else if(value=='AC'){
            string='';
            display.innerText=string;
        }
        else{
            string += value;
            console.log(value);
            display.innerText=string;
        }
    })
}