import { useEffect, useState } from "react";
import "./App.css";
import { Sop } from "./Pages/Sop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, []);

  if (loading) {
    return (
      <img
        className="loader"
        alt="loader"
        src="https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif"
      />
    );
  }

  return (
    <>
      <Sop />
    </>
  );
}

export default App;
