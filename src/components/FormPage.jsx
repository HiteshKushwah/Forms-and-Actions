
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function FormPage() {
//   const initialFormData = {firstName: '',lastName: '', email: '', gender: '', hobbies: [], status: '', description: '',
//   };




//   const [formData, setFormData] = useState(initialFormData);
//   const [formErrors, setFormErrors]   = useState({});


//   const navigate = useNavigate();


//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     if (type === 'checkbox') {
      
      
//       setFormData((prevData) => {
//         let updatedHobbies;
//         if (checked) {
          
//           updatedHobbies = [...prevData.hobbies, value];
//         } else {
//           updatedHobbies = prevData.hobbies.filter((hobby) => hobby !== value);
//         }
//         return { ...prevData, hobbies: updatedHobbies };
//       });
//     } else {
//          setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//      };

//      //for the submit

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     const errors = {};
//     if (!formData.firstName.trim()) errors.firstName = 'First name is required. Yo, bro, you forgot something!';

//     if (!formData.lastName.trim()) errors.lastName = 'Last name is required. Something fisshy bro you forget your lastName';

//     if (!formData.email.trim()) {

//       errors.email = 'Email is required.';
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = 'Please enter a valid email address.';
//     }
    
//     if (!formData.gender) errors.gender = 'Gender is required.';
    
//     if (formData.hobbies.length === 0) errors.hobbies = 'Select at least one hobby.';
//     if (!formData.status) errors.status = 'Status is required.';

    
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     //for after refresh the item and then check
  
//     setFormErrors({});
//     const savedData = localStorage.getItem('tableEntries');
//     const tableEntries = savedData ? JSON.parse(savedData) : [];
//     const newEntry = { ...formData, id: tableEntries.length + 1 };
//     const updatedEntries = [...tableEntries, newEntry];
//     localStorage.setItem('tableEntries', JSON.stringify(updatedEntries));
//     setFormData(initialFormData);
//     toast.success('Bhai data table me successfully add ho gaya!');
//     navigate('/');
//   };



//   return (
//     <div
//       style={{
//         maxWidth: '800px',
//         marginLeft: '300px',
//         justifyContent: 'center',
//         padding: '25px',
//         borderStyle: 'double',
//         boxShadow: '10px 5px 10px 10px',
//         borderRadius: '45px',
//         background: 'LightSalmon',
//         fontFamily: 'sans-serif',
//         marginBottom: '80px',
//       }}
//     >
//       <form onSubmit={handleFormSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy', textDecoration: 'underline' }}>
//             First Name
//           </label>
//           <br />
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             placeholder="Enter your First Name"
//             style={{ width: '100%', padding: '8px' }}
//           />
//           {formErrors.firstName && (
//             <p style={{ color: 'red' }}>{formErrors.firstName}</p>
//           )}
//         </div>

     
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy', textDecoration: 'underline' }}>
//             Last Name
//           </label>
//           <br />
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             placeholder="Enter your Last Name"
//             style={{ width: '100%', padding: '8px' }}
//           />
//           {formErrors.lastName && (
//             <p style={{ color: 'red' }}>{formErrors.lastName}</p>
//           )}
//         </div>

     
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy' }}>Email</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your Email"
//             style={{ width: '100%', padding: '8px' }}
//           />
//           {formErrors.email && (
//             <p style={{ color: 'red' }}>{formErrors.email}</p>
//           )}
//         </div>

    
    
//         <div style={{ marginBottom: '15px', paddingTop: '20px' }}>
//           <label style={{ fontFamily: 'fantasy' }}>Gender</label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={formData.gender === 'male'}
//               onChange={handleInputChange}
//             /> Male
//           </label>
//           <label style={{ marginLeft: '50px' }}>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={formData.gender === 'female'}
//               onChange={handleInputChange}
//             /> Female
//           </label>
//           {formErrors.gender && (
//             <p style={{ color: 'red' }}>{formErrors.gender}</p>
//           )}
//         </div>

    
    
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy' }}>Hobbies</label>
//           <br />
//           {['Coding', 'Sports', 'Travelling', 'Playing Piano'].map((hobby) => (
//             <label key={hobby} style={{ display: 'block' }}>
//               <input
//                 type="checkbox"
//                 name="hobbies"
//                 value={hobby}
//                 checked={formData.hobbies.includes(hobby)}
//                 onChange={handleInputChange}
//               /> {hobby}
//             </label>
//           ))}
//           {formErrors.hobbies && (
//             <p style={{ color: 'red' }}>{formErrors.hobbies}</p>
//           )}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy' }}>Status</label>
//           <br />
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//             style={{
//               width: '100%',
//               padding: '8px',
//               color: 'black',
//               backgroundColor: 'white',
//             }}
//           >
//             <option value="">Select Status</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           {formErrors.status && (
//             <p style={{ color: 'red' }}>{formErrors.status}</p>
//           )}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ fontFamily: 'fantasy' }}>Description</label>
//           <br />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Write something about yourself..."
//             rows={4}
//             style={{ width: '100%', padding: '8px' }}
//           ></textarea>
//         </div>

//         <div style={{ display: 'flex', gap: '15px' }}>
//           <button
//             type="submit"
//             style={{
//               padding: '10px 20px',
//               backgroundColor: 'tomato',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default FormPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormPage() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    hobbies: [],
    status: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

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
    const savedData = localStorage.getItem('tableEntries');
    const tableEntries = savedData ? JSON.parse(savedData) : [];
    // Generate unique ID
    const maxId = tableEntries.length > 0 
      ? Math.max(...tableEntries.map(entry => entry.id)) 
      : 0;
    const newEntry = { ...formData, id: maxId + 1 };
    const updatedEntries = [...tableEntries, newEntry];
    localStorage.setItem('tableEntries', JSON.stringify(updatedEntries));
    setFormData(initialFormData);
    toast.success('Bhai data table me successfully add ho gaya!');
    navigate('/');
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        marginLeft: '300px',
        justifyContent: 'center',
        padding: '25px',
        borderStyle: 'double',
        boxShadow: '10px 5px 10px 10px',
        borderRadius: '45px',
        background: 'LightSalmon',
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
              backgroundColor: 'tomato',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FormPage;