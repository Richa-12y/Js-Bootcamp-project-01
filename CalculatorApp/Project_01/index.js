const calculator=document.querySelector('.calculator')
const keys=document.querySelector('.calculator-keys')
const display=document.querySelector('.calculator-display')
const value=document.querySelector('.button-value')


const buttonClicked=  (value) => {
let operatorParse = localStorage.getItem('operator')
let operator = JSON.parse(operatorParse)
if(operator){
     let valueTwo= !localStorage.getItem('valueTwo') ?0:localStorage.getItem('valueTwo') 
     let valueTwoData= `${JSON.parse(valueTwo)}${value}`
     display.innerHTML=valueTwoData
   localStorage.setItem('valueTwo',JSON.stringify(valueTwoData))

}else{
     let valueOne= !localStorage.getItem('valueOne')?0:localStorage.getItem('valueOne')
     let valueData= `${JSON.parse(valueOne)}${value}`
     display.innerHTML=valueData
      localStorage.setItem('valueOne',JSON.stringify(valueData))
}

}



const operatorClick =(value) => {
     localStorage.setItem('operator',JSON.stringify(value)) 
     display.innerHTML=value==='add'?"+":value==='sub'?'-':value==='mul'?"*":"/"
}
const getResult = () => {
     let valueOne= parseFloat(JSON.parse(localStorage.getItem('valueOne')))
     console.log(valueOne)
     let valueTwo= parseFloat(JSON.parse(localStorage.getItem('valueTwo')))
     let operatorParse = JSON.parse(localStorage.getItem('operator'))
     let result =0
     if(operatorParse==='add'){
result= valueOne+valueTwo;
console.log(result)
display.innerHTML=result;

     }else  if(operatorParse==='sub'){
          result= valueOne-valueTwo;
          console.log(result)
          display.innerHTML=result;
          
               }
               else  if(operatorParse==='mul'){
                    result= valueOne*valueTwo;
                    console.log(result)
                    display.innerHTML=result;
                    
                         }else{
                              result= valueOne/valueTwo;
                              console.log(result)
                              display.innerHTML=result;  
                         }
localStorage.removeItem("valueOne")
localStorage.removeItem("valueTwo")
localStorage.removeItem("operator")
localStorage.setItem('valueOne',JSON.stringify(result))

} 

const clearScreen = () => {
     localStorage.removeItem("valueOne")
     localStorage.removeItem("valueTwo")
     localStorage.removeItem("operator")
     display.innerHTML=0;


}

