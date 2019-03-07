export const basicinfoCriteria = {
  genomic: "Genomic",
  titles: [
    {
      title: "NC_000016.10:g.23636248G>A",
      subtitle: "GRCh38"
    },
    {
      title: "NC_000016.9:g.23647569G>A",
      subtitle: "GRCh37"
    }
  ],
  panels: [
    {
      title:
        "All interpretations for this variant in the Variant Curation Interface(VCI)",
      tooltip:
        'Interpretations marked as "Approved" may be viewed by any user within the interface; those marked as "In progress" or "Provisional" are viewable only by the submitter.',
      table: {
        headings: [
          {
            title: "Clinical significance"
          },
          {
            title: "Status"
          },
          {
            title: "Condition - ",
            subtitle: "Mode of inheritance"
          },
          {
            title: "Curator/Affiliation"
          }
        ],
        values: [
          {
            value: "--"
          },
          {
            value: "None"
          },
          {
            value: "Not provided"
          },
          {
            value: "ClinGen Test Curator",
            link: "mailto:clingen.demo.curator@genome.stanford.edu"
          }
        ]
      }
    }
  ]
};

export default basicinfoCriteria;
