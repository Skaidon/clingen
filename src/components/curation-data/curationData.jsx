import React from "react";
import Grid from "react-css-grid";
import "./curationData.scss";

export default function CurationData() {
  const gridSpacer = "1%";
  const gridWidth = "30%";
  return (
    <Grid width={gridWidth} gap={gridSpacer} className="grid-container">
      <div className="grid-item">
        <h3>Variant ID Sources</h3>
        <dl>
          <dd>
            ClinVar VaraitionID: <a href="#test">126698</a>
          </dd>
          <dd>
            dbSNP ID: <a href="#test">rs61756147</a>
          </dd>
        </dl>
      </div>
      <div className="grid-item">
        <div class="curation-data-disease">
          <h4 data-reactid="63">Variant Genomic Context</h4>
          <dl class="inline-dl clearfix" data-reactid="64">
            <dd data-reactid="65">
              UCSC [
              <a
                href="https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&amp;position=chr16%3A23636218-23636278"
                title="UCSC Genome Browser for NC_000016.10:g.23636248G>A in a new window"
              >
                GRCh38/hg38
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&amp;position=chr16%3A23647539-23647599"
                title="UCSC Genome Browser for NC_000016.9:g.23647569G>A in a new window"
              >
                GRCh37/hg19
              </a>
              ]
            </dd>
            <dd data-reactid="67">
              Variation Viewer [
              <a
                href="https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&amp;assm=GCF_000001405.28&amp;from=23636218&amp;to=23636278"
                title="Variation Viewer page for NC_000016.10:g.23636248G>A in a new window"
              >
                GRCh38
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&amp;assm=GCF_000001405.25&amp;from=23647539&amp;to=23647599"
                title="Variation Viewer page for NC_000016.9:g.23647569G>A in a new window"
              >
                GRCh37
              </a>
              ]
            </dd>
            <dd data-reactid="69">
              Ensembl Browser [
              <a
                href="http://uswest.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23636218-23636278"
                title="Ensembl Browser page for NC_000016.10:g.23636248G>A in a new window"
              >
                GRCh38
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="http://grch37.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23647539-23647599"
                title="Ensembl Browser page for NC_000016.9:g.23647569G>A in a new window"
              >
                GRCh37
              </a>
              ]
            </dd>
          </dl>
        </div>
      </div>
      <div className="grid-item">
        <h3>My Interpretation</h3>
        <div class="associated-disease">
          <strong>Disease:</strong>&nbsp;<span>Not provided</span>
        </div>
        <div>
          <strong>Calculated Pathogenicity:</strong> None
        </div>
        <div>
          <strong>Modified Pathogenicity:</strong> Not provided
        </div>
        <div class="header-classification">
          <strong>Provisional/Approved Status:</strong>
          <span>
            &nbsp;<span class="no-classification">None</span>
          </span>
        </div>
      </div>
    </Grid>
  );
}
