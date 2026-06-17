import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">
      DMS
    </Link>

    <div className="navbar-nav">
      <Link className="nav-link" to="/">
        Login
      </Link>

      <Link className="nav-link" to="/upload">
        Upload
      </Link>

      <Link className="nav-link" to="/search">
        Search
      </Link>

      <Link className="nav-link" to="/admin">
        Admin
      </Link>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;