import React, { useState, useEffect } from 'react';
  import { ToastContainer, toast } from 'react-toastify';

function Example() {
  const initialFormData = { firstName: '', lastName: '', email: '', gender: '', hobbies: [], status: '', description: ''};
   

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [tableEntries, setTableEntries] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('tableEntries');
    if (savedData) {
      setTableEntries(JSON.parse(savedData));
    }
  }, []);

   
 

    const handleInputChange = (event) => {
  const { name, value, type, checked } = event.target;

  if (type === 'checkbox') {
    setFormData((prevData) => {
      let updatedHobbies;
      if (checked) {
        updatedHobbies = [...prevData.hobbies, value];
      } else {
        updatedHobbies = prevData.hobbies.filter((hobby) => hobby !== value);
      }
      return { ...prevData, hobbies: updatedHobbies };
    });
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};
      


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required. Yo, bro, you forgot something!';
    
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required. Something fisshy bro you forget your lastName';

    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.gender) errors.gender = 'Gender is required.';
    if (formData.hobbies.length === 0) errors.hobbies = 'Select at least one hobby.';
    if (!formData.status) errors.status = 'Status is required.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
 
    const newEntry = { ...formData, id: tableEntries.length + 1 };
    const updatedEntries = [...tableEntries, newEntry];

    setTableEntries(updatedEntries);
    localStorage.setItem('tableEntries', JSON.stringify(updatedEntries));
    localStorage.setItem('lastFormData', JSON.stringify(formData));

    alert('Bhai data table me  successfully add ho gaya hai...'); 

    // prompt('please double check before going further and if everything sorted click "OK" for submit')

    setFormData(initialFormData);
  };

  const handleLoadData = () => {
    const lastData = localStorage.getItem('lastFormData');
    if (lastData) {
      setFormData(JSON.parse(lastData));
          alert('BE Cautious, Bro data from me aa raha hai..');
       
    } else {
      alert('No saved form data found! bro first add the data');
    }
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <div
        style={{
          maxWidth: '800px',
          marginLeft: '300px',
          justifyContent: 'center',
          padding: '25px',
          borderStyle: 'double',
          boxShadow: '10px 5px 10px 10px',
          borderRadius: '45px',
          background: 'skyblue',
          fontFamily: 'sans-serif',
          marginBottom: '80px',
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy', textDecoration: 'underline' }}>
              First Name
            </label>
            <br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your First Name"
              style={{ width: '100%', padding: '8px' }}
            />
            {formErrors.firstName && (
              <p style={{ color: 'red' }}>{formErrors.firstName}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy', textDecoration: 'underline' }}>
              Last Name
            </label>
            <br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your Last Name"
              style={{ width: '100%', padding: '8px' }}
            />
            {formErrors.lastName && (
              <p style={{ color: 'red' }}>{formErrors.lastName}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy' }}>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              style={{ width: '100%', padding: '8px' }}
            />
            {formErrors.email && (
              <p style={{ color: 'red' }}>{formErrors.email}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px', paddingTop: '20px' }}>
            <label style={{ fontFamily: 'fantasy' }}>Gender</label>
            <br />
            <label>
              <input
              style={{backgroundColor:"red"}}
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              /> Male
            </label>
            <label style={{ marginLeft: '50px' }}>
              <input
                type="radio"
                name="gender"
                style={{backgroundColor:"red"}}
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              /> Female
            </label>
            {formErrors.gender && (
              <p style={{ color: 'red' }}>{formErrors.gender}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy' }}>Hobbies</label>
            <br />
            {['Coding', 'Sports', 'Travelling', 'Playing Piano'].map((hobby) => (
              <label key={hobby} style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  checked={formData.hobbies.includes(hobby)}
                  onChange={handleInputChange}
                /> {hobby}
              </label>
            ))}
            {formErrors.hobbies && (
              <p style={{ color: 'red' }}>{formErrors.hobbies}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy' }}>Status</label>
            <br />
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '8px',
                color: 'black',
                backgroundColor: 'white',
              }}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {formErrors.status && (
              <p style={{ color: 'red' }}>{formErrors.status}</p>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontFamily: 'fantasy' }}>Description</label>
            <br />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write something about yourself..."
              rows={4}
              style={{ width: '100%', padding: '8px' }}
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleLoadData}
              style={{
                padding: '10px 20px',
                backgroundColor: 'darkgreen',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Load
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          maxWidth: '800px',
          marginLeft: '300px',
          marginTop: '20px',
          padding: '20px',
          borderStyle: 'double',
          borderRadius: '45px',
          background: 'skyblue',
          fontFamily: 'sans-serif',
          boxShadow: '10px 10px 5px 10px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'fantasy',
            color: 'red',
            borderStyle:"double" ,

            backgroundColor: "yellow",
            textDecoration: 'underline',
            marginTop: '20px',
            marginBottom: '40px',
          }}
        >
         Your   All   Submmited    Data  Is    Here
        </h2>

        {tableEntries.length > 0 ? (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ background: 'red', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid gray' }}>#</th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  First Name
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Last Name
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Email
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Gender
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Hobbies
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Status
                </th>
                <th style={{ padding: '10px', border: '1px solid gray' }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {tableEntries.map((entry, index) => (
                <tr
                  key={entry.id}
                
                >
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid white',
                      textAlign: 'center',
                    }}
                  >
                    {entry.id}
                  </td>
                  <td
                    style={{ padding: '10px', border: ' lightgray' }}
                  >
                    {entry.firstName}
                  </td>
                  <td
                    style={{ padding: '10px', border: ' lightgray' }}
                  >
                    {entry.lastName}
                  </td>
                  <td
                    style={{ padding: '10px', border: ' lightgray' }}
                  >
                    {entry.email}
                  </td>
                  <td
                    style={{ padding: '10px', border: ' lightgray' }}
                  >
                    {entry.gender}
                  </td>
                  <td
                    style={{ padding: '10px', border: '  lightgray' }}
                  >
                    {entry.hobbies.join(', ')}
                  </td>
                  <td
                    style={{ padding: '10px', border: '  lightgray' }}
                  >
                    {entry.status}
                  </td>
                  <td
                    style={{ padding: '10px', border: ' ightgray' }}
                  >
                    {entry.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', color: 'tomato' }}>
            No data submitted yet please bro submit that data
          </p>
        )}
      </div>
        <ToastContainer />
    </div>

  );
}

export default Example;

