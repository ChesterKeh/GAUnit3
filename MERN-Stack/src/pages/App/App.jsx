import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistroyPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <h1>MERN</h1>
      <AuthPage />
      <NewOrderPage />
      <OrderHistoryPage />
    </>
  );
}

export default App;
