import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ContactScreen } from "./pages/ContactScreen";
import { LearnHowToPlayScreen } from "./pages/LearnHowToPlayScreen";
import { GameScreen } from "./pages/GameScreen";
import AboutUsScreen from "./pages/Nosotros";
import ApiTest from "./pages/ApiTest";
import HomeScreen from "./pages/HomeScreen"
import NotFound404Screen from "./pages/NotFound404Screen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path="/" element={ <HomeScreen /> } />
          <Route path="/learn-how-to-play" element={<LearnHowToPlayScreen />} />
          {/* <Route path="/game" element={<GameScreen />} /> */}
          <Route path="/game" element={<ApiTest /> } />          
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="*" element={ <NotFound404Screen /> } />          
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};
