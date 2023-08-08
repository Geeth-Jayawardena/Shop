var data = [];

function showAndClearField(formRef){
    var resultName = formRef.name.value;
    var resultEmail = formRef.email.value;
    var resultMobile = formRef.mobile.value;
    var resultNumber = formRef.number.value;
    var resultSize = formRef.size.value;
    var checked = document.querySelector('input[name = "agree"]:checked');
    
    if (resultName == ""){
        alert("Please enter Your Full name")
    }else{    
        data.push(resultName);

        if (resultEmail == ""){
            alert("Please enter your email")
        }else{  
            data.push(resultEmail);

            if (resultMobile == ""){
                alert("Please enter valid mobile number")
            }else{
                data.push(resultMobile);

                if (resultNumber == ""){
                    alert("Pleasse enter quentity of product")
                }else{    
                    data.push(resultNumber);

                    if (resultSize == ""){
                        alert("Please enter size of product")
                    }else{
                        data.push(resultSize);

                        if(checked == null){  //Test if something was checked
                            alert('You have to agree. agree terms and conditions ?');
                        }
                        

                    }

                }
            }
        }
       
        

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var number = document.getElementById("number").value;
    var size = document.getElementById("size").value;
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("data", data);
    localStorage.setItem("number", number)
    localStorage.setItem("size", size)
    return false;  
}


    
}

// function passValue(){

//     }




