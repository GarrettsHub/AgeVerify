
// // Function to display the age verification overlay
// const showAgeVerification = () => {
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex';
// };

// // Function to handle age verification
// const verifyAge = () => {
//     const ageInput = document.getElementById('ageInput');
//     const age = parseInt(ageInput.value);

//     const accessStatus = document.getElementById('accessStatus');

//     if (age >= 18) {
//         accessStatus.textContent = 'Age verified! Welcome to the website.';
//         accessStatus.style.color = 'green';
//     } else if (age <= 18) {
//         accessStatus.textContent = 'Sorry, you must be 18 or older to access this site.';
//         accessStatus.style.color = 'red';
//     } else {
//         accessStatus.textContent = 'Please enter a proper age';
//         accessStatus.style.color = 'blue';
//     }

//     accessStatus.style.display = 'block';
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
// };

// // Show age verification
// showAgeVerification();

// // Add event listener to the "Verify" button
// const verifyButton = document.getElementById('verifyButton');
// verifyButton.addEventListener('click', verifyAge);
