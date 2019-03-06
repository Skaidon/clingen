import React from "react";
import { Context } from "../../../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import "./progressBar.scss";

export default function ProgressBar() {
  return (
    <Context>
      {({ progressBarCriteria }) => (
        <div className="flex-container criteriaBox">
          {progressBarCriteria.map((criteria, i) => {
            let icon;
            if (criteria.iconColor === "#666666") {
              icon = faCalculator;
            } else {
              icon = faCheckCircle;
            }
            return (
              <div className="flex-col" key={i}>
                <div className="criteriaIcon">
                  <FontAwesomeIcon icon={icon} color={criteria.iconColor} />
                </div>
                <div className="criteriaCopy">
                  {criteria.title}
                  <br />
                  <span className="criteriaValue">{criteria.copy}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Context>
  );
}
