const onChangeCheckBox = (e,todoList,setTodoList) => { // CheckBox üzerindeki değişiklikler için bir fonksiyon.
        
  const isChecked = e.target.checked;                 // CheckBox durumunu kontrol ediyoruz.
  const liId = e.target.getAttribute('li-change-id');
  const liDOM = document.querySelector(`#item-${liId}`);

  if(isChecked) {   // Eğer CheckBox işaretliyse
 
  liDOM.classList.add('completed');        // completed classını ekle (text üstünü çizer).
  const newArray = [...todoList];                       // mevcut todoList kopyasını oluştur.
  newArray[liId] = {...newArray[liId], isActive:false};    // isActive: false olarak güncelle.
  setTodoList(newArray);                          // Yeni değerleri TodoList'e ekle.

  }

  else {

  liDOM.classList.remove('completed');         // aksi takdirde completed classını remove et.
  const newArray = [...todoList];               
  newArray[liId] = {...newArray[liId], isActive:true};   // isActive: true olarak güncelle.
  setTodoList(newArray);                          // Yeni değerleri TodoList'e ekle.
  
  }

}

const deleteItem = (e,todoList,setTodoList) => {       // todolist item silmek için bir fonksiyon.

  const liId = e.target.getAttribute('li-delete-id');  // ilgili Id'yi al
  const newArray = [...todoList];
  newArray.splice(liId, 1);                          // ilgili Id'yi sil
  setTodoList(newArray);                             // Yeni değerleri TodoList'e ekle.

}



function List({todoList,setTodoList,filter}){
   
     //state'e gönderilen değerlere göre todoList üzerinde filtreleme işlemlerini gerçekleştir.

  const filteredTodos = todoList.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'active') return item.isActive;
    if (filter === 'completed') return !item.isActive;
    return true;
  });


  const onChange = (e) => (onChangeCheckBox(e, todoList, setTodoList));   //callBack function

  const onDelete = (e) => (deleteItem(e, todoList, setTodoList));   //callBack function

   
         
   return (
    <ul className="todo-list">

     

      {
      
      filteredTodos.length > 0 ? // eğer ilgili filtreleme alanında item var ise:

      filteredTodos.map((item, index) => (
            <li id={`item-${index}`} key={index} className={!item.isActive ? 'completed' : ''} >
              <div className="view">
               {filter === "all" ? <input li-change-id={index} onChange={onChange} checked={!item.isActive} className="toggle" type="checkbox"/> : ""}  
                <label>{item.taskName}</label>
               {filter === "all" ? <button li-delete-id={index} onClick={onDelete} className="destroy"></button> : ""}
              </div>
            </li>
          ))
                // eğer item yoksa kullanıcıya bilgi ver.

        : <div className="errorfilter">Bu filtreye uygun ({filter}) bir görev bulunamadı.</div> 
        
        
        }
          
    </ul>
  )
    
}


export default List;


