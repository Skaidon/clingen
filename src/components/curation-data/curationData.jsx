import React from "react";
import Grid from "react-css-grid";
import { Context } from "../../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./curationData.scss";

export default function CurationData() {
  const gridSpacer = "1%";
  const gridWidth = "32%";

  const getLinks = links => {
    return links.map((link, i) => {
      return (
        <span className="link" key={i}>
          <a
            href={link.url}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.copy}&nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </span>
      );
    });
  };
  return (
    <Context>
      {({ curationDataContext }) => (
        <Grid width={gridWidth} gap={gridSpacer} className="grid-container">
          <div className="grid-item">
            <h4>{curationDataContext.sourcesTitle}</h4>
            <dl>
              {curationDataContext.sources.map((source, i) => {
                return (
                  <dd key={i}>
                    {source.name}:&nbsp;
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.link}&nbsp;
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </dd>
                );
              })}
            </dl>
          </div>
          <div className="grid-item">
            <h4>{curationDataContext.genomicTitle}</h4>
            <dl>
              {curationDataContext.genomicContext.map((genomes, i) => {
                return (
                  <dd key={i}>
                    {genomes.name}: [{getLinks(genomes.links)}]
                  </dd>
                );
              })}
            </dl>
          </div>
          <div className="grid-item">
            <h4>{curationDataContext.interpretations.title}</h4>
            <dl>
              {curationDataContext.interpretations.content.map((content, i) => {
                return (
                  <dd key={i}>
                    <strong>{content.title}:</strong> {content.value}
                  </dd>
                );
              })}
            </dl>
          </div>
        </Grid>
      )}
    </Context>
  );
}
