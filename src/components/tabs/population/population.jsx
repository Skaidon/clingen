import React from "react";
import { Context } from "../../../App";
import Collapsible from "react-collapsible";

import "./population.scss";

export default function PopulationTab() {
  return (
    <Context>
      {({ populationTabCriteria }) => (
        <Collapsible trigger={populationTabCriteria.title}>
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      )}
    </Context>
  );
}
