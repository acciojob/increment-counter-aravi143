//your JS code here. If required.
let count = document.getElementById("counter");
let incre = document.getElementById("incrementBtn");
incre.addEventListener('click', function() {
	let counterValue = parseInt(count.textContent);
	alert('Counter Value:' + counterValue);
	counterValue++;
	count.textContent = counterValue;
})