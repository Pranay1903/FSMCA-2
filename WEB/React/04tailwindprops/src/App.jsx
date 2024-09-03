import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj ={
    class:"SSMCA",
    age:21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black font-bold underline p-5 rounded-xl mb-5">
        Hello world!
      </h1>
      <Card myname="nistha" myarr={myObj} btntxt="Click here" />
      <Card myname="patel"btntxt="visit here"/>
    </>
  );
}

export default App;
