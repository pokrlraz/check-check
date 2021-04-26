
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
document.getElementById("experience").disabled = true;

})

let custCollection= [];

function formSubmitEvent(){
let name = document.getElementById("custname").value;
let city = document.getElementById("city").value;
let payment= document.getElementById("ordertype").value;
let myUl = document.getElementById("ulist1");

 
if(name.length> 2 && city.length> 2){
    document.getElementById("experience").disabled = false;
    custCollection.push(name+" "+city+" "+payment);
    let array="";
    for(i=0; i<custCollection.length; i++){
        array +=custCollection[i] + "<br>"
       
    }
   
    console.log(array);
    myUl.innerHTML = array
}
else{
    alert("Please enter valid information");
}
 }





