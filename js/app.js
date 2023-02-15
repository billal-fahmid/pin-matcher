function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4 ){
        return pin;
    }else{
        // console.log('pin not 4 digit ',pin)
        return getPin();
    }
}

function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}

document.getElementById('generate-pin-btn').addEventListener('click' , function(){
    const pin = getPin();

    const showField = document.getElementById('show-field');
    showField.value = pin ;
})

document.getElementById('calulator').addEventListener('click' , function(event){
    const number = event.target.innerText;
    let typedNumberField = document.getElementById('typed-number');
    const priviousTypedNumber = typedNumberField.value ;
    if(isNaN(number)){

        if(number === 'C'){
            typedNumberField.value= '';
        }else if(number === '<'){
            const char = priviousTypedNumber.split('');
            char.pop();
            const remainingChar = char.join('');
            typedNumberField.value = remainingChar;
        }
    }else{
        const newTypedNumber = priviousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click' , function(){
    const showField = document.getElementById('show-field');
    const showFieldValue =parseInt(showField.value);
    
    const typedNumber = document.getElementById('typed-number');
    const typedNumberValue = parseInt(typedNumber.value);
    const showSuccess = document.getElementById('pin-success');
    const showFail =document.getElementById('pin-fail');
    if(showFieldValue === typedNumberValue){
       
        showSuccess.style.display = 'block';
        showFail.style.display = 'none';
    }else{
       
       showFail.style.display = 'block';
       showSuccess.style.display = 'none';
    }
})

