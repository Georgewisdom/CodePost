import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-dark p-4 text-white">
        <div
          className="container d-flex justify-content-center"
          style={{
            display: "flex",
            height: "100%",
            alignSelf: "bottom",
            alignItems: "center"
          }}
        >
          <span>
            <i className="fab fa-wordpress fa-3x p-2"></i>
          </span>
          <h4>
            Proudly created by <b style={{ color: "red" }}>CodePost</b>
          </h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
