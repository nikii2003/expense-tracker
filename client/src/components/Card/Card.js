import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="expence-feachers-card-flex-div">
        <div className="card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WdFjP63lBjS7y9z3maucsg82KAASP3IjoQsAGr7y2Q&s" className="image-in-cards"/></div>
        <div className="card"><img src="https://images.booksense.com/images/830/822/9781079822830.jpg" className="image-in-cards"/></div>
        <div className="card"><img src="https://sparkful.app/_next/image?url=https%3A%2F%2Fcms.sparkful.app%2Fassets%2Fdcdc494b-bbbc-42fa-9e29-57aaac78d1c8&w=3840&q=75" className="image-in-cards"/></div>
      </div>
    </div>
  );
}
export { Card };
