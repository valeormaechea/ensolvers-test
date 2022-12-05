import Home from "./components/views/Home";
import Menu from "./components/common/Menu";
import CreateNote from "./components/views/CreateNote";
import EditNote from "./components/views/EditNote";
import Archive from "./components/views/Archive";
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
          <Route exact path="/api/newNote" element={<CreateNote />}></Route>
          <Route exact path="/api/archive" element={<Archive />}></Route>
          <Route exact path="/api/editNote/:id" element={<EditNote />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
