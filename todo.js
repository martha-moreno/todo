function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{todo.text} <a href="#!" data-mdb-toggle="tooltip" title="Remove"> <i class="fas fa-trash-alt" ></i> </a> </div>
}
