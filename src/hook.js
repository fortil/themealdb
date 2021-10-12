import React, { createContext, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const HooksContext = createContext(null);

const useHooks = () => {
  const history = useHistory();
  const [entry, setEntry] = useState();
  const params = useParams();
  return {
    entry,
    params,
    setEntry,
    goTo: (go) => history.push(go),
  }
}

export const HooksProvider = ({ children }) => {
  const hooks = useHooks();
  return <HooksContext.Provider value={hooks}>{children}</HooksContext.Provider>;
}

const useHooksFn = () => {
  return useContext(HooksContext);
}

export default useHooksFn;