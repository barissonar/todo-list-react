
const clearCompleted = (todoList,setTodoList) => {   // Tamamlanmış tüm görevleri siler.

    const activeItems = todoList.filter(item => item.isActive);  // Sadece isActive olanları al.
    setTodoList(activeItems);       // TodoList'i güncelle

}

function Filter({todoList,setTodoList,setFilter}) {
    
    const clearComp = () => (clearCompleted(todoList, setTodoList)); // Callback function
    
    // setFilter() ile ilgili filtreleme işlemini state'e gönderiyoruz.
    
    return(

        <>

          <ul className="filters">
                  

                  <li>
                      <a onClick={() => setFilter('all')}  href="#/" className="selected">All</a> 
                  </li>
                  
                  <li>
                      <a onClick={() => setFilter('active')}  href="#/">Active</a>
                  </li>
                  
                  <li>
                      <a onClick={() => setFilter('completed')} href="#/">Completed</a>
                  </li>
          
          </ul>

          <button onClick={() => clearComp()} className="clear-completed">
               Clear completed
          </button>

        </>


    )





}

export default Filter;




















