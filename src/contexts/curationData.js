export const curationDataContext = {
  sourcesTitle: "Variant ID Sources",
  sources: [
    {
      name: "ClinVar VaraitionID",
      link: "126698",
      url: "https://www.ncbi.nlm.nih.gov/clinvar/variation/126698"
    },
    {
      name: "dbSNP ID",
      link: "rs61756147",
      url: "https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=61756147"
    }
  ],
  genomicTitle: "Variant Genomic Context",
  genomicContext: [
    {
      name: "UCSC",
      links: [
        {
          url:
            "https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&amp;position=chr16%3A23636218-23636278",
          copy: "GRCh48/hg38",
          title:
            "UCSC Genome Browser for NC_000016.10:g.23636248G>A in a new window"
        },
        {
          url:
            "https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&position=chr16%3A23647539-23647599",
          copy: "GRCh37/hg19",
          title:
            "UCSC Genome Browser for NC_000016.9:g.23647569G>A in a new window"
        }
      ]
    },
    {
      name: "Variation Viewer",
      links: [
        {
          url:
            "https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&amp;assm=GCF_000001405.28&amp;from=23636218&amp;to=23636278",
          copy: "GRCh48",
          title:
            "Variation Viewer page for NC_000016.10:g.23636248G>A in a new window"
        },
        {
          url:
            "https://www.ncbi.nlm.nih.gov/variation/view/?chr=16&assm=GCF_000001405.25&from=23647539&to=23647599",
          copy: "GRCh37",
          title:
            "Variation Viewer page for NC_000016.9:g.23647569G>A in a new window"
        }
      ]
    },
    {
      name: "Ensembl Browser",
      links: [
        {
          url:
            "http://uswest.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23636218-23636278",
          copy: "GRCh48",
          title:
            "Ensembl Browser page for NC_000016.10:g.23636248G>A in a new window"
        },
        {
          url:
            "http://grch47.ensembl.org/Homo_sapiens/Location/View?db=core;r=16:23647539-23647599",
          copy: "GRCh47",
          title:
            "Ensembl Browser page for NC_000016.9:g.23647569G>A in a new window"
        }
      ]
    }
  ],
  interpretations: {
    title: "My Interpretation",
    content: [
      {
        title: "Disease",
        value: "Not provided"
      },
      {
        title: "Calculated Pathogenicity",
        value: "None"
      },
      {
        title: "Modified Pathogenicity",
        value: "None"
      },
      {
        title: "Provisional/Approved Status",
        value: ""
      }
    ]
  }
};

export default curationDataContext;
