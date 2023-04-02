import React from "react";
import Udata from "./pagination";
//import '../styles/Main.module.css';
function Main() {
  return (
    <section className="dashboard">
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <ul className="nav-link">
              <li className="link-name">
                <a href="./Appetizer.js">APPETIZER</a>
              </li>
              <li className="link-name">
                <a href="./Entre.js">ENTRE</a>
              </li>
              <li className="link-name">
                <a href="./Course.js">COURSE</a>
              </li>
              <li className="link-name">
                <a href="./Dessert.js">DESSERT</a>
              </li>
            </ul>
          </div>

           <main className="new1">
            <Udata/>
            {/* <figure className="box">
              <img src="./images1.jpg" className="box1 round" alt="images" />
            </figure>
            <figure className="box">
              <img src="./images.jpg" className="box2 round" alt="images" />
            </figure>
            <figure className="box">
              <img src="./images4.jpg" className="box3 round" alt="images" />
            </figure>
            <figure className="box">
              <img src="./images4.jpg" className="box4 round" alt="images" />
            </figure> */}
          </main> 
          <div className="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
