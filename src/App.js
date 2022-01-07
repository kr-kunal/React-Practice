import "./App.css";
import Navbar from "./components/Navbar";
//import FuncComp from "./components/FuncComp";
// import ClassComp from "./components/ClassComp";
// import StateExp from "./components/StateExp"
// import Parent from "./components/Parent";
import ConRender from "./components/ConRender";
// import ListRender from "./components/ListRender";
import FormHandle from "./components/FormHandle";

function App() {
  return ( <div>
      <Navbar />
      {/* <FuncComp name="Kunal"/> */}
      {/* <ClassComp name="Patel" type="Class"/> */}
      {/* <StateExp/> */}
      {/* <Parent/> */}
      <ConRender/>
      {/* <ListRender/> */}
      <FormHandle/>
    </div>
  );
}

export default App;
