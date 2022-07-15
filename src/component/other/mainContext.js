import { useContext, useReducer, createContext } from "react";
import globalReducer, { globalVariable } from "./mainReducer";

const GlobalContext = createContext(globalVariable);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, globalVariable);

  const initVilla = (villas) => {
    dispatch({
      type: "INIT_VILLA",
      payload: {
        villas: villas,
      },
    });
  };
  const initClient = (client) => {
    dispatch({
      type: "INIT_CLIENT",
      payload: {
        client: client,
      },
    });
  };

  const addVilla = (villa) => {
    const new_villa = state.villas.concat(villa);

    dispatch({
      type: "ADD_VILLA",
      payload: {
        villas: new_villa,
      },
    });
  };

  const addClient = (client) => {
    const new_client = state.client.concat(client);

    dispatch({
      type: "ADD_CLIENT",
      payload: {
        client: new_client,
      },
    });
  };

  const value = {
    state: state,
    initVilla,
    initClient,
    addVilla,
    addClient,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    console.log("Verified your context hook");
  }

  return context;
};

export default useGlobal;
