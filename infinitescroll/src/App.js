import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./component/cards";

function App() {
  const [scroll, setScroll] = useState(false);
  const handleScrollfunction = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollfunction);
    return () => {
      window.removeEventListener("scroll", handleScrollfunction);
    };
  }, []);
  console.log("K5", scroll);
  return (
    <div
      className="App"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
