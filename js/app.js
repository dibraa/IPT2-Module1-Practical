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
