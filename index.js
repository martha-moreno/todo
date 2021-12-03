function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    },
    {
      text: 'Share GitHub link',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list " >
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}   
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
