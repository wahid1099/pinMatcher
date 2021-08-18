
//generating random number on button click

function generatNumber(){

    const pin = Math.round(Math.random() * 10000);
    
   const pinString=pin+'';
   console.log(pinString);
   if(pinString.length==4){
       return pin;
   }else{
          return  generatNumber();
   }
  
}

function generatePin() {
    
     const pin = generatNumber();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number=event.target.innerText;
 console.log(number);

    const calInput = document.getElementById('typped-number');
    if(isNaN(number)) {
        if(number=='C'){
            calInput.value='';
        }
    }else{
        const previuesNumber=calInput.value;
        const newNumber=previuesNumber+number;
        calInput.value=newNumber;
    }

});

function verifyPin(){
const pin=document.getElementById("display-pin").value;
const typedNumber=document.getElementById("typped-number").value;
const succecMessage=document.getElementById("notify-success");
const failsMessage=document.getElementById("notify-fail");
console.log(typedNumber);
if(pin==typedNumber){
    succecMessage.style.display='block';
    failsMessage.style.display='none';
}
else{
    succecMessage.style.display='none';
    failsMessage.style.display='block';
}


}