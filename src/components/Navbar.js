import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/fd18/de12/731fb4ce00dd022f23fea8e388eec191?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKeelMgmh6-hxEadHcAXRiisLQQzPkvdFVnbCpKwtrM3vZq~ptAEEB7FQzfLu5p1rxBkMkSMieh2lUaNS-FkrxyHvBubzHv9cswEOsYUYTLcUdAbvC-qusJaLtB5AvdmPQ96Qbs5X1v1jdQPvJoDwzEjPCTFMOKFJK~Q7~Z-F-1s9sE~8LICaHJq9t4UVdzI6eWuVGr9uhW2FAYw~FHFpkXAzyxNvHOecdH5nQLt2PqS0GvZLob1hIztYPeDbDrSOIJsnF1Tt5sRjRg~ViwwEYkkhikqfIsFp4T36yGwIQxduNvVWrbeBFIV-XmDC93arbtpC6qIyrRO~QRpBk7w0w__" alt="Logo" />
        <span>WASSERSTOFF</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <span className="icons"><img src="https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg" /></span>
      </div>
      <div className="nav-links">
        <a href="#" className="notActive">Statistics</a>
        <a href="#" className="active">Overview</a>
        <a href="#" className="notActive">Dashboard</a>
        <a href="#" className="notActive">Analytics</a>
      </div>
      <div className="nav-icons">
        <div className="icon">
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="User" />
        </div>
        <div className="icon">
          <img src="https://th.bing.com/th/id/OIP.6UJulOeXk9p4Aa3-HNXYTwHaHa?rs=1&pid=ImgDetMain" alt="Filter" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
