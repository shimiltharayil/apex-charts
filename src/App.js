import "./App.css";
import ApexCharts from "apexcharts";


function App() {
  let options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  return (
    <div className="app">
        <h1>Graph App</h1>
    </div>
  );
}

export default App;
