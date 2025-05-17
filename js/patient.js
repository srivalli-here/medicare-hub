// patient.js
const form = document.getElementById('patientForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.fullName.value.trim();  // input field named 'fullName'
  const age = form.age.value.trim();
  const gender = form.gender.value;
  const problem = form.symptoms.value.trim();  // frontend uses 'symptoms', backend expects 'problem'

  if (!name || !age || !gender || !problem) {
    message.textContent = 'Please fill all required fields.';
    message.style.color = 'red';
    return;
  }

  const patientData = { name, age, gender, problem };

  fetch('/patient-registration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  })
  .then(res => {
    if (!res.ok) throw new Error('Failed to register patient');
    return res.json();
  })
  .then(data => {
    message.textContent = 'Patient registered successfully!';
    message.style.color = 'green';
    form.reset();
    // Reload patients table after adding new patient
    if (typeof loadPatients === 'function') {
      loadPatients();
    }
  })
  .catch(err => {
    message.textContent = 'Error registering patient.';
    message.style.color = 'red';
    console.error(err);
  });
});
