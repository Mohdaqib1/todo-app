import React,{ useState, useEffect} from 'react';
//import DeleteTodo from './DeleteTodo'
import Delete from './delete.png';

import Edit from './edit.png';



export default function Todos() {
    const [todos, setTodos] = useState([])

    
    
    const fetchTodos = async () => {
        const response = await fetch("http://localhost:8000/todo")
        const todos = await response.json()
        console.log(todos.data);
        setTodos(todos.data)
    }
  


  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <table className="t1">
                   <tr>
                        <td className='todo-item'> {todos.map((todo)=>(
            
            <p>{todo.todo}
            <button  className="b2e" >   <img src={Edit} className="b2ed"/>  </button> 
                           <button  className="b2d">    <img src={Delete}  className="b2ed"/> 
                            </button> 
                
                </p>
            ))}
                          
                           </td>
                    </tr>
               </table>


        
    </div>
  )
}
 