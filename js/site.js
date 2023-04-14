function getValues() {


	let userMessage = document.getElementById('userMessage').value;

	
	let returnObj = checkPalindrome(userMessage);

	displayMessage(returnObj);
}


function checkPalindrome(userMessage) {

	userMessage = userMessage.toLowerCase();

	let regex = /[^a-z0-9]/gi;

	userMessage = userMessage.replace(regex, "");


	let revMessage = [];
	let returnObj = {};

	for(let index = userMessage.length -1; index >= 0; index = index - 1) {
		
		revMessage += userMessage[index];
	}

	if (revMessage == userMessage ) {

		returnObj.msg = "Good Job, your message is a palindrome"
	}
	else {
		returnObj.msg = "This message is not a palindrome"
	}

	returnObj.reversed = revMessage;

	return returnObj;
}


function displayMessage(returnObj) {

	document.getElementById('alert').innerHTML = returnObj.msg;
	document.getElementById('alert').innerHTML = returnObj.msg;
	document.getElementById('alert').classList.remove('d-none');


}



	// Swal.fire(
	// 	{
	// 		backdrop: false,
	// 		title: 'JS-Rewind',
	// 		text: msg
	// 	}
	// );
