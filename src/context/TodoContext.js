import { createContext, useContext, useState } from "react";
import { v4 as idv4 } from 'uuid';
export const TodoContexts=createContext([]);
const initialtodos=[
  {
    id:idv4(),
    title:'قراءة كتاب',
    details:' sdhsjd من الساعة 3 العصر الى المغرب',
    isCompleted:false
  
  },
  {
    id:idv4(),
    title:'قراءة كتاب',
    details:'sss من الساعة 3 العصر الى المغرب',
    isCompleted:false
  
  },
];

export const TodoProvider=({children})=>{
    const [todoses,settodos]=useState(initialtodos); 
     return(
        <>
<TodoContexts.Provider value={{todoses,settodos}}>
    {children}
</TodoContexts.Provider>
        </>
    )
}

export const useTodo=()=>{
    return useContext(TodoContexts);
}