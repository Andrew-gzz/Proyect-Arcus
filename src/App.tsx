import LoginPage from "./pages/login/Login";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
