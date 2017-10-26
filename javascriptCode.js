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
var shortcutsem2=document.combowithsem2text
var shortcutsem1=document.combowithsem1text
var shortcutSelectionText=document.selectiontext
var sem1Description=new Array()
var sem2Description=new Array()
var selected=new Array()


//extend this list if neccessary to accomodate more selections

sem1Description[0]="6CCS3AIN- Credit value: 15. Some basic knowledge of Logic recommended. Assessment: 80% written examination, 20% coursework.Students successfully completing this module should be able to: "+
"Demonstrate a sound knowledge and understanding of advanced techniques in artificial intelligence."
+"Judiciously apply these techniques to a range of subject-specific problems"
+"Implement these techniques in computer software."
sem1Description[1]="second module clicked"
sem1Description[2]="Click here for Geocities, and receive 10 megs of free web space."
sem1Description[3]="This is looooong."


sem2Description[0]="test worked?"
sem2Description[1]="yes?"	

shortcutsem2.sem2text.value=sem2Description[shortcutsem2.sem2.selectedIndex]
shortcutsem1.sem1text.value=sem1Description[shortcutsem1.sem1.selectedIndex]

function gothere(){
location=shortcutsem2.sem2.options[shortcutsem2.sem2.selectedIndex].value
location=shortcutsem1.sem1.options[shortcutsem1.sem1.selectedIndex].value
}

function showtext(){

	shortcutsem2.sem2text.value=sem2Description[shortcutsem2.sem2.selectedIndex]
	shortcutsem1.sem1text.value=sem1Description[shortcutsem1.sem1.selectedIndex]

}

function addSem2(){
	
	shortcutSelectionText.selectionText.value= sem2Description[shortcutsem2.sem2.selectedIndex]
	addRow()

}
function addSem1(){
	
	shortcutSelectionText.selectionText.value=sem1Description[shortcutsem1.sem1.selectedIndex]
	addRow()

}

function addRow() {
  var table = document.getElementById("moduleTable");
  var row = table.insertRow(-1);
  var mymodule = row.insertCell(0);
  var lecturer = row.insertCell(1);
  var status = row.insertCell(2);
  var term = row.insertCell(3);
  var credit = row.insertCell(4);
  mymodule.innerHTML = "NEW CELL1";  
  lecturer.innerHTML = "NEW CELL2";
  status.innerHTML = "knk";
  credit.innerHTML = "flkgmg";
  term.innerHTML = "kfmkm";
}

