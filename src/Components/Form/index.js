import { useState, useEffect } from "react";

const initialFormValues = {taskName:"", isActive:true}; // default değerlerimiz.

function Form({addTodoList, todoList}){
    
    const [formValue, setFormValue] = useState(initialFormValues);

    useEffect(() => {

        setFormValue(initialFormValues);

    }, [todoList])      // listeye yeni veriler eklendiğinde inputu sıfırla.

    
    const onChangeInput = (e) => {

        setFormValue({...formValue, [e.target.name] : e.target.value});

    };  // input içerisinde değişiklik oldukça state'e kaydet.

    const onSubmit = (e) => {

        e.preventDefault();
        
        if (formValue.taskName === "") { // Eğer boş bir değer girilirse fonksiyonu terk et.

            return false;

        }
    

        addTodoList([...todoList, formValue]); // eğer tüm şartlar sağlanırsa TodoList'e ekle.

        

    };

   
 
         
    return (
    

        

        <form onSubmit={onSubmit}>

           <input 
           value={formValue.taskName}
           name="taskName"
           className="new-todo" 
           placeholder="What needs to be done?"
           onChange={onChangeInput}
           autoFocus />
        
          
        </form>

   



    )

}

export default Form;















