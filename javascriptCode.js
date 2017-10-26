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

