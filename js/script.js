// Element selectors
const nameField = document.getElementById('name');
const otherJobField = document.getElementById('other-job-role');
const jobRoleField = document.getElementById('title');
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;
const activitiesFieldset = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
const paymentSelect = document.getElementById('payment');
const paymentOptions = paymentSelect.children;
const creditCardSection = document.getElementById('credit-card');
const paypalSection = document.getElementById('paypal');
const bitcoinSection = document.getElementById('bitcoin');

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