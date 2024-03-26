//your JS code here. If required.
let count = document.getElementById("counter");
let incre = document.getElementById("incrementBtn");
incre.addEventListener('click', function() {
	 let counterValue = parseInt(counterText.split(':')[1].trim());
	alert('Counter Value:'+ counterValue);
	counterValue++;
	count.textContent = 'Counter Value: ' + counterValue;
})