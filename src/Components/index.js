import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Filter from "./Filter";



function TodoList(){
    
    // statelerimizi birçok component üzerinde kullandığımız için burada topluyoruz.

    const [todoList, setTodoList] = useState([]); 
    const [filter, setFilter] = useState('all');  // default olarak "all"
    const [activeCounter, setActiveCounter] = useState();

    useEffect(() => {
       console.log("ToDoList",todoList);
       const activeItems = todoList.filter(item => item.isActive);
       setActiveCounter(activeItems.length);            // counter üzerinde aktif itemleri göstermek için.
    }, [todoList]);    // todoList güncellendiğinde bu kodlar çalışsın.

    useEffect(() => {
      setActiveCounter(0);
   }, []);    

    return (

        <section className="todoapp">

	       <header className="header">    
		      <h1>todos</h1>
              <Form addTodoList = {setTodoList} todoList = {todoList}/>
           </header>

           <section className="main">
              <input className="toggle-all" 
              type="checkbox" />

              <label htmlFor="toggle-all">
                Mark all as Complete
              </label>

              <List todoList = {todoList} setTodoList={setTodoList} filter={filter}/>
            </section>    

        <footer className="footer">
		    <span className="todo-count">
			   <strong>{activeCounter}</strong>
			   <span className="counter">items Active</span>
		    </span>

			<Filter todoList ={todoList} setTodoList ={setTodoList} setFilter={setFilter}/>

		    
	    </footer>

</section>



       

            
           

            
            

     
       
    )
}

export default TodoList;
