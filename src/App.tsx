import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import React, { useState } from "react";
import { TagMode } from "./common/types";

const App = () => {
  const [imageFilter, setImageFilter] = useState("");
  const [tagMode, setTagMode] = React.useState<TagMode>("any");

  const handleTagModeChange = (mode: TagMode) => {
    setTagMode(mode);
  };
  return (
    <div className="text-center mx-10 flex flex-col h-screen">
      <SearchBar onChange={setImageFilter} setTagMode={handleTagModeChange} />
      <Gallery filterText={imageFilter} tagMode={tagMode} />
    </div>
  );
};

export default App;
