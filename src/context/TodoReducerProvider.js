import {createContext, useContext, useReducer} from 'react';
import { MangeTodo } from '../redercet/MangeTodo';

const Redeuceresult=createContext({});
const Redeucedispatch=createContext(null);

export const TodoReducerProvider=({children})=>{
const [todoses,disptch]=useReducer(MangeTodo,[]);
return (
<>
<Redeuceresult.Provider value={{todoses}}>
<Redeucedispatch.Provider value={{disptch}}>
    {children}
</Redeucedispatch.Provider>
</Redeuceresult.Provider>
</>
);
}
export const useResult=()=>{
    return useContext(Redeuceresult);
};
export const useDispatch=()=>{
    return useContext(Redeucedispatch);
};