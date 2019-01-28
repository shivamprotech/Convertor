document.querySelector('form').addEventListener('submit',function(e) {
	// body...

	document.getElementById('loading').style.display = 'block';
	document.getElementById('result').style.display = 'none';

	setTimeout(calculateResult,2000);

	e.preventDefault();

});

function calculateResult(e) {
	// body...

	const temp = document.getElementById('temp').value;

	const sele = document.getElementById('option').value;

	if (temp === '' || isNaN(temp)) {

		showError('Please Check Your Number');
	}
	else
	{
		if(sele === "Celcious")
		{
			calculateCelcious(temp);
		}
		else
		{	
			calculateFerenite(temp);
		}
	}

	// e.preventDefault();
}

function calculateCelcious(temp) {
	// body...

	const result = temp * 9/5 + 32;

	if (isFinite(result)) {

		document.getElementById('result').style.display = 'block';

		document.getElementById('loading').style.display = 'none';

		document.getElementById('rest').value = result;
	}
	else
	{
		showError("Something is Wrong Please Check Your No");
	}

}

function calculateFerenite(temp) {
	// body...

	const result = (temp - 32 ) / (9/5);

	if (isFinite(result)) {

		document.getElementById('result').style.display = 'block';
		document.getElementById('loading').style.display = 'none';
		document.getElementById('rest').value = result.toFixed(2);
	}
	else
	{
		showError("Something is Wrong Please Check Your No");
	}
}

// Error Function

function showError(msg) {
	// body...

	document.getElementById('result').style.display = 'none';

	document.getElementById('loading').style.display = 'none';

	const form = document.querySelector('.form');

	const form_temp = document.querySelector('#form-temp');

	const errorDiv = document.createElement('div');

	errorDiv.className = 'alert alert-danger';

	errorDiv.appendChild(document.createTextNode(msg));

	form.insertBefore(errorDiv,form_temp);

	setTimeout(clearError,2000);

}

function clearError() {
	// body...

	document.querySelector('.alert').remove();

}