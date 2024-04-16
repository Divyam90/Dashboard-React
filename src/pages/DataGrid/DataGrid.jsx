import React,{useMemo} from 'react'
import './DataGrid.css';
import { MaterialReactTable } from 'material-react-table';
import { userData } from '../../data';
import { createTheme, ThemeProvider } from '@mui/material';

const DataGrid = () => {
    const columns = useMemo(()=>[
        {
          accessorKey:"name.firstName",
          header:"First Name",  
        },
        {
          accessorKey:"name.lastName",
          header:"Last Name",  
        },
        {
          accessorKey:"address",
          header:"Address",  
        },
        {
          accessorKey:"city",
          header:"City",  
        },
        {
          accessorKey:"state",
          header:"State",  
        },
    ])
   
  return (
    <div className="table-container">
      <ThemeProvider theme={createTheme({
        palette:{mode:"dark"}
      })}>
        <MaterialReactTable columns={columns} data={userData}/>
        </ThemeProvider>
    </div>
  )
}

export default DataGrid