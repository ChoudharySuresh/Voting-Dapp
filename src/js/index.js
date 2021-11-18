const inputs = document.querySelectorAll('.input');

function focusfunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurfunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}
inputs.forEach(inputs=>{
    inputs.addEventListener('focus', focusfunc);
    inputs.addEventListener('blur', blurfunc);
});