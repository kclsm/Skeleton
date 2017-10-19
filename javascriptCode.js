//alert ("Hello, world!");
//alert("Alerts are annoying aren't they?");
/*var course, moduleSelected;
var test1= 0;
if (test1<3){
  test1 = 100;
  var text="Final alert I promise! The var test1 is " + test1;
 // alert(text);
}
//I'm at 02:06 on working with operators
*/
var shortcut=document.combowithtext
var descriptions=new Array()

//extend this list if neccessary to accomodate more selections
descriptions[0]="6CCS3AIN- argh!!!!!"
descriptions[1]="Click here for CNN, one of the best sources online to get your news."
descriptions[2]="Click here for Geocities, and receive 10 megs of free web space."
descriptions[3]="This is looooong."


shortcut.text.value=descriptions[shortcut.example.selectedIndex]
function gothere(){
location=shortcut.example.options[shortcut.example.selectedIndex].value
}

function showtext(){
shortcut.text.value=descriptions[shortcut.example.selectedIndex]
}
