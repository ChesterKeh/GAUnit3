import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistroyPage";
import Navbar from "../../components/navbar";

function App() {
  const [user, setUser] = useState(null);
  // log("user %o", user);

  if (user === null) {
    return (
      <>
        <h1>MERN</h1>
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <h1>MERN</h1>
      <Navbar />
      <Routes>
        <Route
          path="/orders/new"
          element={<NewOrderPage />}
        />
        <Route
          path="/orders"
          element={<OrderHistoryPage />}
        />
      </Routes>
    </>
  );
}

export default App;
