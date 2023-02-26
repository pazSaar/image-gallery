import React, {Component, FC} from "react";

type PopUpProps = {
    togglePopup   : () => void;
    listItems?: string[];
};

const PopUp: FC<PopUpProps> = ({togglePopup, listItems}) => {
    const handleOnClick = () => {
        togglePopup();
    };

    console.log(listItems)
    return (
         <div className="w-72 h-48 fixed
            top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
            bg-amber-200 drop-shadow-xl rounded-xl p-10">
          <span className="close" onClick={togglePopup}>
              X
          </span>
            <form>
                <h3>Pick Search Filters!</h3>
                <label>
                        <select multiple={true} id="search list">
                        {listItems?.map((item, index) =>
                            <option value={index}>item</option>
                        )}
                        </select>
                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
        );
}

export default PopUp;
