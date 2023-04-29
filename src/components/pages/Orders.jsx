import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

const Orders = () => {
  const { orders } = useSelector((state) => state.order)

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'user_name', headerName: 'Userame', width: 150 },
    { field: 'product_name', headerName: 'Product name', width: 200 },
    { field: 'address', headerName: 'Address', width: 300 },
    { field: 'tel_number', headerName: 'Tel', width: 150 },
  ];

  return (
    <div style={{ height: '100%' }}>
      <h2 style={{ width: '100%', padding: '0.5rem', fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>All Orders</h2>
      <div style={{ height: 'calc(100% - 2.5rem)' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div >
  )
}

export default Orders