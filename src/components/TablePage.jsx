
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TablePage() {
  const [tableEntries, setTableEntries] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const navigate = useNavigate();

 
 
  useEffect(() => {
    const savedData = localStorage.getItem('tableEntries');
    if (savedData) {
      setTableEntries(JSON.parse(savedData));
    }
  }, []);

  
  
  const handleEdit = (id) => {
    const entry = tableEntries.find((entry) => entry.id === id);
    setEditFormData({ ...entry });
    setEditingRowId(id);
    toast.info('Bhai, row edit mode me hai!');
  };

 
 
    
  
  const handleEditInputChange = (event) => {
    
    //we will do the destrcuting here
    const { name, value, type, checked } = event.target;
   
   
   if (type === 'checkbox') {
      setEditFormData((prevData) => {
        let updatedHobbies;
        if (checked) {
          updatedHobbies = [...prevData.hobbies, value];
        } else {
          updatedHobbies = prevData.hobbies.filter((hobby) => hobby !== value);
        }
        return { ...prevData, hobbies: updatedHobbies };
      });
    } else {
      
      setEditFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

     
  
  //when like jb hum sab kare toh ye chale 
  
    const handleSave = (id) => {
    const updatedEntries = tableEntries.map((entry) =>
      entry.id === id ? { ...editFormData, id } : entry
    );
    setTableEntries(updatedEntries);
    localStorage.setItem('tableEntries', JSON.stringify(updatedEntries));
    setEditingRowId(null);
    setEditFormData(null);
    toast.success('Bhai, row update ho gaya!');
  };

  
  
  //yaha pr cnacle banaya this is for the cancel
  const handleCancel = () => {
    setEditingRowId(null);
    setEditFormData(null);
    toast.info('Bhai, edit cancel ho gaya!');
  };


  const handleDelete = (id) => {
    if (window.confirm('Bhai, sure hai delete karna hai?')) {
      const updatedEntries = tableEntries.filter((entry) => entry.id !== id);
      setTableEntries(updatedEntries);
      localStorage.setItem('tableEntries', JSON.stringify(updatedEntries));
      toast.success('Bhai, row delete ho gaya!');
    }
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        marginLeft: '300px',
        marginTop: '20px',
        padding: '20px',
        borderStyle: 'double',
        borderRadius: '45px',
        background: 'LightSalmon',
        fontFamily: 'sans-serif',
        boxShadow: '10px 10px 5px 10px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontFamily: 'fantasy',
          color: 'red',
          borderStyle: 'double',
          backgroundColor: 'yellow',
          textDecoration: 'underline',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >


      



        Your All Submitted Data Is Here
      </h2>
      <button
        onClick={() => navigate('/form')}
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        
      >
        Add User
      </button>
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
            <tr style={{ background: 'tomato', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid gray' }}>#</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>First Name</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Last Name</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Gender</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Hobbies</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Status</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Description</th>
              <th style={{ padding: '10px', border: '1px solid gray' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry) => (
              <tr key={entry.id}>
                <td style={{ padding: '10px', border: '1px solid white', textAlign: 'center' }}>
                  {entry.id}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editFormData.firstName}
                      onChange={handleEditInputChange}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  ) : (
                    entry.firstName
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={handleEditInputChange}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  ) : (
                    entry.lastName
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditInputChange}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  ) : (
                    entry.email
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        Male
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={editFormData.gender === 'male'}
                          onChange={handleEditInputChange}
                          style={{ backgroundColor: 'red', marginLeft: '5px', cursor: 'pointer' }}
                        />
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        Female
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={editFormData.gender === 'female'}
                          onChange={handleEditInputChange}
                          style={{ backgroundColor: 'red', marginLeft: '5px', cursor: 'pointer' }}
                        />
                      </label>
                    </div>
                  ) : (
                    entry.gender
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <div>
                      {['Coding', 'Sports', 'Travelling', 'Playing Piano'].map((hobby) => (
                        <label key={hobby} style={{ display: 'block' }}>
                          <input
                            type="checkbox"
                            name="hobbies"
                            value={hobby}
                            checked={editFormData.hobbies.includes(hobby)}
                            onChange={handleEditInputChange}
                          /> {hobby}
                        </label>
                      ))}
                    </div>
                  ) : (
                    entry.hobbies.join(', ')
                  )}
                </td>
                <td style={{ padding: 'auto', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <select
                      name="status"
                      value={editFormData.status}
                      onChange={handleEditInputChange}
                      style={{ width: '100%', padding: '5px' }}
                    >
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  ) : (
                    entry.status
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditInputChange}
                      rows={2}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  ) : (
                    entry.description
                  )}
                </td>
                <td style={{ padding: '10px', border: 'lightgray' }}>
                  {editingRowId === entry.id ? (
                    <>
                      <button
                        onClick={() => handleSave(entry.id)}
                        style={{
                          padding: '5px 10px',
                          backgroundColor: 'blue',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          marginRight: '5px',
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        style={{
                          padding: '5px 10px',
                          backgroundColor: 'limegreen',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          marginRight: '5px',
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleEdit(entry.id)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: 'orange',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '5px',
                      }}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(entry.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: 'purple',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: 'tomato' }}>
          No data submitted yet please bro submit that!
        </p>
      )}
      <ToastContainer />
    </div>
  );
}

export default TablePage;
