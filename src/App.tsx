import styles from "./App.module.scss";
import { Title, Section } from "@components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomePage, AuthPage, SetupPage, ProgramPage } from "@pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/program" element={<ProgramPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
