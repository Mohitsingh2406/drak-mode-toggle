const inputEl = document.querySelector('.input'); 
const bodyEl = document.querySelector("body");

inputEl.checked = false;
updatebody();

function updatebody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = 'black';
    }
    else{
        bodyEl.style.backgroundColor = 'white';
    }
}

inputEl.addEventListener("input",()=>{
    updatebody();
});