// Element selectors
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const otherJobField = document.getElementById('other-job-role');
const jobRoleField = document.getElementById('title');
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;
const activitiesFieldset = document.getElementById('activities');
const activitiesCheckboxes = activitiesFieldset.querySelectorAll('input[type="checkbox"]');
const activitiesCost = document.getElementById('activities-cost');
const paymentSelect = document.getElementById('payment');
const creditCardSection = document.getElementById('credit-card');
const paypalSection = document.getElementById('paypal');
const bitcoinSection = document.getElementById('bitcoin');
const cardNumberField = document.getElementById('cc-num');
const zipField = document.getElementById('zip');
const cvvField = document.getElementById('cvv');

// Variables
let totalCost = 0;

// Set focus on the "Name" field by default
nameField.focus();

// Hide the "Other Job Role" field by default
otherJobField.style.display = 'none';

// Listen for changes in the "Job Role" dropdown and display/hide the "Other Job Role" field based on the selection
jobRoleField.addEventListener('change', e => {
  if (e.target.value === 'other') {
    otherJobField.style.display = 'block';
  } else {
    otherJobField.style.display = 'none';
  }
});

// Disable the "Color" dropdown by default
colorSelect.disabled = true;

// Listen for changes in the "Design" dropdown and enable the "Color" dropdown with available colors for the selected design
designSelect.addEventListener('change', e => {
  const selectedDesign = e.target.value;
  colorSelect.disabled = false;

  // Loop trough color options and show/hide option based on the selected design
  for (let i = 0; i < colorOptions.length; i++) {
    const colorTheme = colorOptions[i].getAttribute('data-theme');

    if (colorTheme === selectedDesign) {
      colorOptions[i].hidden = false;
      colorOptions[i].disabled = false;
      colorOptions[i].selected = true;
    } else {
      colorOptions[i].hidden = true;
      colorOptions[i].disabled = true;
      colorOptions[i].selected = false;
    }
  }
});

// Add focus/blur event listeners to all activity checkboxes
activitiesCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('focus', e => {
    e.target.parentElement.classList.add('focus');
  });

  checkbox.addEventListener('blur', e => {
    e.target.parentElement.classList.remove('focus');
  });
});

// Listen for changes in the "Register for Activities" fieldset to update the total cost
activitiesFieldset.addEventListener('change', e => {
  const activityTarget = e.target;
  const activityCost = +activityTarget.getAttribute('data-cost');

  // If an activity was checked, add the price to the total, otherwise remove from the total
  if (activityTarget.checked) {
    totalCost += activityCost;
  } else {
    totalCost -= activityCost;
  }

  // Update the total cost displayed
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

// Hide "PayPal" and "Bitcoin" payment sections and select "Credit Card" by default
paypalSection.style.display = 'none';
bitcoinSection.style.display = 'none';
paymentSelect.children[1].selected = true;

// Listen for changes in the "Payment" dropdown and display the selected payment section
paymentSelect.addEventListener('change', e => {
  const selectedPayment = e.target.value;

  creditCardSection.style.display = 'none';
  paypalSection.style.display = 'none';
  bitcoinSection.style.display = 'none';

  if (selectedPayment === 'credit-card') {
    creditCardSection.style.display = 'block';
  } else if (selectedPayment === 'paypal') {
    paypalSection.style.display = 'block';
  } else if (selectedPayment === 'bitcoin') {
    bitcoinSection.style.display = 'block';
  }
});

// Validation functions
function validateName() {
  const name = nameField.value.trim();
  const isValidName = name !== '';
  return isValidName;
}

function validateEmail() {
  const email = emailField.value.trim();
  const isValidEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  return isValidEmail;
}

function validateActivities() {
  let isChecked = false;
  activitiesCheckboxes.forEach(checkbox => {
    if(checkbox.checked) {
      isChecked = true;
    }
  });
  return isChecked;
}

function validateCardNumber() {
  const cardNumber = cardNumberField.value.trim();
  const isValidCardNumber = /^\d{13,16}$/.test(cardNumber);
  return isValidCardNumber;
}

function validateZip() {
  const zip = zipField.value.trim();
  const isValidZip = /^\d{5}$/.test(zip);
  return isValidZip;
}

function validateCVV() {
  const cvv = cvvField.value.trim();
  const isValidCVV = /^\d{3}$/.test(cvv);
  return isValidCVV;
}

// Submit even listener for form validation
form.addEventListener('submit', e => {
  // Validate card if it is selected
  let isValidCreditCard = true;
  if (paymentSelect.value === 'credit-card') {
    isValidCreditCard = validateCardNumber() && validateZip() && validateCVV();
  }

  // Prevent the form from submitting if one or more of the required form fields is invalid
  if (!validateName() || !validateEmail() || !validateActivities() || !isValidCreditCard) {
    e.preventDefault();
  }
});

