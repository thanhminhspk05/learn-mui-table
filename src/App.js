import MaterialTable from 'material-table';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      name: 'Minh',
      email: 'thanhminh@gmail.com',
      phone: '0945036531',
      age: null,
      gender: 'M',
      city: 'Phu Yen',
      fee: 100000,
    },
    {
      name: 'Nam',
      email: 'trungnam@gmail.com',
      phone: '0945036532',
      age: 23,
      gender: 'M',
      city: 'Ho Chi Minh',
      fee: 200000,
    },
    {
      name: 'Thien',
      email: 'dongthien@gmail.com',
      phone: '0945036533',
      age: 24,
      gender: 'M',
      city: 'Phu Yen',
      fee: 300000,
    },
    {
      name: 'My',
      email: 'hanhmy.nguyenba@gmail.com',
      phone: '0945036534',
      age: null,
      gender: 'F',
      city: 'Phu Yen',
      fee: 400000,
    },
    {
      name: 'Van',
      email: 'hongvan.nguyen@gmail.com',
      phone: '0945036535',
      age: 22,
      gender: 'F',
      city: 'Phu Yen',
      fee: 500000,
    },
  ]);

  const columns = [
    { title: 'Name', field: 'name', sorting: false, filtering: false },
    { title: 'Email', field: 'email', filterPlaceholder: 'Filter by Email' },
    { title: 'Phone Number', field: 'phone', align: 'right' },
    {
      title: 'Age',
      field: 'age',
      emptyValue: () => (
        <>
          <em>null</em>
        </>
      ),
      defaultSort: 'asc',
      searchable: false,
    },
    { title: 'Gender', field: 'gender', lookup: { M: 'Male', F: 'Female' } },
    { title: 'City', field: 'city' },
    {
      title: 'School Fee',
      field: 'fee',
      type: 'currency',
      currencySetting: { currencyCode: 'VND', minimumFractionDigits: 0 },
    },
  ];

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Material Table</h4>

      <MaterialTable
        title="Student Infomation"
        data={data}
        columns={columns}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: 'left',
          searchAutoFocus: true,
          searchFieldVariant: 'outlined',
          filtering: true,
          paging: true,
          pageSizeOptions: [5, 10, 20, 50],
        }}
      />
    </div>
  );
}

export default App;
