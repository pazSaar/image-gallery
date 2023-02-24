import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import {useState} from "react";

const App = () => {

    const [imageFilter, setImageFilter] = useState("")
    return (
        <div className="text-center mx-10">
              <SearchBar onChange={setImageFilter}/>
              <Gallery filterText={imageFilter}/>
        </div>
    );
}

export default App
