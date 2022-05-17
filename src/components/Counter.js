// import  { useState } from 'react'

// export const Counter = () => {
//     const [count,setCount] = useState(0)

//     const handleEncrease = ()=>{
//         setCount(count=>count + 1)
//     }
//     const handleDecrease =()=>{
//         setCount(count=>count -1)

//     }

//   return (
//     <div>
//         <h1> Counter with useState</h1>
//         <p>Count:{count}</p>
//         <div>
//             <button type='button' onClick={handleEncrease}>+</button>
//             <button type='button' onClick={handleDecrease}>-</button>
//         </div>
//     </div>
//   )
// }





// import { useReducer } from 'react';
// import { useState } from 'react';
// const initialTodos = [
//   {
//     id: Math.random(),
//     task: 'Learn React',
//     complete: true,
//   },
//   {
//     id: Math.random(),
//     task: 'Learn Firebase',
//     complete: true,
//   },
//   {
//     id: Math.random(),
//     task: 'Learn GraphQL',
//     complete: false,
//   },
// ];

// const filterReducer = (state,action)=>{
//     switch(action.type){
//         case "SHOW_ALL":
//             return "ALL"
//             case "SHOW_COMPLETE":
//             return  "COMPLETE"
//             case "SHOW_INCOMPLETE":
//             return "INCOMPLETE"
//             default:
//                 throw new Error()    
//     }
// }

// export const inputReduce = () => {
//     const [filter,dispatchFilter] = useReducer(filterReducer, "ALL")
//     const[todos,setTodos] = useState(initialTodos)
//     const [task,setTask] = useState("")

//     const handleShowAll = ()=>{
//         dispatchFilter({type:"SHOW_ALL"})
//     }
//     const handleShowComplete= ()=>{
//         dispatchFilter({type:"SHOW_COMPLETE"})
//     }

//     const handleShowIncomplete = ()=>{
//         dispatchFilter({type:"SHOW_INCOMPLETE"})
//     }

//     const filteredTodos = todos.filter(todo=>{
//         if(filter === "ALL"){
//             return true     
//         }
//         if(filter=== "COMPLETE" && todo.complete){
//             return true
//         }

//         if(filter === "INCOMPLETE" && !todo.complete){
//             return true
//         }
//         return false
//     })
//     const handleChangeCheckbox = id=>{
//         setTodos(todos.map(todo=>{
//             if(todo.id ===id){
//                 return{...todo,complete:!todo.complete}
//             }else{
//                 return todo
//             }
//         }))
//     }
//     const handleChangeInput = e=>{
    
//             setTask(e.target.value)
    
//     }
//     const handleSubmit = event=>{
//         if(task){
//             setTodos(todos.concat({id:Math.random(),task,complete:false}))
//             console.log(todos);
//         }
//         setTask("")
//         event.preventDefault()
//     }

//   return (
//     <div>
//         <div>
//             <button type='button' onClick={handleShowAll}>SHOW_ALL</button>
//             <button type='button' onClick={handleShowComplete}>SHOW_COMPLETE</button>
//             <button type='button' onClick={handleShowIncomplete}>SHOW_INCOMPLETE</button>
//         </div>

//         <div>
//             <ul>{filteredTodos.map(todo=>(
//                   <li key={todo.id}>
//                     <label>
//                         <input type='checkbox' checked={todo.complete} onChange={()=>handleChangeCheckbox(todo.id)}/>{todo.task}
//                     </label>
//                 </li>
//             ))}
              
//             </ul>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' value={task} onChange={handleChangeInput} />
//                 <button type='submit'>Add Todo</button>
//             </form>
//         </div>
//     </div>
//   )
// }



