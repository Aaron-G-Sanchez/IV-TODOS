import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

const Todos = ({ todos }) => {
  console.log(todos)
  return (
    <>
      <section className="todo-view">
        <div className="todo-wrapper">
          {todos.map((todo, index) => (
            <TodoCard key={index} todo={todo} />
          ))}
          <AddTodo />
        </div>
      </section>
    </>
  )
}

export default Todos
