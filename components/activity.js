import React from "react";
//import img3 from '../../images/image3.jpg'
//import '../styles/activity.module.css';
function Activity() {
    return (
<aside  className="activity">
        <div  className="main-image">
          <img src="./image3.jpg"  className="round activity-image" alt="images"/>
        </div>
        <div  className="activity-info">
          <div  className="activity-title">
            <span  className="text">Sole Ratatouille</span>
          </div>
          <section className="lorem">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              dolorum illum, a molestiae nesciunt eum et sit minima? Quaerat
              consectetur possimus sed laboriosam, iusto tempore? Adipisci
              inventore corrupti deserunt magni? Lorem ipsum dolor sit, amet
              consectetur.
            </p>
          </section>
        </div>
        <footer className="contact-section">
          <button className="button" type="button">Contact</button>
          <span>See more details</span>
        </footer>
      </aside>
    )
}
export default Activity;