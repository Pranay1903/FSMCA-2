import { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("lightblue");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: Color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full border-2 text-white" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 rounded-full border-2 text-white" style={{backgroundColor: "Green"}}>Green</button>
            <button onClick={()=>setColor("White")} className="outline-none px-4 py-1 rounded-full border-2 bg-black" style={{backgroundColor: "White"}}>White</button>
            <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full border-2 text-white" style={{backgroundColor: "orange"}}>orange</button>
            <button onClick={()=>setColor("Purple")} className="outline-none px-4 py-1 rounded-full border-2 text-white" style={{backgroundColor: "Purple"}}>Purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
