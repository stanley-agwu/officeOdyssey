import { createContext, useContext } from 'react';

interface DataContextProps {
  quest?: string[];
}

const DataContext = createContext<DataContextProps>({
  quest: [],
});

export const useDataContext = (): DataContextProps => useContext(DataContext);

export default DataContext;
