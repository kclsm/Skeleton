var shortcutsem2=document.combowithsem2text
var shortcutsem1=document.combowithsem1text
var shortcutSelectionText=document.selectiontext
var sem1Description=new Array()
var sem2Description=new Array()
var selected=new Array()
var moduleTitlesSem1 = new Array()
var moduleTitlesSem2 = new Array()

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

//Titles of all first semester modules. To be used by table.
moduleTitlesSem1[0] = "Artificial Intelligence"
moduleTitlesSem1[1] = "Artificial Intelligence Planning"
moduleTitlesSem1[2] = "Agents and Multi-Agent Systems"
moduleTitlesSem1[3] = "Compilers and Formal Languages"
moduleTitlesSem1[4] = "Cryptography and Information Security"
moduleTitlesSem1[5] = "Communication Systems"
moduleTitlesSem1[6] = "Computer Vision"
moduleTitlesSem1[7] = "Computer Science Logic"
moduleTitlesSem1[8] = "Electronic Engineering Individual Project"
moduleTitlesSem1[9] = "Group Project"
moduleTitlesSem1[10] = "Electronic Circuits"
moduleTitlesSem1[11] = "Computer Graphics System"
moduleTitelsSem1[12] = "Human-Computer Interaction"
moduleTitelsSem1[13] = "Internet Systems"
moduleTitelsSem1[14] = "Paralell Algorithms"
moduleTitelsSem1[15] = "Individual Project"
moduleTitelsSem1[16] = "Sensors and Actuators"
moduleTitlesSem1[17] = "Software Measurement and Testing"
moduleTitlesSem1[18] = "Formal Verification"
moduleTitlesSem1[19] = "Algorithms for the World Wide Web and Social Networks"

//Titles of all second semester modules. To be used by table.
moduleTitlesSem2[0] = "Biologically Inspired Methods"
moduleTitlesSem2[1] = "Computational Models"
moduleTitlesSem2[2] = "Distributed Systems"
moduleTitlesSem2[3] = "Electronic Engineering Individual Project"
moduleTitlesSem2[4] = "Group Project"
moduleTitlesSem2[5] = "Hardware Design"
moduleTitlesSem2[6] = "Network Security"
moduleTitlesSem2[7] = "Optimisation Methods"
moduleTitlesSem2[8] = "Pattern Recognition"
moduleTitlesSem2[9] = "Individual Project"
moduleTitlesSem2[10] = "Robotic Systems"
moduleTitlesSem2[11] = "Real Time Systems and Control"
moduleTitlesSem2[12] = "Software Architecture and Design"
moduleTitlesSem2[13] = "Software Engineering og Internet Applications"
moduleTitlesSem2[14] = "Text Searching and Processing"

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
	addRowSem2()

}
function addSem1(){
	
	shortcutSelectionText.selectionText.value=sem1Description[shortcutsem1.sem1.selectedIndex]
	addRowSem1()

}


function addRowSem1() {
  var table = document.getElementById("moduleTable");
  var row = table.insertRow(-1);
  var mymodule = row.insertCell(0);
  var lecturer = row.insertCell(1);
  var status = row.insertCell(2);
  var term = row.insertCell(3);
  var credit = row.insertCell(4);
  mymodule.innerHTML = moduleTitlesSem1[selectedIndex];  
  lecturer.innerHTML = "NEW CELL2";
  status.innerHTML = "knk";
  credit.innerHTML = "flkgmg";
  term.innerHTML = "kfmkm";
}

function addRowSem1() {
  var table = document.getElementById("moduleTable");
  var row = table.insertRow(-1);
  var mymodule = row.insertCell(0);
  var lecturer = row.insertCell(1);
  var status = row.insertCell(2);
  var term = row.insertCell(3);
  var credit = row.insertCell(4);
  mymodule.innerHTML = moduleTitlesSem2[selectedIndex];  
  lecturer.innerHTML = "NEW CELL2";
  status.innerHTML = "knk";
  credit.innerHTML = "flkgmg";
  term.innerHTML = "kfmkm";
}

