import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <div className="company-div">
            <div className="comp-div">
              <h1 className="comp-name">dribble</h1>
              <span>
                Dribbble is the world’s leading community for creatives to
                share, grow, and get hired.
              </span>
              <ul className="social-icons">
                <li>
                  <i className="fa-solid fa-basketball"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands fa-pinterest"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="sub-div">
            <div className="sub-div1">
              <span>
                <strong>For designers</strong>
              </span>
              <span>
                <a href="">Go Pro!</a>
              </span>
              <span>
                <a href="">Explore design work</a>
              </span>
              <span>
                <a href="">Design blog</a>
              </span>
              <span>
                <a href="">Overtime podcast</a>
              </span>
              <span>
                <a href="">Playoffs</a>
              </span>
              <span>
                <a href="">Code of conduct</a>
              </span>
            </div>
            <div className="sub-div2">
              <span>
                <strong>Hire designers</strong>
              </span>
              <span>
                <a href="">Post a job opening</a>
              </span>
              <span>
                <a href="">Post a freelance project</a>
              </span>
              <span>
                <a href="">Search for designers</a>
              </span>
              <span>
                <strong>Brands</strong>
              </span>
              <span>
                <a href="">Advertise with us</a>
              </span>
            </div>
            <div className="sub-div3">
              <span>
                <strong>Company</strong>
              </span>
              <span>
                <a href="">About</a>
              </span>
              <span>
                <a href="">Careers</a>
              </span>
              <span>
                <a href="">Support</a>
              </span>
              <span>
                <a href="">Media kit</a>
              </span>
              <span>
                <a href="">Testimonials</a>
              </span>
              <span>
                <a href="">API</a>
              </span>
              <span>
                <a href="">Terms of service</a>
              </span>
              <span>
                <a href="">Privacy policy</a>
              </span>
              <span>
                <a href="">Cookie policy</a>
              </span>
            </div>
            <div className="sub-div4">
              <span>
                <strong>Directories</strong>
              </span>
              <span>
                <a href="">Design jobs</a>
              </span>
              <span>
                <a href="">Designers for hire</a>
              </span>
              <span>
                <a href="">Freelance designers for hire</a>
              </span>
              <span>
                <a href="">Tags</a>
              </span>
              <span>
                <a href="">Places</a>
              </span>
              <span>
                <strong>Design assets</strong>
              </span>
              <span>
                <a href="">Dribbble Marketplace</a>
              </span>
              <span>
                <a href="">Creative Market</a>
              </span>
              <span>
                <a href="">Fontspring</a>
              </span>
              <span>
                <a href="">Font Squirrel</a>
              </span>
            </div>
            <div className="sub-div5">
              <span>
                <strong>Design Resources</strong>
              </span>
              <span>
                <a href="">Freelancing</a>
              </span>
              <span>
                <a href="">Design Hiring</a>
              </span>
              <span>
                <a href="">Design Portfolio</a>
              </span>
              <span>
                <a href="">Design Education</a>
              </span>
              <span>
                <a href="">Creative Process</a>
              </span>
              <span>
                <a href="">Design Industry Trends</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="shots">
        <span>© 2023 Dribbble. All rights reserved.</span>
        <span>21,539,219 shots dribbbled <i className="fa-solid fa-basketball"></i></span>
      </div>
    </>
  );
}
