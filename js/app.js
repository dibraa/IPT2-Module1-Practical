<<<<<<< HEAD
function addSubject() {
	const subjectCode = document.getElementById("subjectCode").value;
	const subjectName = document.getElementById("subjectName").value;
	const units = document.getElementById("units").value;
	const tableContent = document.getElementById("table-content");
	const row = document.createElement("tr");

	[subjectCode, subjectName, units].forEach((subjectInformation) => {
		const cell = document.createElement("td");
		cell.textContent = subjectInformation;
		row.appendChild(cell);
	});

	tableContent.appendChild(row);

	document.getElementById("subjectCode").value = "";
	document.getElementById("subjectName").value = "";
	document.getElementById("units").value = "";
}

document.getElementById("addSubject").addEventListener("click", addSubject);
=======
document.addEventListener('DOMContentLoaded', function () {
	const studentForm = document.getElementById('studentForm');
	const addStudentButton = document.getElementById('addStudentButton');
	const tableContent = document.getElementById('table-content');

	if (!studentForm || !addStudentButton || !tableContent) {
		return;
	}

	addStudentButton.addEventListener('click', function () {
		const idNumber = document.getElementById('idNumber').value.trim();
		const firstName = document.getElementById('firstName').value.trim();
		const middleName = document.getElementById('middleName').value.trim();
		const lastName = document.getElementById('lastName').value.trim();

		if (!idNumber || !firstName || !middleName || !lastName) {
			alert('Please complete all student fields.');
			return;
		}

		const existingIds = Array.from(tableContent.querySelectorAll('tr td:first-child'));
		if (existingIds.some(function (cell) {
			return cell.textContent.trim() === idNumber;
		})) {
			alert('A student with this ID number already exists.');
			return;
		}

		const row = document.createElement('tr');
		[idNumber, firstName, middleName, lastName].forEach(function (value) {
			const cell = document.createElement('td');
			cell.textContent = value;
			row.appendChild(cell);
		});

		tableContent.appendChild(row);
		studentForm.reset();
	});
});
>>>>>>> beb57b572672abba171d239e76aa53bd583368b3
