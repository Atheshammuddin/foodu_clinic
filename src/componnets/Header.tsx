import { IoSearch } from "react-icons/io5";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

function Header({ Addbtn }: any) {
  const [age, setAge] = useState<any>(10);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="grid grid-cols-12 gap-4 Header ">
      <div className="col-span-4">
        <div className="searchBar">
          <input type="search" placeholder="Search Supplier" />
          <button>
            <IoSearch />
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <FormControl sx={{ height: "45px", minWidth: 120 }}>
          <Select
            value={age}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={10} selected>
              Active
            </MenuItem>
            <MenuItem value={20}>Not Active</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* Second section with 3 columns */}
      <div className="col-span-4">
        <div className="btnsGroup">
          <button className="exportbtn">Export</button>
          <button className="addbtn" onClick={Addbtn}>
            Add New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
