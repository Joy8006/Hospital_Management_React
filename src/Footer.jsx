import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "95%",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Hospital Management Software
      </p>
    </footer>
  );
};

export default Footer;
