


var findtext=document.querySelector("textarea");
count=0;  /*sets count to zero*/



findtext.addEventListener("keydown",function (e) {           /*keydown listener*/

var mySentence= "Kenn and Kevin should give automatically give me two points on this assignment because it's very obvious that I am the best student in the class. If they do not, I will be very upset and they will not be my favorite instructors anymore. -__- ";
e.preventDefault();  /*special function to ignore user input*/
findtext.value+=mySentence[count];
count+=1;

if (count==mySentence.length-1) {
    findtext.value = "";  //blanks out the textarea
    count = 0;  //resets to zero
}
})

var resetbutton=document.querySelector("button");   //reset listener
resetbutton.addEventListener("click",function()
{
findtext.value="";     //blanks out text
count=0;  //sets count to zero

})