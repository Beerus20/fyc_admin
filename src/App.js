import "./App.css";
import { useState, useContext } from "react";
import Mobile from "./component/mobile";
import Navigation from "./component/gestionnaire/navigation";
import Ajout from "./component/gestionnaire/pages/ajout";
import Client from "./component/gestionnaire/pages/client";
import Modification from "./component/gestionnaire/pages/modification";
import { gestionnairePageContext as gc } from "./component/gestionnaire/context";
import useGlobal, { GlobalProvider } from "./component/other/mainContext";
import Login from "./component/login";

const gestionnairePageList = {
  Ajout: <Ajout />,
  Modification: <Modification />,
  Client: <Client />,
};

function App() {
  const [activePage, setActivePage] = useState(gestionnairePageList["Ajout"]);
  const [validate, setValidate] = useState(false);

  const changeActiveGestionnairePage = (pageName) => {
    setActivePage(gestionnairePageList[pageName]);
  };

  if (validate) {
    return (
      <GlobalProvider>
        <div className="App">
          <gc.Provider value={{ changeActiveGestionnairePage }}>
            <Navigation />
            {activePage}
            <Mobile />
          </gc.Provider>
        </div>
      </GlobalProvider>
    );
  } else {
    return (
      <div>
        <Login validate={setValidate} />
      </div>
    );
  }
}

export default App;
