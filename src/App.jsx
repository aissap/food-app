import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage"; // make sure this file exists!

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
