import { Routes, Route, useLocation } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import { LearnHowToPlayScreen } from "./pages/LearnHowToPlayScreen";
import { GameScreen } from "./pages/GameScreen";
import { ContactScreen } from "./pages/ContactScreen";
import { AboutUsScreen } from "./pages/AboutUsScreen";
import NotFound404Screen from "./pages/NotFound404Screen";
import { useEffect } from "react";

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/aprender-a-jugar" element={<LearnHowToPlayScreen />} />
      <Route path="/juego" element={<GameScreen />} />
      <Route path="/contacto" element={<ContactScreen />} />
      <Route path="/sobre-nosotros" element={<AboutUsScreen />} />
      <Route path="*" element={<NotFound404Screen />} />
    </Routes>
  );
};
