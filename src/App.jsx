
// // import React, { useState } from 'react';
// //  import Example from './components/Example';
// // import Actions from './components/Actions';
// // import ActionTable from './components/ActionTable';


// // function App() {
// //   const [name, setName] = useState('');

// //   return (
// //     <div style={{ alignItems: 'center' }}>
// //       <h2
// //         style={{
// //           textAlign: 'center',
// //           marginLeft: '700px',
// //           marginRight: '50px',
// //           color: 'white',
// //           fontSize: '20px',
// //           borderStyle: 'groove',
// //           backgroundColor: 'red',
// //         }}
// //       >
// //         User Registration Form
// //       </h2>
// //   {/* <Actions name={name} setName={setName} /> */}
    
// //        {/* <Example name={name} setName={setName} /> */}
// //            {/* <ActionTable name={name} setName={setName} /> */}

// //     </div>
// //   );
// // }

// // export default App;






// // import { Routes, Route } from 'react-router-dom';
// // import TablePage from './components/TablePage';

// // import FormPage from './components/FormPage';


// // function App() {
// //   return (
// //     <div style={{ alignItems: 'center' }}>
// //       <h2
// //         style={{
// //           textAlign: 'center',
// //           marginLeft: '700px',
// //           marginRight: '50px',
// //           color: 'white',
// //           position:"relative",
// //           right:"15%",
// //           borderStyle:"dotted",
// //           borderRadius:"8px",
// //           padding:"5px",

// //           fontSize: '20px',
// //           borderStyle: 'groove',
// //           backgroundColor: 'red',
// //         }}
// //       >
// //         User Registration Form
// //       </h2>
// //       <Routes>
// //         <Route path="/" element={<TablePage />} />
// //         <Route path="/form" element={<FormPage />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;




// import { Routes, Route } from 'react-router-dom';
// import TablePage from './components/TablePage';

// import FormPage from './components/FormPage';


// function App() {
//   return (
//     <div style={{ alignItems: 'center' }}>
//       <h2
//         style={{
//           textAlign: 'center',
//           marginLeft: '700px',
//           marginRight: '50px',
//           color: 'white',
//           fontSize: '20px',
//           borderStyle: 'groove',
//           backgroundColor: 'red',
//         }}
//       >
//         User Registration Form
//       </h2>
//       <Routes>
//         <Route path="/" element={<TablePage />} />
//         <Route path="/form" element={<FormPage />} />
//       </Routes>
//     </div>
//   );
// }
// export default App



import { Routes, Route } from 'react-router-dom';
import TablePage from './components/TablePage';
import FormPage from './components/FormPage';

function App() {
  return (
    <div style={{ alignItems: 'center' }}>
      <h2
        style={{
          textAlign: 'center',
          marginLeft: '700px',
          marginRight: '50px',
          color: 'white',
          fontSize: '20px',
          borderStyle: 'groove',
          backgroundColor: 'red',
        }}
      >
        User Registration Form
      </h2>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;





