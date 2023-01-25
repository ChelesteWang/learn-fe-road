import "./App.css";
import TechStackItem from "./components/techstack-Item";
import { addDataIndex, dataSource, generateDataMap } from "./utils";

function App() {
  return (
    <div className="App">
      <h1>前端学习之路</h1>
      <TechStackItem dataSource={addDataIndex(dataSource, "")} />
      {JSON.stringify(generateDataMap(addDataIndex(dataSource, "")))}
    </div>
  );
}

export default App;
