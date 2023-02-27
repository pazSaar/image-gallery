import React from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { TagMode } from "../common/types";

interface Props {
  options: string[];
  isOpen: boolean;
  setOpen: (openPopup: boolean) => void;
  setUserChoice: (userChoice: string[]) => void;
  setParentTagMode: (mode: TagMode) => void;
}

const MultiSelectList: React.FC<Props> = ({
  options,
  setOpen,
  isOpen,
  setUserChoice,
  setParentTagMode,
}) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [tagMode, setTagMode] = React.useState<"any" | "all">("any");

  const handlePopupClose = () => {
    setOpen(false);
  };

  const handleSearchButtonClick = () => {
    setUserChoice(selectedOptions);
    setOpen(false);
    setParentTagMode(tagMode);
  };
  const handleSelectionChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedOptions(event.target.value as string[]);
  };

  const handleTagModeChange = (
    event: React.MouseEvent<HTMLElement>,
    chosenTagMode: "all" | "any"
  ) => {
    setTagMode(chosenTagMode);
  };
  return (
    <Dialog open={isOpen} onClose={handlePopupClose}>
      <DialogTitle className="flex justify-center text-center">
        Select Filters From List
      </DialogTitle>
      <DialogContent>
        <FormControl className="w-full">
          <Select
            id="multi-select"
            multiple
            value={selectedOptions}
            onChange={handleSelectionChange}
            renderValue={(selected: string[]) => (
              <div className="flex flex-wrap items-center justify-center">
                {(selected as string[]).map((value) => (
                  <div
                    key={value}
                    className="flex items-center bg-gray-200 px-2 py-1 rounded-lg mr-2 mb-2"
                  >
                    <Checkbox
                      checked={selectedOptions.indexOf(value) > -1}
                      color="primary"
                    />
                    <ListItemText primary={value} />
                  </div>
                ))}
              </div>
            )}
          >
            {options.map((option) => (
              <MenuItem value={option}>
                <Checkbox
                  checked={selectedOptions.indexOf(option) > -1}
                  color="primary"
                />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <ToggleButtonGroup
        color="primary"
        value={tagMode}
        exclusive
        onChange={handleTagModeChange}
        aria-label="Tag Mode"
        className="flex justify-center"
      >
        <ToggleButton value="any">ANY</ToggleButton>
        <ToggleButton value="all">ALL</ToggleButton>
      </ToggleButtonGroup>
      <DialogActions className="flex !justify-evenly">
        <Button onClick={handleSearchButtonClick} color="primary">
          Search
        </Button>
        <Button onClick={handlePopupClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MultiSelectList;
