console.log("asfsdaf");

$(document).ready(function(){
	console.log("ready");
	$("#photo").attr("src", localStorage.getItem('photo'));

	$("#name").text( localStorage.getItem('name'));

}); //calls a function after the page is loadeds