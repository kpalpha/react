import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UsersList = () => {
  const [columnDefs] = useState([
    { headerName: 'ID', field: 'id', sortable: true},
    { headerName: 'Name', field: 'name', sortable: true},
    { headerName: 'Email', field: 'email', sortable: true}
  ]);

  const [rowData] = useState([
    { id: 1, name: 'kevin', email: 'kevin@gmail.com' },
    { id: 2, name: 'steve', email: 'steve@gmail.com' },
    { id: 3, name: 'rogers', email: 'rogers@gmail.com' },
    { id: 4, name: 'tony', email: 'tony@gmail.com' },
    { id: 5, name: 'stark', email: 'stark@gmail.com' },
    { id: 6, name: 'vechna', email: 'vechna@gmail.com' },
    { id: 7, name: 'hoppper', email: 'hoppper@gmail.com' },
    { id: 8, name: 'mike', email: 'mike@gmail.com' },
    { id: 9, name: 'strange', email: 'strange@gmail.com' },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 350, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};

export default UsersList;
