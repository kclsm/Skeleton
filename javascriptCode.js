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
var shortcut2=document.combowithsem1text
var descriptions=new Array()

//extend this list if neccessary to accomodate more selections
descriptions[0]="6CCS3AIN- argh!!!!!"
descriptions[1]="second module clicked"
descriptions[2]="Click here for Geocities, and receive 10 megs of free web space."
descriptions[3]="This is looooong."

	var descriptions2=new Array()
descriptions2[0]="test worked?"
descriptions2[1]="yes?"	

shortcut.text.value=descriptions[shortcut.example.selectedIndex]
shortcut2.sem1text.value=descriptions2[shortcut.sem1.selectedIndex]
function gothere(){
location=shortcut.example.options[shortcut.example.selectedIndex].value
location=shortcut2.sem1.options[shortcut2.sem1.selectedIndex].value
}

function showtext(){
shortcut.text.value=descriptions[shortcut.example.selectedIndex]
shortcut2.sem1text.value=descriptions2[shortcut2.sem1.selectedIndex]
}
