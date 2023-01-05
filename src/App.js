
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState ('')
  const [toDoList, setToDoList] = useState(['buy milk', 'go to a movie', 'walk the dog'])

  function handleToDoChange (e) {
    setToDo(e.target.value)
  }

  console.log("====example======")
  let A= 'messi'
  let B= A

  console.log(B)
  B= 'ronaldo'
  console.log(A)
  console.log(B)


  console.log("====arrays======")
  let listA= ['messi', 'Mbappe', 'ronaldo']
  let listB= listA
  listA.push('kane')
  listB.push('modric')
  console.log(listA)
  console.log(listB)
 
 
  console.log("====spread======")
  let listC = [...listA]
  listC.push('griezmann')
  console.log(listA)
  console.log(listC)

  let listD= listA.filter(player => player !== 'ronaldo')
  console.log(listA)
  console.log(listD)


  function AddItem(){
    setToDoList ([...toDoList,toDo])
    console.log(toDoList)
  }
  
  return (
    <div className="App">
      <input value={toDo} onChange = {handleToDoChange}/>
      <p/>
      <button onClick={AddItem}> Add to list </button>
      <h3> List of things to do </h3>
      <ul>
           {toDoList.map(
            toDo => (
              <li> {toDo} </li>
            )
           )
        }
      </ul>

    </div>
  );
}

export default App;
