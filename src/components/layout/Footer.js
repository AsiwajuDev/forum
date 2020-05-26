import React from "react";

const Footer = ({ brandName }) => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-3 text-center">
        Copyright &copy;
        <span className="lead">
          {new Date().getFullYear()} {brandName}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
