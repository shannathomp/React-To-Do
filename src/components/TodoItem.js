const TodoItem = (props) => {
    const {taskName, finished, description} = props.todos
return(
    <div>
     <h3>{taskName}</h3>
     <h5>{finished}</h5>
     <p>{description}</p>


   </div>

)
}
export default TodoItem