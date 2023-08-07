import MaterialTable from 'material-table';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { name: 'Minh', email: 'thanhminh@gmail.com', phone: '0945036531', age: 22, gender: 'M', city: 'Phu Yen' },
    { name: 'Nam', email: 'trungnam@gmail.com', phone: '0945036532', age: 23, gender: 'M', city: 'Ho Chi Minh' },
    { name: 'Thien', email: 'dongthien@gmail.com', phone: '0945036533', age: 24, gender: 'M', city: 'Phu Yen' },
    { name: 'My', email: 'hanhmy@gmail.com', phone: '0945036534', age: 25, gender: 'F', city: 'Phu Yen' },
    { name: 'Van', email: 'hongvan@gmail.com', phone: '0945036535', age: 25, gender: 'F', city: 'Phu Yen' },
  ]);

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Phone Number', field: 'phone', align: 'right' },
    { title: 'Age', field: 'age' },
    { title: 'Gender', field: 'gender' },
    { title: 'City', field: 'city' },
  ];

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Material Table</h4>

      <MaterialTable
        title="Student Infomation"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
