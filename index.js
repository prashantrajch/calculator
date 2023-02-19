let screen = document.getElementById('display');
let button = document.querySelectorAll('button');
console.log(button);

button.forEach((elem,ind) => {
    elem.addEventListener('click', () =>{
        let text = elem.innerText;
        if(text == 'X'){
            text = '*';
            screen.value += text;
        }
        else if (text == 'Clear') {
            screen.value = '';
        }
        else if(text == '='){
            screen.value = eval(screen.value);
        }
        else{
            screen.value += text;
        }
        console.log(text);
    })
})