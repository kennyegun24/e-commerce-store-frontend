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
    { field: 'quantity', headerName: 'Quantity', width: 70 },
    {
      field: 'image', headerName: 'Image',
      renderCell: (params) => (
        <img src={params.value} alt='' style={{ width: 50, borderRadius: 50 }} />
      ),
      sortable: false,
      width: 120
    }
  ];

  return (
    <div style={{ height: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Orders