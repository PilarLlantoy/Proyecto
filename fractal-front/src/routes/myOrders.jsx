import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export default function MyOrders() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div id="myOrders" style={{ textAlign: 'left', width: '100%'}}> 

      <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
        <div>
          <h1>My Orders</h1>
        </div>
        <div> 
          <Button variant="contained" endIcon={<AddIcon />}>New Order</Button>
        </div>
        
      </div>
          
      <div>  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#1976d2', fontWeight: 'bold'}}>
            <TableRow>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}>ID</TableCell>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}>Order #</TableCell>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}>Date</TableCell>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}># Products</TableCell>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}>Final Price</TableCell>
              <TableCell style={{ backgroundColor: '#1976d2', fontWeight: 'bold', color: 'white'}}>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" endIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button variant="contained" endIcon={<DeleteIcon />}>
                    Delete 
                  </Button> 
                </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      </div>
    </div>
  );
}

