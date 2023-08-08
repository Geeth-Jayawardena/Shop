//Assigning the each of the form feilds to variables.
var name1 = document.getElementById("name1");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var feedback = document.getElementById("feedback");

//Fuction to validate the form and give an alert message if a feild is empty.
function validation() {
    if (name1.value == "") {
        alert("Please Enter Full Name");
    } else if (email.value == "") {
        alert("Please Enter Your Mail");
    } else if (subject.value == "") {
        alert("Please Enter Your Subject");

    } else if (feedback.value == "") {
        alert("Please Enter Discription");
    } else {
        getdetails();
    }
}

//The function to display the form if all the feilds are filled and clicked the submit button.
function getdetails() {
    document.getElementById("formcontainer").style.display = "none";
    document.getElementById("formviwer").style.display = "block";
    document.getElementById("formfoot").style.display = "block";

    document.getElementById("detailviwer").innerHTML = "<div>" + "Name: " + name1.value + "<span></span></div><br>" +
        "<div>" + "Email: " + email.value + "<span></span></div><br>" +
        "<div>" + "Subject: " + subject.value + "<span></span></div><br>" +
        "<div>" + "Details: " + feedback.value + "<span></span></div><br>";
}

//When the edit form button is clicked.
function editForm() {
    document.getElementById("formviwer").style.display = "none";
    document.getElementById("formfoot").style.display = "none";
    document.getElementById("formcontainer").style.display = "block";
}

//When the send button is clicked.
function sendForm() {
    alert("Succesfull!");
    location.reload();
}