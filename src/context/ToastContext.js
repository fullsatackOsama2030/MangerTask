import { createContext, useState,useContext } from "react";
import ToastBy from "../components/ToastBy";

const ToastContext=createContext({});

export const ToastProvider=({children})=>{
      const [open, setPoOpen] = useState(false);
      const [Info,setInfo]=useState();
    function handleClick(e){
    setInfo(e);
    setPoOpen(true);
     setTimeout(()=>{
     setPoOpen(false);
  },2000);};
    
  return (
        <>
        <ToastContext.Provider value={{ handleClick }}>
{children}
<ToastBy open={open} Inof={Info}/>
        </ToastContext.Provider>
        
        </>
    )
};
export const useToast=()=>{
    return useContext(ToastContext);
}
