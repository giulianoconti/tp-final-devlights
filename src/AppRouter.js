import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./pages/HomeScreen";
import { LearnHowToPlayScreen } from "./pages/LearnHowToPlayScreen";
import { GameScreen } from "./pages/GameScreen";
import { ContactScreen } from "./pages/ContactScreen";
import { AboutUsScreen } from "./pages/AboutUsScreen";
import { Footer } from "./components/Footer";
import NotFound404Screen from "./pages/NotFound404Screen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aprender-a-jugar" element={<LearnHowToPlayScreen />} />
        <Route path="/juego" element={<GameScreen />} />
        <Route path="/contacto" element={<ContactScreen />} />
        <Route path="/sobre-nosotros" element={<AboutUsScreen />} />
        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
