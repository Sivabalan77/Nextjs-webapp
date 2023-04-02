import React, { useState, useEffect } from "react";
function Udata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=4")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleNewUsers = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=4")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

//   const [isFlipped, setIsFlipped] = useState(false);
//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const handleCardHover = (Id) => {
//     setHoveredCard(Id);
//   };

//   const handleCardLeave = () => {
//     setHoveredCard(null);
//   };

//   const isCardHovered = (Id) => {
//     return Id === hoveredCard;
//   };

  return (
    <div>
      <button class=" m-3 btn btn-warning p-1" onClick={handleNewUsers}>
        Get New Users
      </button>
      <div className="row">
        {users.map((item) => (
          <div
            className="cardcontainer"
          >
            <div

            >
              <div className="front">
                <img
                  src={item.avatar}
                  class="rounded-5"
                  height="75px"
                  width="85px"
                  alt="..."
                />
                <h4>
                  {item.first_name} {item.last_name}
                </h4>
                <p>
                  <b>Profession:</b> {item.employment.title}
                </p>
                {/* <p>
                  <b>Skill:</b> {item.employment.key_skill}
                </p>
              </div>
              <div className="back card-text justify-content-center text-left mx-1 my-3">
                <p>
                  <b>Gender:</b> {item.gender}
                  <br />
                  <b>Plan:</b> {item.subscription.plan}{" "}
                  {item.subscription.payment_method} <br />
                  <b>Status:</b>
                  {item.subscription.status}
                  <br />
                  <b>Term:</b>
                  {item.subscription.term}
                  <br />
                  <b>Address:</b> {item.address.street_name},
                  {item.address.street_address},{item.address.city},
                  {item.address.state},{item.address.country}.
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Udata;