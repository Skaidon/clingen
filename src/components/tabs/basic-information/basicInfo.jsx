import React from "react";
import { Context } from "../../../App";

import "./basicInfo.scss";

export default function BasicInfoTab() {
  return (
    <Context>
      {({ basicinfoCriteria }) => (
        <>
          <div className="callout genomic">
            <h4>Genomic</h4>
            <ul>
              <li>
                <span className="title-ellipsis title-ellipsis-short">
                  NC_000016.10:g.23636248G&gt;A
                </span>
                <span> (GRCh38)</span>
              </li>
              <li>
                <span className="title-ellipsis title-ellipsis-short">
                  NC_000016.9:g.23647569G&gt;A
                </span>
                <span> (GRCh37)</span>
              </li>
            </ul>
          </div>
          <div className="panel panel-info all-existing-interpretaions">
            <div className="panel-heading">
              <h3 className="panel-title">
                All interpretations for this variant in the Variant Curation
                Interface (VCI)
                <span className="interpretation-status-explanation">
                  <span
                    className="text-info contextual-help"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-tooltip='Interpretations marked as "Approved" may be viewed by any user within the interface; those marked as "In progress" or "Provisional" are viewable only by the submitter.'
                  >
                    <i className="icon icon-info-circle" />
                  </span>
                </span>
              </h3>
            </div>
            <div className="panel-content-wrapper">
              <div className="all-existing-interpretaions-content-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Clinical significance</th>
                      <th>Status</th>
                      <th>
                        Condition - <i>Mode of inheritance</i>
                      </th>
                      <th>Curator/Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="approved-interpretation">
                      <td className="clinical-significance">--</td>
                      <td className="interpretation-status">
                        <span className="no-classification">None</span>
                      </td>
                      <td className="condition-mode-of-inheritance">
                        <span>Not provided</span>
                      </td>
                      <td className="submitter">
                        <a href="mailto:clingen.demo.curator@genome.stanford.edu">
                          ClinGen Test Curator
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </Context>
  );
}
