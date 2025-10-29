
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

export default function ToastBy({open,Inof}) {
const style={
  color:'white',
  backgroundColor:'red'
}
  return (
    <div>       
      <Snackbar open={open}>
        <Alert variant='filled' sx={{ width:'auto' }} style={ Inof===' تمت عملية الحذف '?style:'' }>
{Inof}
        </Alert>
      </Snackbar>
    </div>
  );
}
