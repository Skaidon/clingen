import React from "react";
import { Context } from "../../../App";
import Collapsible from "react-collapsible";

import "./population.scss";

export default function PopulationTab() {
  return (
    <Context>
      {({ populationTabCriteria }) => (
        <Collapsible trigger={populationTabCriteria.title}>
          <div className="panel panel-info evalation-form-item">
            <div className="panel-heading">
              <strong className="criteria-definition">BA1</strong>:
              <span>
                Allele frequency is &gt; 5% in ExAC, 1000 Genomes, or ESP
              </span>
            </div>
            <div className="panel-body">
              <div className="flexbox-container">
                <div className="col">
                  <select className="form-control">
                    <option value="not-evaluated">Not Evaluated</option>
                    <option disabled="" />
                    <option value="met">Met</option>
                    <option value="not-met">Not Met</option>
                    <option value="supporting">BA1_Supporting</option>
                    <option value="strong">BA1_Strong</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="BA1-explanation">Explanation:</label>
                  <textarea
                    className="form-control"
                    id="BA1-explanation"
                    name="BA1-explanation"
                    rows="2"
                  />
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
      )}
    </Context>
  );
}
