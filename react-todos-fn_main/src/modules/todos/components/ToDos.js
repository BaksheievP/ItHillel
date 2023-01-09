import useTodos from "../hooks/useTodos";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDosList";

function Todos() {
     const { todos, toggleTodo, deleteTodo, createTodo } = useTodos();

     return <div className="container">
          <TodoList todos={todos}
               onToggle={toggleTodo}
               onDelete={deleteTodo} />
          <TodoForm onCreate={createTodo} />
     </div>

}

export default Todos;