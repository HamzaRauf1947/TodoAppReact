// import { useState } from "react";
// import "./App.css";

// function App() {

//   const [items, setItems] = useState([]);
//   const [newItem, setnewItem] = useState();

//   const display = () => {
//     setItems([...items,newItem]);
    
//   };

//   console.log(items);
//   console.log("newitem" ,newItem);
  
  

//   const deleteAll = () => {
//     setItems([])
//   };

//   const editData = (idx) => 
//     {
//       let pr = prompt("Edit the value");
//       // if (pr=="" ){
//       //   alert("You are entering nothing kindly enter some value")
//       //     pr =  prompt("Edit the value");
//       // }

//       if (pr === null || pr.trim() === "") return;
//       const editValue = items.map((val,i)=>{
//         if(i==idx){
//          return pr
         
//         }

//         return val;

//       })
//       setItems(editValue)



//     };

//   const delData = (idx) => {
//     console.log("index ", idx);
//     const updateItem = items.filter((val,i)=>i!==idx);
//     setItems(updateItem);

    
//   };
//   return (
//     <>
//       <div className="flex justify-center">
//         <div className="w-full max-w-4xl">
//           <h1 className="text-4xl mb-8 text-center">Todo App</h1>
//           <div className="flex gap-1">
//             <input
//               className="border-2 p-2 w-full"
//               type="text"
//               placeholder="Enter your task"
              
//               onChange={(e) => setnewItem(e.target.value)}
//             />
//             <button
//               className="p-[4px_8px] cursor-pointer rounded-[4px] bg-blue-600 text-white "
//               onClick={display}
//             >
//               Add
//             </button>
//             <button
//               className="p-[4px_16px] cursor-pointer rounded-[4px] bg-red-600 text-white "
//               onClick={deleteAll}
//             >
//               Del All
//             </button>
//           </div>



//        {items.map((item,idx)=>{
//            return(
//             <div key={idx}>Task : {item}
//            <button
//              className="p-[4px_8px] cursor-pointer rounded-[4px] bg-green-600 text-white "
//              onClick={()=>editData(idx)}
//            >
          
            
//              Edit
//            </button>
//            <button
//              className="p-[4px_8px] cursor-pointer rounded-[4px] bg-red-600 text-white "
//              onClick={()=>delData(idx)}
//            >
//              Del
//            </button>
 
//            </div>
//            )

//        })}
         
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;






































import { useState } from "react";
import "./App.css";
import { IoMdAdd } from "react-icons/io";
import { MdClear } from "react-icons/md";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const display = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteAll = () => {
    setItems([]);
  };

  const editData = (idx) => {
    const pr = prompt("Edit the value", items[idx]);
    if (pr === null || pr.trim() === "") return;
    const editValue = items.map((val, i) => (i === idx ? pr : val));
    setItems(editValue);
  };

  const delData = (idx) => {
    const updateItem = items.filter((val, i) => i !== idx);
    setItems(updateItem);
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-4">
          <h1 className="text-4xl mb-8 text-center font-bold text-blue-600 animate-bounce">
            Todo App
          </h1>
          
          <div className="flex gap-2 mb-6 md:flex-row flex-col">
            <input
              className="input-transition border-2 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="text"
              placeholder="Enter your task"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && display()}
            />
            
           <div className="grid grid-cols-2 gap-1"> 
           <button
              className="button-transition p-2 px-4 rounded-lg cursor-pointer bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 "
              onClick={display}
            >
              Add
          

            </button>
            
            <button
              className="button-transition p-2 px-4 rounded-lg  cursor-pointer bg-red-600 text-white hover:bg-red-700 hover:scale-105"
              onClick={deleteAll}
            >
              Delete All
            </button>
           </div>
          </div>

          <div className="space-y-2">
          {items.map((item, idx) => (
  <div 
    key={idx}
    className="todo-item bg-white md:p-1 rounded-lg shadow-md md:flex justify-between items-center gap-4"
  >
    <span className="text-gray-700 font-medium break-words min-w-0 flex-1">
      {item}
    </span>
    
    <div className="space-x-2 flex mt-2 ">
      <button
        className="button-transition p-2 px-4 rounded-lg w-[50%] cursor-pointer bg-green-600 text-white hover:bg-green-700 hover:scale-105"
        onClick={() => editData(idx)}
      >
        Edit
      </button>
      <button
        className="button-transition p-2 px-4 rounded-lg w-[50%] cursor-pointer bg-red-600 text-white hover:bg-red-700 hover:scale-105"
        onClick={() => delData(idx)}
      >
        Delete
      </button>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
