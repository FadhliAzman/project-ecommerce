import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div
        id="nav-bar"
        className="bg-[#2A2C2E] p-2 flex flex-row justify-between rounded-xl"
      >
        <div id="logo">
          <p>BIG BOOKSHELF</p>
        </div>
        <div id="nav">
          <a href="books">Books</a>
          <a href="authors">Authors</a>
          <a href="what-to-read">What to Read?</a>
          <a href="gift-ideas">Gift Ideas</a>
          <a href="about-us">About us</a>
        </div>
        <div id="login" className="bg-[#F4CE47] p-4">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
