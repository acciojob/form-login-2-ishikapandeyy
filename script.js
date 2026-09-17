//your JS code here. If required.
let btn=document.getElementById("submit");
let input1=document.getElementById("input");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let input4=document.getElementById("input4");

btn.addEventListener("click",function(){
    let firstName=input1.value;
    let lastName=input2.value;
    let phoneNumber=input3.value;
    let emailId=input4.value;

    alert("First Name: " + firstName + "Last Name: " + lastName + "Phone Number: " + phoneNumber + "Email ID: " + emailId);
});