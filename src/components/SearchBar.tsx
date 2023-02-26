import React, { FC, useState } from "react";
import { RiSave3Fill } from "react-icons/RI";
import { GiOpenFolder } from "react-icons/GI";
import Popup from "./Popup";

type SearchBarProps = {
  onChange?: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [togglePopupView, setTogglePopupView] = useState(false);
  const savedFiltersLSKey = "savedFilters";

  const togglePopup = () => {
    setTogglePopupView(!togglePopupView);
  };
  const handleSaveFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const savedFilters = localStorage.getItem(savedFiltersLSKey);

    if (savedFilters) {
      localStorage.setItem(
        savedFiltersLSKey,
        savedFilters + "," + searchBarValue
      );
    } else {
      localStorage.setItem(savedFiltersLSKey, searchBarValue);
    }
  };

  const handleOpenFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    togglePopup();
  };

  const handleSearchOnChange = (event: any) => {
    event.preventDefault();
    const newValue = event.target.value;
    setSearchBarValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        className="pl-2 m-1 w-52 self-center bg-gray-100 border-2 border-blue-300 rounded"
        type="text"
        id="searchBar"
        onChange={handleSearchOnChange}
        value={searchBarValue}
        placeholder="Filter images"
      />
      <div className="flex flex-col">
        <button title="save text" onClick={handleSaveFilter}>
          <RiSave3Fill size="1.2em" />
        </button>
        <button title="load text" onClick={handleOpenFilter}>
          <GiOpenFolder size="1.2em" />
        </button>
      </div>
      {togglePopupView ? (
        <Popup
          togglePopup={togglePopup}
          listItems={localStorage.getItem(savedFiltersLSKey)?.split(",")}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
