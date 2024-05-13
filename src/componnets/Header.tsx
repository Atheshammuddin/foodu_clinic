import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <div className="grid grid-cols-12 gap-4 Header ">
      <div className="col-span-9">
        <div className="searchBar">
          <input type="search" placeholder="Search Supplier" />
          <button>
            <IoSearch />
          </button>
        </div>
      </div>
      {/* Second section with 3 columns */}
      <div className="col-span-3">
        <div className="btnsGroup">
          <button className="exportbtn">Export</button>
          <button className="addbtn">Add New</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
