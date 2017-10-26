var shortcutsem2=document.combowithsem2text
var shortcutsem1=document.combowithsem1text
var shortcutSelectionText=document.selectiontext
var sem1Description=new Array()
var sem2Description=new Array()
var selected=new Array()
var moduleTitlesSem1 = new Array()
var moduleTitlesSem2 = new Array()

//extend this list if neccessary to accomodate more selections

sem1Description[0]="Credit value: 15. Some basic knowledge of Logic recommended. Assessment: 80% written examination, 20% coursework.Students successfully completing this module should be able to: "+
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


sem1Description[3]="Credit value: 15, Assessment: 80% written examination, "+
"20% coursework"+
"To explain the techniques behind compilers, lexers and parsers. To introduce the mathematical formalisms ofregular expressions, context-free grammars, and to show their applications to computer languages. To illustrate low level machine languages and compiler techniques. "+
"At the end of this module students will have learned how to use regular " +
"expressions to scrape information from the web, how to design grammars for" +
" parsing languages and how to implement a small interpreter and compiler. Students will be able to implement the central components of a small compiler. Students will also know the theory behind lexing " +
"and parsing so that they can choose an appropriate algorithm for recognising a computer language."


sem1Description[4]="Credit value: 15, Assessment: 100% written examination," +
"To introduce both theoretical and practical aspects of cryptography, authentication and information security."+
"On successful completion of this module you should be able to understand the relevant mathematical techniques associated with cryptography; understand the principles of cryptographic techniques and perform implementations of selected algorithms in this area; appreciate the application of security techniques in solving real-life security problems in practical systems."

	
sem1Description[5]="Credit value: 15 "+
"Assessment: 70% written examination, 30% coursework (quiz) "
+"To introduce the fundamental concepts of digital communication systems,"
+ "including data modulation and demodulation, discrete data detection,"+
"constellations, passband system analysis, intersymbol interference analysis and" +
" equalization concept."
	
	
sem1Description[6]="Credit value: 15. Assessment: "+
"65% written examination, 35% coursework "+
"Computer Vision is concerned with the automatic interpretation and analysis of images. The goal is to enable computers to understand visual information in a similar way to humans. Such an ability is fundamental for solving many problems in areas such as industrial inspection, medical image analysis, robot navigation, biometrics, surveillance and security. This module aims to provide a comprehensive introduction to the subject, covering the basic concepts, methodologies and tools of image analysis and interpretation. This module will also explore the biological visual system, which has solved the problem of vision far better than contemporary computer vision systems. This will highlight the limitations of computer vision and suggest approaches for building improved, biologically-inspired, vision systems."
	
	
sem1Description[7]="Credit value: 15. Assessment: 100% written examination, "+
"This module intends to show the importance of formal, logical modelling in the " +
"development of hardware and software systems. The module introduces various " +
"logical formalisms and shows how they can be used as specification, design " +
"and vertification tools in Computer Science and IT. The module presents also " +
"formalisms for knowledge representation and reasoning used in AI systems."
	
	
sem1Description[8]="Credit value: 30, Assessment: 100% final report. " +
		"Attendance at an oral presentation is also"
+"compulsory for passing the module. The oral presentation will be pass/fail and" +
		" have a qualifying mark of pass. Formative assessment: four project" +
		" reports and one project background and specification report"
	
	
sem1Description[9]="Credit value: 30," +
"Assessment: " +
"20% individual report " +
"30% group report" +
"10% oral presentation" +
"10% group mid-year report" +
"15% individual viva voce" +
"15% group progress report-multiple"

sem1Description[10]="Credit value: 15, Assessment: 70% written examination (3 hours) " +
		"30% coursework (quiz and homework)"
	
sem1Description[11]="Credit value: 15, Assessment: 100% written examination"
	
sem1Description[12]="Credit value: 15, Assessment:" +
		"85% written examination " +
		"15% coursework"
		
sem1Description[13]="Credit value: 15, Assessment:" +
		"80% written examination " +
		"20% coursework"
		
sem1Description[14]="Credit value: 15, Assessment: 100% written examination"
	
sem1Description[15]="Credit value: 30," +
		"Assessment: 100% final report. Attendance at an oral presentation is " +
		"compulsory for passing the module ." +
		"Formative assessment: four project reports and one project background " +
		"and specification report"
		
sem1Description[16]="Credit value: 15, Assessment: " +
		"65% written examination, 3 hours " +
		"35% coursework (2 reports, approximately 7 pages each)"
	
sem1Description[17]="Credit value: 15, Assessment: 100% written examination"
	
	
sem1Description[18]="Credit value: 15, Assessment: 75% examination; 25% coursework"
sem1Description[19]="Credit value: 15, Assessment: 100% written examination"

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

