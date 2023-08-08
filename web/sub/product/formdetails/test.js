var cb1 = document.getElementById("cb1"),
    cb2 = document.getElementById("cb2"),
    button = document.getElementById("button");
button.disabled = true;    
cb1.onclick = cb2.onclick = function(){
    if(cb1.checked && cb2.checked){
        button.disabled = false;
    }
    else{
        button.disabled = true;
    }
};