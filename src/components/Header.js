import React,{useState} from 'react';
import Animation from './Animation.js';
import './Header.css';

export default function Header() {
  const [isClikced,setIsClicked] = useState(false);

  const handleClick = function(){
    setIsClicked(!isClikced);
    console.log("yes");
  }
  return (
    <>
      <div onClick={handleClick} className="head">
      <div className="header">
        <div className="popular-container">
          <div className="popular">
            <div>
              <a href="#">Discover</a>
            </div>
            <div>
              <a href="#">Animation</a>
            </div>
            <div>
              <a href="#">Branding</a>
            </div>
            <div>
              <a href="#">Illustration</a>
            </div>
            <div>
              <a href="#">Mobile</a>
            </div>
            <div>
              <a href="#">Print</a>
            </div>
            <div>
              <a href="#">Product Design</a>
            </div>
            <div>
              <a href="#">Typography</a>
            </div>
            <div>
              <a href="#">Web Design</a>
            </div>
          </div>
        </div>
        <h1>Explore the world’s leading design portfolios</h1>
        <span>
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </span>
        <form className="container-fluid">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <div className="trending-searches">
          <p>Trending Searches</p>
          <span>
            <a href="#">landing page</a>
          </span>
          <span>
            <a href="#">ios</a>
          </span>
          <span>
            <a href="#">food</a>
          </span>
          <span>
            <a href="#">landingpage</a>
          </span>
          <span>
            <a href="#">ux design</a>
          </span>
          <span>
            <a href="#">app design</a>
          </span>
        </div>
      </div>
    </div>
    {isClikced && <Animation />}
    </>
  );
}
