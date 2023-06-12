import React from "react";

function DisplayNav(props){

}

function NavBar() {
  const links = ["home", "about", "projects"];

  const displayNav = links.map(link=>{
    return <a key={link} href= {`#${link}`}>{link}</a>
  })

  //console.log (displayNav);
  return <nav>{displayNav}</nav>;
}

export default NavBar;
