import React from 'react';
import './HandleClick.css';
import { animationData } from './Animation.js';

const HandleClick = function (props) {
  return (
    <div className="handle-component-div">
      {Object.keys(animationData).map((key, index) => {
        const animation = animationData[key];
        {
          if (index === props.imgIndex)
            return (
              <div className="box" key={index}>
                <div className="handle-data">
                  {animation.author}
                  <div className="likes">
                      <i className="fa-solid fa-heart"></i>
                      {animation.like}
                      <i className="fa-solid fa-eye"></i>
                      {animation.views}
                  </div>
                </div>
                <img src={animation.image} alt={animation.value} />
                <div className="about">
                  {animation.about}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default HandleClick;
