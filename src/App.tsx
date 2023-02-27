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

  const handleSearchBarTextChange = (newValue: string) => {
    setImageFilter(String(newValue));
  };
  return (
    <div className="text-center mx-10 flex flex-col h-screen">
      <SearchBar
        onChange={handleSearchBarTextChange}
        setTagMode={handleTagModeChange}
      />
      <Gallery filterText={imageFilter} tagMode={tagMode} />
    </div>
  );
};

export default App;
