const form = document.querySelector('.needs-validation');
let errorMessages = [];

form.addEventListener('submit', (e) => {
	const fname = document.getElementById('fname');
	const lname = document.getElementById('lname');
	const pword = document.getElementById('pword');

	fNameValue = fname.value;
	lNameValue = lname.value;
	pWordValue = pword.value;

	goThroughFName(fNameValue, fname);
	goThroughLName(lNameValue, lname);
	goThroughPWord(pWordValue, pword);

	giveFeedback();

	if(errorMessages.length > 0) {
		e.preventDefault();
	}

});

function goThroughFName(fNameValue, fname) {
	fNameLetters = fNameValue.split('');

	if (fNameLetters.length < 1 || fNameLetters.length > 10) {
		fname.classList.add('invalid');
		fname.parentElement.classList.add('invalid');
		errorMessages.push('First name does not meet criteria.');
	} else {
		fname.classList.add('valid');
	}
}

function goThroughLName(lNameValue, lname) {
	lNameLetters = lNameValue.split('');

	if (lNameLetters.length < 5 || lNameLetters.length > 15) {
		lname.classList.add('invalid');
		lname.parentElement.classList.add('invalid');
		errorMessages.push('Last name does not meet criteria.');
	} else {
		lname.classList.add('valid');
	}
}

function goThroughPWord(pWordValue, pword) {
	pWordCharacters = pWordValue.split('');

	if (pWordCharacters.length < 5 || pWordCharacters.length > 15) {
		pword.classList.add('invalid');
		pword.parentElement.classList.add('invalid');
		errorMessages.push('Password does not meet criteria.');
	} else {
		pword.classList.add('valid');
	}
}

function giveFeedback() {
	for (let i = 0; i < 3; i++) {
		const invalidFeedback = document.querySelectorAll('.invalid-feedback')[i];
		const validFeedback = document.querySelectorAll('.valid-feedback')[i];
		const feedbackRelative = document.querySelectorAll('input')[i];
		const small = document.querySelectorAll('.form-text')[i];
		
		if (feedbackRelative.classList.contains('invalid')) {
			invalidFeedback.style.display = "block";
			invalidFeedback.style.color = "red";
			small.style.display = "none";
		} else {
			validFeedback.style.display = "block";
			validFeedback.style.color = "green";
			small.style.display = "none";
		}
	}
}



	
