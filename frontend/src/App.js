import Home from "./components/views/Home";
import Menu from "./components/common/Menu";
import CreateNote from "./components/views/CreateNote";
import EditNote from "./components/views/EditNote";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/createNote" element={<CreateNote />}></Route>
          <Route exact path="/editNote" element={<EditNote />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
