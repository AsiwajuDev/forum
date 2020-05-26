import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-3 text-center">
        Copyright &copy; 2020 - {new Date().getFullYear()} Dev Connector
      </footer>
    </div>
  );
};

export default Footer;
