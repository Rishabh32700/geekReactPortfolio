import React from "react";
import './home.css'

import Avatar from '../../../images/avatar.png'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeLeft">
          <h1>Hi there,</h1>
          <h1>I'm Rishabh <span>Sharma</span></h1>
          <h3>I am into <span> Web Devlopment</span></h3>
          <button   onClick={() => {
              localStorage.setItem("activeMenu", "about");
              window.location.reload(true);
            }}>About ME</button>
        </div>
        <div className="homeRight">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
