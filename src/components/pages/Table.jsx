import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
const Table = () => {
    const { products } = useSelector(state => state.store)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Product Name', width: 300 },
        { field: 'price', headerName: 'Price ($)', width: 150 },
        { field: 'in_stock', headerName: 'Quantity Left', width: 150 },

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
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={5}
                checkboxSelection
            />
        </div>
    )
}

export default Table