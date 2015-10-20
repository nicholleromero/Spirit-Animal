var output = function() {
	var hOne = document.getElementById('textMsg');
	var msg = "Congradulations, " + localStorage.getItem('username') + '<br />' + "We've Found Your Spirit Animal" 
	hOne.innerHTML = msg;
}

output();