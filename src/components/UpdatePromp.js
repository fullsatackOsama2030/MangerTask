import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function UpdatePromp({StateOpen,Closeprop,handlupdate,Todo,setSates}) {   
  return (

      <Dialog fullWidth open={StateOpen} onClose={Closeprop} sx={{ direction:'rtl' }}>
       
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent>
       
          <form onSubmit={(e)=>{
e.preventDefault();
   handlupdate();
          }

            } id="subscription-form">
           
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="title"
              label="العنوان"
              type="text"
              fullWidth
              variant="standard"
              value={ Todo.title }
              onChange={(event)=>{
            setSates({...Todo,title:event.target.value})
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="detaild"
              name="details"
              label="الوصف"
              type="text"
              fullWidth
              variant="standard"
              value={Todo.details}
              onChange={(event)=>{
              setSates({...Todo,details:event.target.value})
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={Closeprop}>اغلاق</Button>
          <Button type="submit" form="subscription-form">
            تاكيد
          </Button>
        </DialogActions>
      </Dialog>

  );
}
