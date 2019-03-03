import React from "react";
import Popover from "react-awesome-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../App";

import "./title.scss";
import "react-awesome-popover/dest/react-awesome-popover.css";

export const DataTitleBox = () => {
  return (
    <Context>
      {({ variantTitleBox }) => (
        <div className="title-box">
          <button>View Summary</button>
          <h1>
            {variantTitleBox.title}
            <Popover
              action="hover"
              placement="top"
              arrowFill="rgba(0, 0, 0, 0.8)"
            >
              <span>
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <div className="ra-tooltip">{variantTitleBox.tooltip}</div>
            </Popover>
          </h1>
          <h2>{variantTitleBox.subtitle}</h2>
        </div>
      )}
    </Context>
  );
};
