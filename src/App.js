import GetAppIcon from '@material-ui/icons/GetApp';
import MaterialTable from 'material-table';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([
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
    {
      name: 'Trinh',
      email: 'ngoctrinh.le@gmail.com',
      phone: '09450012324',
      age: 12,
      gender: 'F',
      city: 'Phu Yen',
      fee: 600000,
    },
  ]);

  const columns = [
    { title: 'Name', field: 'name', sorting: false, filtering: false },
    { title: 'Email', field: 'email', filterPlaceholder: 'Filter by Email' },
    { title: 'Phone Number', field: 'phone', align: 'right', grouping: false },
    {
      title: 'Age',
      field: 'age',
      align: 'center',
      emptyValue: () => (
        <>
          <em>null</em>
        </>
      ),
      defaultSort: 'asc',
      searchable: false,
      export: false, // don't export this column
      // defaultGroupOrder: 1, // group 0, then group 1 || Gender -> Age
      render: (rowData) => <div style={{ backgroundColor: rowData.age >= 18 ? 'Green' : 'Red' }}>{rowData.age}</div>,
    },
    {
      title: 'Gender',
      field: 'gender',
      lookup: { M: 'Male', F: 'Female' },
      // defaultGroupOrder: 0
    },
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
        data={tableData}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData((prevData) => [...prevData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow; // oldRow.tableData.id: index of row on table
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (seletedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(seletedRow.tableData.id, 1); // cut 1 element from index === delete
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: 'Click me',
            onClick: (e, data) => console.log(data),
            isFreeAction: true, // positon on top, near add button, default in row table
          },
        ]}
        onSelectionChange={(selectedRow) => console.log(selectedRow)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: 'right', // left
          searchAutoFocus: true,
          searchFieldVariant: 'standard', // filled, outlined
          // filtering: true,
          paging: true,
          pageSizeOptions: [5, 10, 20, 50],
          pageSize: 5, // pageSize default
          paginationType: 'normal', // stepped
          showFirstLastPageButtons: false, // |< and >| button
          paginationPosition: 'bottom', // top, bottom, both
          exportButton: true, // default false
          exportAllData: true, // default export only current page
          exportFileName: 'TableData', // set filename default
          addRowPosition: 'first', // position on new row when click add button
          actionsColumnIndex: -1, // save button position: last
          selection: true, // show select on row
          showSelectAllCheckbox: false, // hide select all checkbox button
          showTextRowsSelected: false, // hide pink notify select ... rows
          selectionProps: (rowData) => ({
            disabled: rowData.age === null, // disabled if age === null
            // color: 'primary',
          }),
          grouping: true, // group and drag header to box to group
          columnsButton: true, // checkbox show or hide columns
          rowStyle: (data, index) =>
            index % 2 === 0
              ? {
                  background: '#f5f5f5',
                }
              : null,
          headerStyle: {
            background: 'green',
            fontStyle: 'italic',
          },
        }}
      />
    </div>
  );
}

export default App;
