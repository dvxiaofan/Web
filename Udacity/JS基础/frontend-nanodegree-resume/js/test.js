/*
* @Author: xiaofan
* @Date:   2018-04-10 19:00:10
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-12 10:24:51
*/


// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
    
//     // Don't delete this line!
//     return finalName;
// };

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));



// var work = {};
// work.position = "wuhan";
// work.years = "two";

// var education = {};
// education["name"] = "HeNanGongMao";
// education["years"] = "2009--2012";


// $("#main").append(work["position"]);
// $("#main").append(education.name);


// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = "red";
// const two = "green";
// const three = "blue";

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors)
// console.log("helllo")

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// for (let day of days) {
// 	day = day.slice(0,1).toUpperCase() + day.slice(1);

// 	console.log(day);
// }


// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];

// const produce = [...fruits, ...vegetables];

// console.log(produce);


function average(...nums) {
	let total = 0;
    for(const num of nums) {
    	total += num;
    }
    if (nums.length == 0) {
    	return 0;
    }
    return (total/nums.length);
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());














