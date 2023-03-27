// we use javascript to provide customize error 

const submitBtn= document.getElementById('submitBtn');
const nameError= document.getElementById('nameError');


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();  //preventdefault is inbuilt function to stop automatic submittion of form 
    if(validateName()){
        alert("form is submitted succesfully");
    }

});

function validateName(){
    let name=document.getElementById('name').value; //value is provided as we can acces the value of it and store in name 

    if (name.length==0){
        nameError.innerHTML= "Name is required";
        return false;
    }
    //match is inbult function
    if (name.match( /^[A-Za-z]+$/)){
        nameError.innerHTML="write Full Name";
        return false;
    }
    nameError.innerHTML="";
    return true;

}