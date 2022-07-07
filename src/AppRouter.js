import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { HomeScreen } from "./pages/home/HomeScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="*" element={<div>ERROR 404</div>} />
      </Routes>
    </BrowserRouter>
  );
};
