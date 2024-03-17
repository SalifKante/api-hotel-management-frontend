import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";

import AddRoom from "./components/room/AddRom";
import Home from "./components/home/Home";
import ExistingRooms from "./components/room/ExistingRooms";
import EditRoom from "./components/room/EditRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/edit-room/:roomId" element={<EditRoom />}></Route>
            <Route path="/existing-rooms" element={<ExistingRooms />}></Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
