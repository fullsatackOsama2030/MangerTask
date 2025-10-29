import { Button, Card, Grid, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// Button Link
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//Component

import Todo from './Todo';
import { useEffect, useState, useMemo } from 'react';
import UpdatePromp from './UpdatePromp';
import DeletePromp from './DeletePromp';
import { useToast } from '../context/ToastContext';
import { useDispatch, useResult } from '../context/TodoReducerProvider';

export default function TodoList() {
  
// const {todoses,settodos}=useTodo();
const [inputtitle,settitleinput]=useState('');
const [typebutton,settype]=useState('all','complated','Notcomplated')
const [openupdate, setupdateOpen] =useState(false);
const {handleClick}=useToast();

// Redeuce
const {todoses}=useResult();
const {disptch}=useDispatch();

const [Dates,setDates]=useState([]);
//== Redeuce ==

function handleupdateClickOpen (Todos) {
setDates(Todos);
setupdateOpen(true);
} 
const handleupdateClickClose = () => setupdateOpen(false);

const [open, setOpen] =useState(false);

function handleOpen(Todos){
  setDates(Todos);
  setOpen(true);
 
} 
const handleClose = () => setOpen(false);

// fiilter Arraies
const isCompletedType= useMemo(()=>{
return todoses.filter((com)=>{
  return com.isCompleted;
})},[todoses]);
const isNotCompletedType= useMemo(()=>{
  return todoses.filter((com)=>{
  return !com.isCompleted;
})
},[todoses]);

function handleChange(e){
settype(e.target.value);
}

let todoRender=todoses;
if(typebutton=='complated'){
todoRender=isCompletedType;
}else if(typebutton=='Notcomplated'){
todoRender=isNotCompletedType;
}else if(typebutton=='all'){
  todoRender=todoses;
}

const todos=todoRender.map((d)=>{
  return <Todo key={d.id} Todo={d}  handleupdateClickOpen={handleupdateClickOpen} handleOpen={handleOpen}/>
 
});




function handlDelete(){
disptch({type:'delete',payload:{Dates}})
handleClose();
handleClick(' تمت عملية الحذف ');
}

function hendlerUpdate(){
disptch({type:'update',payload:{Dates}});
handleupdateClickClose();
handleClick(' تمت عملية التعديل بنجاح ');
}
function handlAdd(){
 disptch({type:'Add',payload:{inputtitle}});
 settitleinput('');
 handleClick(' تمت عملية الاضافة بنجاح ');
}

  useEffect(()=>{

disptch({type:'run'});

  },[]);

  return (
 <>

      <Container  maxWidth="sm">

      <Card variant="outlined">
       
<CardContent style={{ 
        maxHeight:'80vh' ,
       }}>
      <Typography variant='h2' fontWeight={'bold'}>
        مهامي
      </Typography>
       <Divider/>

       {/* FILTER BUTTON */}
<ToggleButtonGroup
style={{ marginTop:'1rem' }}
      color="primary"
        value={typebutton}
      exclusive
        onChange={handleChange}
      aria-label="Platform"
      >
      <ToggleButton  style={{ color:'red',fontWeight:'bold',fontSize:'20px' }} value="all" >الكل</ToggleButton>
      <ToggleButton  style={{ color:'red',fontWeight:'bold',fontSize:'20px' }} value="complated" >المنجزة</ToggleButton>
      <ToggleButton  style={{ color:'red',fontWeight:'bold',fontSize:'20px',borderLeft:'1px solid burlywood' }} value="Notcomplated" >الغير منجزة</ToggleButton>
</ToggleButtonGroup>
   {/* ==== FILTER BUTTON === */}

<div style={{ 
        maxHeight:'50vh' ,
        overflow:'scroll'
       }}>
{todos}

</div>



{/* Inpute + AddButton */}
 <Grid container spacing={1} sx={{ marginTop:'1rem' }}> 
        <Grid size={8}  sx={{ backgroundColor:'black',}}>
          <TextField  label="عنوان المهمة" 
           sx={{backgroundColor:'white',
            width:'100%',
          }}
          value={inputtitle}
          onChange={(event)=>{
            settitleinput(event.target.value)
          }}
           variant="filled" />
        </Grid>
        <Grid size={4}  sx={{ backgroundColor:'blue',}} >
        <Button 
        sx={{width:'100%',
        height:'100%',
        backgroundColor:'rgba(00,95,10,10)',
        fontSize:'20px' }} 
        style={{ color:'white' }}
        variant='contained'
       disabled={inputtitle==''?true:false} onClick={()=>{
          handlAdd();
        }} >
          اضافة</Button>

        </Grid>
   </Grid>

{/* == Inpute + AddButton == */}
    </CardContent>
   
      </Card>
    
    
      </Container>
      
<UpdatePromp  StateOpen={openupdate} Closeprop={handleupdateClickClose}  handlupdate={hendlerUpdate} Todo={Dates} setSates={setDates}/>

<DeletePromp  StateOpen={open} Closeprop={handleClose} handlDelete={handlDelete}/>
  </>
  );
}