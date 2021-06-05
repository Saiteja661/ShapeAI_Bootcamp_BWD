import React from "react";

function Footer() {
  var cuuryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {cuuryear}</p>
    </footer>
  );
}

export default Footer;
