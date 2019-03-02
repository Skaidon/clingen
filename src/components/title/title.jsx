import React from "react";
import Popover from "react-awesome-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "./title.scss";
import "react-awesome-popover/dest/react-awesome-popover.css";

export const DataTitleBox = () => {
  return (
    <div className="title-box">
      <button>View Summary</button>
      <h1>
        NM_024675.3(PALB2):c.298C>T (p.Leu100Phe)
        <Popover action="hover" placement="top" arrowFill="rgba(0, 0, 0, 0.8)">
          <span>
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
          <div className="ra-tooltip">
            For ClinVar alleles, this represents the ClinVar Preferred Title.
            For alleles not in ClinVar, this HGVS is based on the transcript
            with the longest translation with no stop codons or, if no
            translation, the longest non-protein-coding transcript. If a single
            canonical transcript is not discernible the HGVS is based on the
            GRCh38 genomic coordinates.
          </div>
        </Popover>
      </h1>
      <h2>
        This interpretation is not yet associated with a disease or mode of
        inheritance
      </h2>
    </div>
  );
};
