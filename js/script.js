// Element selectors
const nameField = document.getElementById('name');
const otherJobField = document.getElementById('other-job-role');
const jobRoleField = document.getElementById('title');
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;

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