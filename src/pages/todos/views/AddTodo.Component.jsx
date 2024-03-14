// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo, editTodo } from "../Todo.Slice";
// import { v4 as uuidv4 } from "uuid";

// const AddTodos = () => {
//   const dispatch = useDispatch();
//   const todosArray = useSelector((state) => state.todoSlice.todoStore);
//   const [todo, setTodo] = useState({
//     title: "",
//   });
//   const [editId, setEditId] = useState();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setTodo({ ...todo, [name]: value });
//   };

//   const onAddTodo = () => {
//     const payload = {
//       ...todo,
//       id: uuidv4(),
//     };
//     dispatch(addTodo(payload));
//     setTodo({ ...todo, title: "" });
//     dispatch(editTodo(payload));
//   };

//   const handleOnClick = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleOnClickEdit = (id) => {
//     const foundItem = todo.find((item) => item.id === id);
//     setTodo(foundItem.title);
//     setEditId(id);
//   };
//   return (
//     <>
//       <input
//         type="text"
//         name="title"
//         value={todo.title}
//         onChange={handleOnChange}
//       />

//       <button onClick={onAddTodo}>{editId ? "Edit" : "Add"}</button>

//       {todosArray.map((todo) => (
//         <div key={todo.id}>
//           <li>{todo.title}</li>
//           <button onClick={() => handleOnClickEdit(todo.id)}>Edit</button>
//           <button onClick={() => handleOnClick(todo.id)}>Delete</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AddTodos;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, deleteAllTodos } from "../Todo.Slice";
import { v4 as uuidv4 } from "uuid";

const AddTodos = () => {
  const dispatch = useDispatch();
  const todosArray = useSelector((state) => state.todoSlice.todoStore);
  const [todo, setTodo] = useState({
    title: "",
  });
  const [editId, setEditId] = useState(null); // Use null for editId

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onAddTodo = () => {
    if (editId !== null) {
      // If editId is not null, it's editing an existing todo
      dispatch(editTodo({ id: editId, updatedTitle: todo.title }));
      setEditId(null); // Reset editId after editing
    } else {
      const payload = {
        ...todo,
        id: uuidv4(),
      };
      dispatch(addTodo(payload));
    }
    setTodo({ ...todo, title: "" });
  };

  const handleOnClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleOnClickEdit = (id) => {
    const foundItem = todosArray.find((item) => item.id === id);
    if (foundItem) {
      setTodo({ title: foundItem.title });
      setEditId(id);
    }
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleOnChange}
      />

      <button onClick={onAddTodo}>{editId !== null ? "Edit" : "Add"}</button>

      <button onClick={() => handleDeleteAll(todosArray)}>Delete All</button>

      {todosArray.map((todo) => (
        <div key={todo.id}>
          <li>{todo.title}</li>
          <button onClick={() => handleOnClickEdit(todo.id)}>Edit</button>
          <button onClick={() => handleOnClick(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default AddTodos;
