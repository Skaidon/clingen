export const curationCriteria = [
  {
    class: "stand-alone",
    copy: "BA1",
    tooltip: "Allele frequency greater than 5% in a population database"
  },
  {
    class: "stand-alone",
    copy: "BS1",
    tooltip: "MAF is too high for disorder"
  },
  {
    class: "stand-alone",
    copy: "BS2",
    tooltip: "Observation in controls inconsistent with disease penetrance"
  },
  {
    class: "stand-alone",
    copy: "BS3",
    tooltip: "Well-established functional studies show no deleterious effect"
  },
  {
    class: "stand-alone",
    copy: "BS4",
    tooltip: "Non-segregation with disease"
  },
  {
    class: "benign-supporting",
    copy: "BP1",
    tooltip: "Missense in gene where primarily truncating cause disease"
  },
  {
    class: "benign-supporting",
    copy: "BP2",
    tooltip:
      "Observed in trans with path. variant for dominant disorder or cis any inheritance"
  },
  {
    class: "benign-supporting",
    copy: "BP3",
    tooltip: "In-frame indels in repeat w/out known function"
  },
  {
    class: "benign-supporting",
    copy: "BP4",
    tooltip:
      "Multiple lines of computational evidence suggest no impact on gene /gene product"
  },
  {
    class: "benign-supporting",
    copy: "BP5",
    tooltip: "Found in case with an alternate cause"
  },
  {
    class: "benign-supporting",
    copy: "BP6",
    tooltip: "Reputable source w/out shared data = benign"
  },
  {
    class: "benign-supporting",
    copy: "BP7",
    tooltip: "Silent variant predicted with no splice impact"
  },
  {
    class: "pathogenic-supporting",
    copy: "PP1",
    tooltip: "Cosegregation with disease in multiple affected family members"
  },
  {
    class: "pathogenic-supporting",
    copy: "PP2",
    tooltip:
      "Missense in gene with low rate of benign missense variants and path. missenses common"
  },
  {
    class: "pathogenic-supporting",
    copy: "PP3",
    tooltip:
      "Multiple lines of computational evidence support a deleterious effect on the gene /gene product"
  },
  {
    class: "pathogenic-supporting",
    copy: "PP4",
    tooltip: "Patient's phenotype or FH highly specific for gene"
  },
  {
    class: "pathogenic-supporting",
    copy: "PP5",
    tooltip: "Reputable source = pathogenic"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM1",
    tooltip:
      "Mutational hot spot or well-studied functional domain without benign variation"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM2",
    tooltip: "Absent in population databases"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM3",
    tooltip:
      "For recessive disorders, detected in trans with a pathogenic variant"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM4",
    tooltip: "Protein length changing variant"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM5",
    tooltip:
      "Novel missense change at an amino acid residue where a different pathogenic missense change has been seen before"
  },
  {
    class: "pathogenic-moderate",
    copy: "PM6",
    tooltip: "De novo (without paternity & maternity confirmed)"
  },
  {
    class: "pathogenic-strong",
    copy: "PS1",
    tooltip: "Same amino acid change as an established pathogenic variant"
  },
  {
    class: "pathogenic-strong",
    copy: "PS2",
    tooltip: "De novo (paternity and maternity confirmed)"
  },
  {
    class: "pathogenic-strong",
    copy: "PS3",
    tooltip: "Well-established functional studies show a deleterious effect"
  },
  {
    class: "pathogenic-strong",
    copy: "PS4",
    tooltip: "Prevalence in affecteds statistically increased over controls"
  },
  {
    class: "pathogenic-very-strong",
    copy: "PSV1",
    tooltip:
      "Predicted null variant in a gene where LOF is a known mechanism of disease"
  }
];

export default curationCriteria;
