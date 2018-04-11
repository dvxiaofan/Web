/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("xiaofan");
 // $("#main").append("xiaoming");

 // var email = "zhyk1023@163.com";
 // var newEmail = email.replace("163", "126");

 // console.log(newEmail);

 // var awesomeThoughts = "My name is xiaofan and I am AWESOME";
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 // $("#main").append(funThoughts);

var name = "张艳坤"
 var formattedName = HTMLheaderName.replace("%data%", name);
 var role = "Web前端开发工程师";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 // $("#header").append(formattedName);
 // $("#header").append(formattedRole);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var skills = ["awesomeness", "programming", "teaching", "JS"];
 // $("#main").append(skills[2]);

 var bio = {
 	"name": "xiaofan",
 	"age": 28,
 	"skills": skills
 };

 $("#main").append(bio.age)

























