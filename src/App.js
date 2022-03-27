import ArticleList from "./components/ArticleList/ArticleList";
import List from "./components/List/List";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  // Homework
  const example = [
    ["Example", "Example", "Example"],
    ["Example", "Example", "Example"],
    ["Example", "Example", "Example"]
  ];
  // Output using:
  // <Table src={example} />

  const veggies = ["Carrot", "Potato", "Strawberry"];
  const fruits = [
    { name: "Mango", color: "Yellow" },
    { name: "Apple", color: "Green" },
    { name: "Cherry", color: "Red" },
  ];

  // Homework 2: Spread operator
  const fruits2 = [...fruits];

  // Homework 3: Deconstructing array
  const [carrot, potato, strawberry] = veggies;

  const fruitsList = fruits.map((fruit) => (
    <li>
      {fruit.name}: {fruit.color}
    </li>
  ));

  const articles = [
    { title: "This is an example article", url: "#", teaser: "lorem" },
    { title: "Another article as an example", url: "#", teaser: "lorem" },
    { title: "Last example article", url: "#", teaser: "lorem" },
  ];

  return (
    <div className="App">
      <ProgressBar progress={25} />
      <ProgressBar progress={50} color="orange" />
      <ProgressBar progress={30} />
      <ProgressBar progress={60} />
      <ProgressBar progress={90} />

      <h1>Hello world</h1>

      <ul>
        {fruitsList}
      </ul>

      <List src={veggies} />

      <ArticleList src={articles} />

      <table>
        <tr>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>Example</td>
          <td>Example</td>
        </tr>
      </table>
    </div>
  );
 
 
}

export default App;