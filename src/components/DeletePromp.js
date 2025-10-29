import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';


export default function DeletePromp({StateOpen,Closeprop,handlDelete}){

  const style = {
  position: 'absolute',
  direction:'rtl',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  return (
    <>
     <Modal
        open={StateOpen}
        onClose={Closeprop}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2,fontWeight:'bold'}} variant="h5">
  هل انت متاكد من رغبتك في حذف هذا المهمة
  </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1,color:'red', fontWeight:'bold' }} variant="h6">
لايمكنك التراجع بعد الحذف 
  </Typography>
 
<Box style={{ textAlign:'left' }}>
    <IconButton style={{color:"rgba(209, 31, 31, 1)", fontWeight:'bold',fontSize:'18px' }}  onClick={Closeprop}>
    اغلاق
  </IconButton>
   <IconButton style={{color:"rgba(209, 31, 31, 1)", fontWeight:'bold',fontSize:'18px' }}    onClick={handlDelete}>
    نعم قم بالحذف
  </IconButton>
</Box>
        </Box>

</Modal>

</>
  );
}