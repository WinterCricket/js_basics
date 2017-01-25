/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Harry O. Davis, BFA, MFA");

 //[string].replace([old], [new])

 
 //var awesomeThoughts = "I am Dagwood Bumstead and I am AWESOME!";
// console.log(awesomeThoughts);

 //var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 //console.log(funThoughts);

//$("#main").append(funThoughts);

var name = "Harry Davis"
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

var biopic = "images/me.jpg"
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);

var skills = [" LAMP Stack Web Development", " Python"];
var formattedSkillsStart = HTMLskillsStart.replace("%data%", skills);

var welcome = "Let's build a website!"
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);

 //var github = "boothbee"
 //var formattedGithub = HTMLgithub.replace("%data%", github );




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$(".welcome-message").prepend(formattedWelcome);
$("#skills-h3").prepend(formattedSkillsStart);
$(".biopic").append(formattedBiopic);
//$(".flex-item")append(formattedGithub);


//var s = "audacity";


//var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
   //s = s.replace("au", "U");
    
   // return s;

//};

// Did your code work? The line below will tell you!
//console.log(udacityizer(s));*/



//$("#main").append(skills);

/*var bio = {
	"name" : name,
	"role" : role
	"contacts" : {
		"github" : "me.githup",
		"e-mail" : "dagwood@mit.edu",
		"location": "World Wide"
		},
	"welcomeMessage" : "Let's Build a Website!",
	"skills" : ["LAMP Full Stack Dev, Python, Writer"],
	"biopic" : "images/me.jpg" 
}

//$("#main").prepend(bio.welcomeMessage);
//$("#main").prepend(bio.biopic);
//$("#main").prepend(bio.role);
//$("#main").prepend(bio.name);
//$("#main").append(bio.skills);
//$("#main").append(bio.contacts);*/



/*var sampleArray = [0, 0, 7];

var incrementLastArrayElement = function(_x) {
	console.log(_x);
    var newArray = [];
    newArray = _x.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
};
console.log(incrementLastArrayElement(sampleArray));*/

/*var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

var work = {
	"name" : name
};

/*$("#main").append(work.name);

work.salary = "almost high";
 
$("#main").append(work.salary);

var house = {
	"name" : "Winstone"
};

$("#main").append(house.name);

house["floor"] = "Seven";

$("#main").append(house["floor"]);*/

 
 