import React from "react";
import { Context } from "../../App";
import Popover from "react-awesome-popover";

import "./curationCriteria.scss";
import "react-awesome-popover/dest/react-awesome-popover.css";

export default function CurationCriteriaButtons() {
  return (
    <Context>
      {({ curationCriteria }) => (
        <div className="curation-criteria">
          {curationCriteria.map((criteria, i) => {
            return (
              <div key={i} className="btn">
                <Popover
                  action="hover"
                  placement="bottom"
                  arrowFill="rgba(0, 0, 0, 0.8)"
                >
                  <button className={criteria.class}>{criteria.copy}</button>
                  <div className="ra-tooltip">{criteria.tooltip}</div>
                </Popover>
              </div>
            );
          })}
        </div>
      )}
    </Context>
  );
}
