import React, { Component } from "react";
import { Wrapper, Tab, TabList, TabPanel } from "react-aria-tabpanel";
import variantTitleBox from "./contexts/titleBox";
import curationDataContext from "./contexts/curationData";
import curationCriteria from "./contexts/curationCriteria";
import basicinfoCriteria from "./contexts/basicInfo";
import { DataTitleBox } from "./components/title/title";
import CurationData from "./components/curation-data/curationData";
import CurationCriteriaButtons from "./components/curation-criteria/curationCriteria";
import BasicInfoTab from "./components/tabs/basic-information/basicInfo";
import "./App.scss";
import "./scss/tabs.scss";

const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      variant: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    this.getData(this);
  };

  getData = that => {
    const url =
      "https://mygene.info/v3/query?q=79728&species=human&fields=entrezgene,exac,HGNC,MIM,homologene.id,interpro,name,pathway.kegg,pathway.netpath,pathway.pid,pdb,pfam,pharmgkb,prosite,uniprot.Swiss-Prot,summary,symbol";
    const self = that;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        // Logging Data.
        console.log(data);
        // Adding data to State.
        self.setState({ variant: data });
        // Not using ANY of this data due to time constraints.
      });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          variantTitleBox,
          curationDataContext,
          curationCriteria,
          basicinfoCriteria,
          tabs: ["Basic Information"]
        }}
      >
        <div className="App">
          <DataTitleBox />
          <CurationData />
          <CurationCriteriaButtons />
          <Wrapper letterNavigation={true}>
            <TabList>
              <ul className="FancyTabs-tablist">
                <li className="FancyTabs-tablistItem">
                  <Tab id="t1" className="FancyTabs-tab">
                    {demoTab.bind(
                      null,
                      <span className="FancyTabs-tabText">
                        Basic Information
                      </span>
                    )}
                  </Tab>
                </li>
                <li className="FancyTabs-tablistItem">
                  <Tab id="t2" className="FancyTabs-tab">
                    {demoTab.bind(
                      null,
                      <span className="FancyTabs-tabText">Population</span>
                    )}
                  </Tab>
                </li>
                <li className="FancyTabs-tablistItem">
                  <Tab id="t3" className="FancyTabs-tab">
                    {demoTab.bind(
                      null,
                      <span className="FancyTabs-tabText">Variant Type</span>
                    )}
                  </Tab>
                </li>
                <li className="FancyTabs-tablistItem">
                  <Tab id="t4" className="FancyTabs-tab">
                    {demoTab.bind(
                      null,
                      <span className="FancyTabs-tabText">
                        Case/Segregation
                      </span>
                    )}
                  </Tab>
                </li>
                <li className="FancyTabs-tablistItem">
                  <Tab id="t5" className="FancyTabs-tab">
                    {demoTab.bind(
                      null,
                      <span className="FancyTabs-tabText">Gene-centric</span>
                    )}
                  </Tab>
                </li>
              </ul>
            </TabList>
            <div className="FancyTabs-panel">
              <TabPanel tabId="t1">
                <div className="FancyTabs-panelInner">
                  <BasicInfoTab />
                </div>
              </TabPanel>
              <TabPanel tabId="t2">
                <div className="FancyTabs-panelInner">
                  Ut ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </div>
              </TabPanel>
              <TabPanel tabId="t3">
                <div className="FancyTabs-panelInner">
                  Duis irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </TabPanel>
              <TabPanel tabId="t4">
                <div className="FancyTabs-panelInner">
                  Duis irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </TabPanel>
              <TabPanel tabId="t5">
                <div className="FancyTabs-panelInner">
                  Duis irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </TabPanel>
            </div>
          </Wrapper>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

function demoTab(content, tabState) {
  let cl = "FancyTabs-tabInner";
  if (tabState.isActive) cl += " is-active";
  return <div className={cl}>{content}</div>;
}

export const Context = AppContext.Consumer;
