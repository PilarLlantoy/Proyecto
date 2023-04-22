import Button from '@mui/material/Button'; 
import AddIcon from '@mui/icons-material/Add'; 
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AddEditOrder() {

   

  return (
    <div id="myOrders" style={{ textAlign: 'left', width: '100%', backgroundColor: 'green', padding: '20px', borderRadius: '30px'}}> 

      <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
        <div>
          <h1>Nueva Orden</h1>
        </div>
        <div> 
          <Button variant="contained" endIcon={<AddIcon />}>Agregar</Button>
        </div>
        
      </div>
      <div style={{color: 'black', width: '100%'}}> 
        <Stack >
            <TextField id="orderNumber" label="Order #" variant="outlined" />
            <TextField id="date" label="Date" variant="outlined" />
            <TextField id="productsNumber" label="# Products" variant="outlined" />
            <TextField id="finalPrice" label="Final Price" variant="outlined" /> 
        </Stack>
            
    
      </div>
          
    </div>
  );
}

