/*
* @Author: xiaofan
* @Date:   2018-04-10 19:00:10
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-04-11 11:29:45
*/


var name = "AlbERt EINstEiN";

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
// console.log(nameChanger(name));

















