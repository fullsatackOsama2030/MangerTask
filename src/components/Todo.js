import { Card, CardContent,Grid,IconButton,Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditeIcon from '@mui/icons-material/Edit';
import './Style.css';
import { useDispatch, usedispatch } from "../context/TodoReducerProvider";
import { useToast } from "../context/ToastContext";


export default function Todo({Todo,handleupdateClickOpen,handleOpen}) {
const {disptch}=useDispatch();
const {handleClick}=useToast();

  function handlCompletedButton(){
    disptch({type:'changes',payload:{Todo}});
    if(Todo.isCompleted){
      handleClick(' تم الغاء تحديد ان العملية تمت بنجاح ');
    }else{
      handleClick(' تم تحديد ان العملية تمت بنجاح ');
    }

}
  function handleupdateOpen(){
    handleupdateClickOpen(Todo);
  }
  function handleDeleteOpen(){
    handleOpen(Todo);
  }

    return (
       < >
      <Card variant="outlined" className="Card" >
<CardContent >

     <Grid container spacing={1}>
        <Grid size={8}>
      <Typography variant='h5' sx={{ textAlign:'right' }} style={{textDecoration:Todo.isCompleted?'line-through':'' }}>
        {Todo.title}
      </Typography>
      <Typography variant='h6' sx={{ textAlign:'right' }}>
        {Todo.details}
      </Typography>
        </Grid>
        <Grid size={4} display="flex" justifyContent="space-between" alignItems="center" >
        
        {/* CheckIconButton */}
        <IconButton aria-label="check" className={Todo.isCompleted?'checkso':'check'} 
        onClick={()=>{
           handlCompletedButton()
        }}
        >
  <CheckIcon />
</IconButton>
        {/* == CheckIconButton==  */}

        <IconButton aria-label="edit" className="edit" onClick={handleupdateOpen}>
  <EditeIcon />
</IconButton>

 <IconButton aria-label="delete"className="delete" onClick={handleDeleteOpen}>
  <DeleteIcon />
</IconButton>
        </Grid>
      </Grid>

    </CardContent>
      </Card>
       </> 
    );
}
