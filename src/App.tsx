import AddToDoList from "./compnents/AddToDoList"
import ListToDoItems from "./compnents/ListToDoItems"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <div className="container text-center border border-cyan-700">
        <span className="text-3xl font-bold">Todo App</span>
        <AddToDoList />
         <ListToDoItems /> 
      </div>
    </div>
  )
}

export default App
