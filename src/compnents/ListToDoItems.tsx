
const ListToDoItems = () => {
  return (
        <div className="grid grid-cols-3 gap-5 p-2">
            <div className="p-2 text-xl">
              Buy me coffe
            </div>
            <div className="p-2 text-xl">
              09/25/2002
            </div>
            <div>
              <button className="px-5 py-3 font-bold text-white bg-red-500 rounded-xl hover:bg-red-700">
                Delete
              </button>
            </div>
        </div>
  )
}

export default ListToDoItems