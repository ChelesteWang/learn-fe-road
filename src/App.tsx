import { useReducer } from "react";
import "./App.css";
import TechStackItem from "./components/techstack-Item";
import DataMapContext, { TechTreeReducer } from "./store";
import { initializedDataSource, initializedDataMap } from "./utils";

function App() {
  // @ts-ignore
  const [state, dispatch] = useReducer(TechTreeReducer, initializedDataMap);
  return (
    <div className="App">
      <h1>前端学习之路</h1>
      <DataMapContext.Provider value={{ state, dispatch }}>
        <TechStackItem dataSource={initializedDataSource} />
        {JSON.stringify(state)}
      </DataMapContext.Provider>
    </div>
  );
}

export default App;
