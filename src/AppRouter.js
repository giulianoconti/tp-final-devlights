import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutUsScreen } from "./pages/AboutUsScreen";
import ApiTest from "./pages/ApiTest";
import { ContactScreen } from "./pages/ContactScreen";
import { GameScreen } from "./pages/GameScreen";
import HomeScreen from "./pages/HomeScreen"
import { LearnHowToPlayScreen } from "./pages/LearnHowToPlayScreen";

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
          <Route path="*" element={<div>ERROR 404</div>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};
