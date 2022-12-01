import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayOut from "./components/MainLayOut";
import Courses from "./components/Courses.jsx";
import SingleCourse from "./components/SingleCourse";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayOut></MainLayOut>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contacts" element={<Contacts></Contacts>}></Route>
            <Route path="courses" element={<Courses></Courses>}>
              <Route
                path=":slug"
                element={<SingleCourse></SingleCourse>}
              ></Route>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contacts" element={<Contacts></Contacts>}></Route>
            <Route path="courses" element={<Courses></Courses>}></Route>
            <Route
              path="courses/:slag"
              element={<SingleCourse></SingleCourse>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Route>
        </Routes> */}
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
