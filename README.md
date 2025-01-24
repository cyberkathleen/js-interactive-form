# **Interactive Form With Vanilla JS**

This project is an interactive and user-friendly web form designed to demonstrate custom form validation using vanilla JavaScript. The form dynamically provides real-time feedback to users, ensuring a smooth and accessible experience. It also includes features to improve usability, such as enabling/disabling conflicting options and validation error hints.

---

## **Features**

### 1. **Dynamic Field Behavior**
- **Focus Management**: The "Name" field is automatically focused when the page loads, guiding the user to start typing immediately.
- **"Other Job Role" Field**: The "Other Job Role" field dynamically appears when the user selects "Other" from the "Job Role" dropdown menu.

### 2. **Conditional Options**
- **T-Shirt Color Options**:  
  T-shirt color options are enabled only after selecting a T-shirt design. The color dropdown updates to show only colors available for the selected design.

### 3. **Activity Selection with Cost Calculation**
- Users can register for activities, with conflicting activities automatically disabled to prevent scheduling conflicts.
- The total cost updates dynamically as users select or deselect activities.

### 4. **Payment Method Management**
- "Credit Card" is the default payment method, and only the relevant section for the selected method (Credit Card, PayPal, or Bitcoin) is displayed.

### 5. **Custom Validation**
- **Name Field**: Ensures the field is not empty.
- **Email Field**: Checks for a properly formatted email (e.g., `name@domain.com`).
- **Activities Section**: At least one activity must be selected.
- **Credit Card Details** (if selected):
  - Card Number: Must be 13–16 digits.
  - Zip Code: Must be a 5-digit number.
  - CVV: Must be a 3-digit number.

### 6. **Real-Time Validation**
- All required fields listen for user interaction (`keyup`, `change`, etc.) and dynamically provide feedback as the user types or interacts.
- Valid fields display visual confirmation, while invalid fields show error hints.

### 7. **Accessibility Features**
- Activities include focus and blur event listeners to provide visible focus states for keyboard navigation.
- Error messages are clear and concise, ensuring accessibility for screen readers and keyboard-only users.

---

## **Technologies**

- **HTML5**: Semantic markup for the form and its elements.
- **CSS3**: Styling for visual feedback (valid/invalid states, hints, etc.).
- **Vanilla JavaScript**: Custom form validation and interactive features, without relying on external libraries or plugins.