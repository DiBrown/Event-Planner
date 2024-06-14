import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import "./style.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/AddUser" element={<AddUser/>}/>
          <Route path="/UpdateUser" element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
