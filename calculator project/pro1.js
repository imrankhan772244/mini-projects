var buttons=document.getElementsByClassName("button");
var display=document.querySelector(".screen");
var operand1=0;
var operand2=null;
var operator=null;

for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        // if(value=='-'){
        //     // var minus=value;
        //     // var nwvalue=-parseInt(value);

        //     // console.log(value);
        //     display.innerText +=value;
            

        // }
        if(value=='AC'){
            operand1=0;
            operand2=null;
            operator=null;
            display.innerText='';
        }
        else if(value=='+'){
            operand1=parseFloat(display.textContent);
            if(operand1!='0'){
                operator=value;
                display.innerText='';
            }
            else{
                display.innerText='Please Enter First element!!!';
            }

        }
        else if(value=='-'){
            operand1=parseFloat(display.textContent);
            if(operand1!='0'){
                operator=value;
                display.innerText='';
            }
            else{
                display.innerText='Please Enter First element!!!';
            }

        }
        else if(value=='*'){
            operand1=parseFloat(display.textContent);
            if(operand1!='0'){
                operator=value;
                display.innerText='';
            }
            else{
                display.innerText='Please Enter First element!!!';
            }

        }
        else if(value=='/'){
            operand1=parseFloat(display.textContent);
            if(operand1!='0'){
                operator=value;
                display.innerText='';
            }
            else{
                display.innerText='Please Enter First element!!!';
            }

        }
        else if(value=='%'){
            operand1=parseFloat(display.textContent);
            if(operand1!='0'){
                operator=value;
                display.innerText='';
            }
            else{
                display.innerText='Please Enter First element!!!';
            }

        }
        else if(value=='='){
        operand2=parseFloat(display.textContent);
        if(operand2!='null'){
            var op=operand1;
            operand1=eval(op+''+operator+''+operand2);
            display.innerText=operand1;
            operand2=null;
        }
         else{
            display.innerContent='Please Enter second value!!!';
         }
        }
        else{
            if(value=='-'){
            display.innerText +=value;
                value=(value*(-1));
                console.log(value);
            }
            else{
                display.innerText +=value;
                console.log(value);
            }

            // console.log(value);
        }
    })
}