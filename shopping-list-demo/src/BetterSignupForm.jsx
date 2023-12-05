import { useState } from 'react';
export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return { ...currData, [changeField]: newValue };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          id="firstname"
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          id="lastname"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
