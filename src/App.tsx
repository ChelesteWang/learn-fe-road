import "./App.css";
import TechStackItem from "./components/techstack-Item";

const dataSource = [
  {
    name: "前端基础",
    description: "HTML CSS JavaScript",
    value: 3,
    children: [
      {
        name: "前端基础",
        description: "HTML CSS JavaScript",
        value: 3,
      },
      {
        name: "前端进阶",
        description: "React Vue",
        value: 3,
        path:'1-2-1'
      },
    ],
  },
  {
    name: "前端入门",
    description: "HTML CSS JavaScript 2",
    value: 3,
    children: [
      {
        name: "前端基础 2",
        description: "HTML CSS JavaScript 2",
        value: 3,
      },
      {
        name: "前端进阶 2",
        description: "React Vue 2",
        value: 3,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>前端学习之路</h1>
      <TechStackItem dataSource={dataSource} />
    </div>
  );
}

export default App;


