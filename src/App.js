import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          "background-color": "hsl(195, 20%, 86%)",
          width: "100%",
          height: "40%",
          "z-index": "-1",
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
