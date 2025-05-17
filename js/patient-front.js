// js/patient-front.js
const patientTableBody = document.querySelector('#patientTable tbody');
console.log("patient-front.js loaded");

function loadPatients() {
  fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(patients => {
      console.log("Fetched patients:", patients); // <== add this line to check in console
      patientTableBody.innerHTML = '';

      if (patients.length === 0) {
        patientTableBody.innerHTML = '<tr><td colspan="5">No patients found.</td></tr>';
        return;
      }

      patients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${patient.id}</td>
          <td>${patient.name}</td>
          <td>${patient.age}</td>
          <td>${patient.gender}</td>
          <td>${patient.symptoms}</td>
        `;
        patientTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading patients:', error);
      patientTableBody.innerHTML = '<tr><td colspan="5">Error loading patients data.</td></tr>';
    });
}

window.addEventListener('DOMContentLoaded', loadPatients);
