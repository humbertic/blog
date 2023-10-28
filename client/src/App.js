import Home from "./pages/home/Home";
import Single from "./pages/sigle/Single";
import Write from "./pages/write/Write";
import TopBar from "../src/components/topbar/TopBar";
import Settings from "../src/pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SinglePost from "./singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./contex/Context";



function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={user ? <Single /> : <Register />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
