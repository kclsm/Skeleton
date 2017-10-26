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
sem1Description[1]="Credit value: 15."+
"Assessment 75% written examination, 25% coursework "+
"This module covers the state-of-the-art in Artificial Intelligence planning, looking at the theoretical details behind planning; the implementation of planning techniques; and how planning can be used effectively in application."+
"At the end of the course students should: "+
"Be familiar with a range of topics in classical, temporal and numeric planning"+
"Be practised in the use of planning modelling languages such as PDDL"+
"Have practical experience of working with and benchmarking planning algorithm"

sem1Description[2]="Credit value: 15, Assessment: "+
"80% written examination, 20% coursework"+
"Formative assessment: non-assessed problem sheets"+
"This module provides a critical introduction to theories and methods regarding multi-agent computer systems and their component agents, focussing particularly on mechanisms for coordination and agreement between self-interested agents."+
"At the end of the course, students should: "+
"understand what an agent is and why they are a useful technology;"+
"be familiar with a range of methods that can be used to coordinate self-interested agents that are part of a multi-agent system and allow them to reach agreements on things;"+
"have some practical experience of working with agent systems."


sem1Description[3]="This is looooong."
sem1Description[4]=""
sem1Description[5]=""
sem1Description[6]=""
sem1Description[7]=""
sem1Description[8]=""
sem1Description[9]=""
sem1Description[10]=""
sem1Description[11]=""
sem1Description[12]=""
sem1Description[13]=""
sem1Description[14]=""
sem1Description[15]=""
sem1Description[16]=""
sem1Description[17]=""
sem1Description[18]=""
sem1Description[19]=""

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

