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

$("#header").prepend(formattedName);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);

