import React, { useState } from 'react';
import './ComponentStyle.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HandleClick from './HandleClick.js';

const links = ['/', '/one', '/two', '/three'];

export const animationData = {
  animation1: {
    image:
      'https://cdn.dribbble.com/userupload/7249334/file/original-663cdd068887c16a68448638b01d7fba.jpg?compress=1&resize=400x300&vertical=top',
    like: 100,
    views: 1000,
    author: 'Helal | Logo Designer',
    about:"Today I'd like to share a showreel animation that I made for our new product ui kit of E-Commerce Dashboard called Tuks was Designed by Arfi Maulana You can get these items and more at: • UI8 • Uplabs • Creative Market • Gumroad Hope you guys enjoy and press if you like it😉Any feedback or comment? Feel free to leave comments below.Have an amazing project? Send to our email : 📧hellopickolab@gmail.com Services we provide: • User Interface Design • UX Research and UX Design • Illustration Design • Icon Design • Website & Mobile Design • Interaction DesignOur Social Media: • Instagram • Linkedin• Behance"
  },
  animation2: {
    image:
      'https://cdn.dribbble.com/userupload/7234605/file/original-bb1e3ad256d173846147e566a5378b48.jpg?compress=1&resize=400x300&vertical=top',
    like: 200,
    views: 2000,
    author: 'John Doe',
    about:"Today I'd like to share a showreel animation that I made for our new product ui kit of E-Commerce Dashboard called Tuks was Designed by Arfi Maulana You can get these items and more at: • UI8 • Uplabs • Creative Market • Gumroad Hope you guys enjoy and press if you like it😉Any feedback or comment? Feel free to leave comments below.Have an amazing project? Send to our email : 📧hellopickolab@gmail.com Services we provide: • User Interface Design • UX Research and UX Design • Illustration Design • Icon Design • Website & Mobile Design • Interaction DesignOur Social Media: • Instagram • Linkedin• Behance"
  },
  animation3: {
    image:
      'https://cdn.dribbble.com/userupload/7248074/file/still-c6e843823a76e316f66050f64deca102.png?compress=1&resize=400x300&vertical=top',
    like: 200,
    views: 2000,
    author: 'John Doe',
    about: "Today I'd like to share a showreel animation that I made for our new product ui kit of E-Commerce Dashboard called Tuks was Designed by Arfi Maulana You can get these items and more at: • UI8 • Uplabs • Creative Market • Gumroad Hope you guys enjoy and press if you like it😉Any feedback or comment? Feel free to leave comments below.Have an amazing project? Send to our email : 📧hellopickolab@gmail.com Services we provide: • User Interface Design • UX Research and UX Design • Illustration Design • Icon Design • Website & Mobile Design • Interaction DesignOur Social Media: • Instagram • Linkedin• Behance"
  },
  animation4: {
    value: 'Animation 4',
    image:
      'https://cdn.dribbble.com/userupload/7241599/file/still-e739c64a72223913829ea0b3ca2788a1.png?compress=1&resize=400x300&vertical=top',
    like: 200,
    views: 2000,
    author: 'John Doe',
    about:"Today I'd like to share a showreel animation that I made for our new product ui kit of E-Commerce Dashboard called Tuks was Designed by Arfi Maulana You can get these items and more at: • UI8 • Uplabs • Creative Market • Gumroad Hope you guys enjoy and press if you like it😉Any feedback or comment? Feel free to leave comments below.Have an amazing project? Send to our email : 📧hellopickolab@gmail.com Services we provide: • User Interface Design • UX Research and UX Design • Illustration Design • Icon Design • Website & Mobile Design • Interaction DesignOur Social Media: • Instagram • Linkedin• Behance"
  },
};

const Animation = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const imgClick = (index) => {
    setImgIndex(index);
    console.log('Image Clicked:', index);
  };

  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HandleClick imgIndex={imgIndex} />} />
          <Route path="/one" element={<HandleClick imgIndex={imgIndex} />} />
          <Route path="/two" element={<HandleClick imgIndex={imgIndex} />} />
          <Route path="/three" element={<HandleClick imgIndex={imgIndex} />} />
        </Routes>
      </div>
      <div className="component-div">
        {Object.keys(animationData).map((key, index) => {
          const animation = animationData[key];
          return (
            <NavLink to={links[index]} key={index}>
              <div className="each-component">
                  <img onClick={()=>imgClick(index)} src={animation.image} alt={animation.value} />
                  <div className="data">
                    <p>{animation.author}</p>
                    <div className="likes">
                      <span>
                        <i className="fa-solid fa-heart"></i>
                        {animation.like}
                      </span>
                      <span>
                        <i className="fa-solid fa-eye"></i>
                        {animation.views}
                      </span>
                    </div>
                  </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </BrowserRouter>
  );
};

export default Animation;
