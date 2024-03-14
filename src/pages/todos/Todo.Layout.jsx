import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./Todo.Slice";

const Todo = () => {
  // const todosArray = useSelector((state) => state.todoSlice.todoStore);
  const dispatch = useDispatch();
  // console.log("Todo Array", todosArray);

  // const handleOnClick = (id) => {
  //   dispatch(deleteTodo(id));
  // };

  // const handleOnClickEdit = (id) => {};
  return (
    <>
      <h1>Todo Layout</h1>
      {/* {todosArray.map((todo) => (
        <div key={todo.id}>
          <li>{todo.title}</li>
          <button onClick={() => handleOnClickEdit(todo.id)}>Edit</button>
          <button onClick={() => handleOnClick(todo.id)}>Delete</button>
        </div>
      ))} */}
    </>
  );
};

export default Todo;
