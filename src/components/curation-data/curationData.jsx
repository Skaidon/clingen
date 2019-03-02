import React from "react";
import Grid from "react-css-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./curationData.scss";

export default function CurationData() {
  const gridSpacer = "1%";
  const gridWidth = "30%";
  return (
    <Grid width={gridWidth} gap={gridSpacer} className="grid-container">
      <div className="grid-item">
        <h4>Variant ID Sources</h4>
        <dl>
          <dd>
            ClinVar VaraitionID:{" "}
            <a href="#test">
              126698 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </dd>
          <dd>
            dbSNP ID: <a href="#test">rs61756147 <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          </dd>
        </dl>
      </div>
      <div className="grid-item">
        <h4>Variant Genomic Context</h4>
        <dl>
          <dd>
            UCSC [
            <a
              href="https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&amp;position=chr16%3A23636218-23636278"
              title="UCSC Genome Browser for NC_000016.10:g.23636248G>A in a new window"
            >
              GRCh48/hg38 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a
              href="https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&amp;position=chr16%3A23647539-23647599"
              title="UCSC Genome Browser for NC_000016.9:g.23647569G>A in a new window"
            >
              GRCh47/hg19 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            ]
          </dd>
          <dd>
            Variation Viewer [
            <a
              href="https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&amp;assm=GCF_000001405.28&amp;from=23636218&amp;to=23636278"
              title="Variation Viewer page for NC_000016.10:g.23636248G>A in a new window"
            >
              GRCh48 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a
              href="https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&amp;assm=GCF_000001405.25&amp;from=23647539&amp;to=23647599"
              title="Variation Viewer page for NC_000016.9:g.23647569G>A in a new window"
            >
              GRCh47 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            ]
          </dd>
          <dd>
            Ensembl Browser [
            <a
              href="http://uswest.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23636218-23636278"
              title="Ensembl Browser page for NC_000016.10:g.23636248G>A in a new window"
            >
              GRCh48 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a
              href="http://grch47.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23647539-23647599"
              title="Ensembl Browser page for NC_000016.9:g.23647569G>A in a new window"
            >
              GRCh47 <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            ]
          </dd>
        </dl>
      </div>
      <div className="grid-item">
        <h4>My Interpretation</h4>
        <dl>
          <dd><strong>Disease:</strong> Not provided</dd>
          <dd><strong>Calculated Pathogenicity:</strong> None</dd>
          <dd><strong>Modified Pathogenicity:</strong> Not provided</dd>
          <dd><strong>Provisional/Approved Status:</strong> None</dd>
        </dl>
      </div>
    </Grid>
  );
}
