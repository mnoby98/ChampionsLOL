import { useState } from "react";
import Nav from "./nav.js";
import Box from "./Box.js";

export default function App() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e);
  }

  return (
    <div className="container">
      <Nav onSearch={handleSearch} />
      <Box search={search} />
    </div>
  );
}
