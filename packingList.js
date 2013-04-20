/**
 * Visual Frame Works
 * Web App Part 2 JavaScript
 * 1304
 * @author Louise Whitney 
 * */

window.addEventListener("DOMContentLoaded", function(){
	

//Variables
var fname = document.getElementById("firstname");
var createpwd = document.getElementById("pwd");
var radio = document.getElementById("sex");
var trips = document.getElementById("numTrips");
var checkbox = document.getElementById("myForm").travel;
var date = document.getElementById("travel");



var captureInfo = function(){
	localStorage.setItem("First name", fname.value);
};

var getInfo = funciton(){
	var fnameKey = localStorage.key("First Name");
	var fnameValue = localStorage.getItem(fnameKey);
	fname.value = fnameValue;
};

var captureInfo = function(){
	localStorage.setItem("Password", createpwd.value);
};

var getInfo = funciton(){
	var createpwdKey = localStorage.key("Password");
	var creatpwdValue = localStorage.getItem(createpwdKey);
	createpwd.value = createpwdValue;
};



//EventListeners
fname.addEventListener("blur", captureInfo);
createpwd.addEventListener("blur", captureInfo);


	
	
	

getInfo ();	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
