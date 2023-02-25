import React, {FC, useState} from 'react';

type SearchBarProps = {
    onChange?   : (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({onChange}) => {

    const [searchBarValue, setSearchBarValue] = useState<string>("");

    const handleSearchOnChange = (event: any) => {
        event.preventDefault();
        const newValue = event.target.value;
        setSearchBarValue(newValue);
        onChange && onChange(newValue);
    }

    return (
        <input className="pl-2 m-1 w-52 self-center bg-gray-100 border-2 border-blue-300 rounded" type="text" id="searchBar" onChange={handleSearchOnChange} value={searchBarValue} placeholder="Filter images" />
    );
};

export default SearchBar;