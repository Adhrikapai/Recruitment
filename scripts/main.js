/* Names: ADHRIKA UDAYLAL PAI & AIMAN TAUSEEF
     Program: Web Development
     FINAL PROJECT */

     /*JAVASCRIPT FOR RECRUITMENT PAGE*/


function validateInfo()
{
    var returnValue=true;

    var firstName= document.getElementById("firstName");
    if (firstName.value==""){
        firstName.style.borderColor="red";
        document.getElementById("validInfo").innerHTML="<h4> Please fill the boxes with red border </h4>";
    }
    else {
        firstName.style.borderColor="white";
        document.getElementById("validInfo").innerHTML="<h4> </h4>";
    }
    var lastName= document.getElementById("lastName");
     if (lastName.value==""){
        lastName.style.borderColor="red";
        document.getElementById("validInfo").innerHTML="<h4> Please fill the boxes with red border </h4>";
    }
    else {
        lastName.style.borderColor="white";
        document.getElementById("validInfo").innerHTML="<h4> </h4>";
      }
    var email= document.getElementById("email");
     if (email.value==""){
        email.style.borderColor="red";
      returnValue= false;
      document.getElementById("validInfo").innerHTML="<h4> Please fill the boxes with red border </h4>";

    }
    else {
        email.style.borderColor="white";
      }
    var expYearNum= document.getElementById("expYearNum");
     if (isNaN(expYearNum.value)){
        expYearNum.style.borderColor="red";
        document.getElementById("validInfo").innerHTML="<h4> Please fill the boxes with red border or/and provide a number for the experiences field </h4>";
        returnValue= false;
      }
      else{
        expYearNum.style.borderColor="white";
      }


    if (returnValue==true)
    DisplayInfo();

    // returnValue=false;
    // return returnValue;

}

function returnRefNum(){
  /* printing the number selected for references */
  var refNum= document.getElementById("refNum").value;
  console.log(refNum);

  var refResult=document.getElementById("refResult").innerHTML= "<p> The selected value is: </p>" + refNum + " reference(s)";
}
 refResult.style.display=inline;

function checkFN(){
  var firstName= document.getElementById("firstName");

  if (firstName.value==""){
      firstName.style.borderColor="red";
  }
  else {
      firstName.style.borderColor="white";
  }
}

function checkLN(){
  var lastName= document.getElementById("lastName");
   if (lastName.value==""){
      lastName.style.borderColor="red";
    returnValue= false;
  }
  else {
      lastName.style.borderColor="white";
    }

}

function checkEM(){
  var email= document.getElementById("email");
   if (email.value==""){
      email.style.borderColor="red";
    returnValue= false;
  }
  else {
      email.style.borderColor="white";
    }

}

function checkEX(){
  var expYearNum= document.getElementById("expYearNum");
   if (isNaN(expYearNum.value)){
      expYearNum.style.borderColor="red";
    returnValue= false; }
    else{
      expYearNum.style.borderColor="white";
    }
}

function DisplayInfo()
{

  var firstName= document.getElementById("firstName").value;
  document.getElementById("demo1").innerHTML = 'First Name: '+firstName;
  var lastName= document.getElementById("lastName").value;
  document.getElementById("demo2").innerHTML = 'Last Name: '+lastName;
  var email= document.getElementById("email").value;
  document.getElementById("demo3").innerHTML = 'Email: '+email;
  var expYearNum= document.getElementById("expYearNum").value;
  document.getElementById("demo4").innerHTML = 'No. of years experienced: '+expYearNum;
  document.getElementById("demo5").innerHTML = 'Everything  looks good :)';
  document.getElementById("demo6").innerHTML = 'Please verify your information and click the submit button to submit all your information:';

document.getElementById("thanks").style.display='block';

return false;
}
