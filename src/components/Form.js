import React, { useState } from "react";

function Form() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // State variable for holding form submission data
  const [submittedData, setSubmittedData] = useState([]);
  // State variable for holding form validation errors
  const [errors, setErrors] = useState([]);

  // Event handlers for input changes
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Form submission handler
  function handleSubmit(event) {
    event.preventDefault();

    // Basic input validation
    if (firstName.trim() === "" || lastName.trim() === "") {
      setErrors(["Both first name and last name are required!"]);
    } else {
      // Clear errors if the inputs are valid
      setErrors([]);

      // Construct form data and update the submittedData state
      const formData = { firstName: firstName, lastName: lastName };
      setSubmittedData([...submittedData, formData]);

      // Clear input fields after submission
      setFirstName("");
      setLastName("");
    }
  }

  // JSX to display form, errors, and submitted data
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error messages */}
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
