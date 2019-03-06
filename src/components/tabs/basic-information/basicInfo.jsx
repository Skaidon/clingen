import React from "react";
import Popover from "react-awesome-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../App";

import "./basicInfo.scss";

export default function BasicInfoTab() {
  return (
    <Context>
      {({ basicinfoCriteria }) => (
        <>
          <div className="callout genomic">
            <h4>{basicinfoCriteria.genomic}</h4>
            <ul>
              {basicinfoCriteria.titles.map((title, i) => {
                return (
                  <li key={i}>
                    <span>{title.title}</span>
                    <span>({title.subtitle})</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {basicinfoCriteria.panels.map((panel, i) => {
            return (
              <div
                className="panel panel-info all-existing-interpretaions"
                key={i}
              >
                <div className="panel-heading">
                  <h3 className="panel-title">
                    {panel.title}
                    <Popover
                      action="hover"
                      placement="top"
                      arrowFill="rgba(0, 0, 0, 0.8)"
                    >
                      <span>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                      <div className="ra-tooltip">{panel.tooltip}</div>
                    </Popover>
                  </h3>
                </div>
                <div className="panel-content-wrapper" key={i}>
                  <div className="all-existing-interpretaions-content-wrapper">
                    <table className="table">
                      <thead>
                        <tr>
                          {panel.table.headings.map((header, i) => {
                            if (header.subtitle) {
                              return (
                                <th key={i}>
                                  {header.title}
                                  <em>{header.subtitle}</em>
                                </th>
                              );
                            } else {
                              return <th key={i}>{header.title}</th>;
                            }
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="approved-interpretation">
                          {panel.table.values.map((v, i) => {
                            if (v.link) {
                              return (
                                <td key={i}>
                                  <a href={v.link}>{v.value}</a>
                                </td>
                              );
                            } else {
                              return <td key={i}>{v.value}</td>;
                            }
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </Context>
  );
}
