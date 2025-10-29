import {v4 as idv4} from 'uuid';
export function MangeTodo(current,{type,payload}){
    if(type=='run'){
        const data=JSON.parse(localStorage.getItem('todo'))??[];
         return data;
    }else 
      
        if(type=='Add'){
    const {inputtitle}=payload;
      const AddTodo={
      id:idv4(),
       title:inputtitle,
       details:'',
       isCompleted:false
     };  
   const AddedTodo=[...current,AddTodo];
     localStorage.setItem('todo',JSON.stringify(AddedTodo));
      return AddedTodo;
    }else
         if(type=="update"){
            const {Dates}=payload;
             const DateUpdate=current.map((d)=>{
                if(d.id===Dates.id){
                    return {...d,
                        title:Dates.title,
                        details:Dates.details,
                    };
                    }else{
                              return d;
                        }
                    });
                        localStorage.setItem('todo',JSON.stringify(DateUpdate));
                        return DateUpdate;
                    }
                    else
        if (type=='delete'){
            const {Dates}=payload;
            const Del= current.filter((d)=>{
        return d.id!=Dates.id;
        });
        
        localStorage.setItem('todo',JSON.stringify(Del));
        return Del;
        }else 
            if(type=='changes'){
                let {Todo}=payload;
            const Change=current.map((r)=>{
                if(r.id==Todo.id){
                    const TodoChange= {
                        ...r,isCompleted: !r.isCompleted 
                    };
                    return TodoChange;
            }

                return r;
       
        });
        localStorage.setItem('todo',JSON.stringify(Change));
        return Change;
         }
        else{
            throw Error('Unknowm Action '+type);
        }
 

}