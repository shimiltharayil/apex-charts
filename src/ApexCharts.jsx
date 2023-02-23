import { React, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import "./Chart.css"

const ApexChart = () => {
  //   const [dataPoints, setDataPoints] = useState([]);
  const query = db.collection('data');
  const [snapshot, loading, error] = useCollection(query);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    setSeries([
      {
        name: "Desktop",
        data: snapshot?.docs.map((doc) => doc.data().value),
      }],
    );
  }, [snapshot]);
  console.log(series)

  const [chartConfig] = useState({
   

    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div className="chart__container">

    <div id="chart">
    
        <Chart
          options={chartConfig.options}
          series={series}
          type="bubble"
          height={350}
          />
      <button onClick={auth.signOut}>Sign Out</button>
          </div>
    </div>
  );
};

export default ApexChart;
