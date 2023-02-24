import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import {useState} from "react";

const App = () => {

    const [imageFilter, setImageFilter] = useState("")
    return (
        <>
              <SearchBar onChange={setImageFilter}/>
              <Gallery filterText={imageFilter}/>
        </>
    );
}

export default App
