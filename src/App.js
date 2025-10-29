import './App.css';
import {Routes,Route} from 'react-router-dom';
import TodoList from './components/TodoList';
import { createTheme,ThemeProvider } from '@mui/material';
import { TodoProvider } from './context/TodoContext';
import { ToastProvider } from './context/ToastContext';
import { TodoReducerProvider } from './context/TodoReducerProvider';
import Todo from './components/Todo';

const theme=createTheme({
  typography:{
    fontFamily:[
      'f'
    ]
  },
});

function App() {

  return (

    <ThemeProvider theme={theme}>
     <div className="App" style={{ 
      display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(7, 45, 134, 1)',
    height:'100vh',
    
    direction:'rtl',
    
    }}>
  <TodoReducerProvider>
  <TodoProvider >
<ToastProvider >
   <Routes>
    <Route path='/' element={<TodoList/>}/>
    <Route path='/Todo' element={<Todo/>}/>
   </Routes>

</ToastProvider>
   </TodoProvider>   
</TodoReducerProvider>
    </div>
   </ThemeProvider>
  );
}

export default App;
