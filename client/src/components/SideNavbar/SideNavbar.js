import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
export default function SideNavbar() {
  return (
    <div>
      <div className="side-navbar-div">
        <div className="side-navbar-items">
          <h3>
            {" "}
            <Link to="/alltransaction " className="text-decore">
              All Transaction
            </Link>
          </h3>
          <h3>
            {" "}
            <Link to="/debit" className="text-decore">
              Debit
            </Link>
          </h3>
          <h3>
            {" "}
            <Link to="/credit" className="text-decore">
              Credit
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
