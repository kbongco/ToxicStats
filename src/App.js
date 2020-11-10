import React, { Component } from "react";
import LineChart from "react-linechart";
import "../node_modules/react-linechart/dist/styles.css";

export default class App extends Component {
  render() {
    const data = [
      {
        color: "steelblue",
        points: [
          { x: 9 / 3, y: 1880 },
          { x: 9 / 3, y: 1903 },
        ],
      },
    ];
    return (
      <div>
        <div className="App">
          <h1>Overwatch Stats Season 12 </h1>
          <LineChart
            width={600}
            height={2200}
            data={data}/>
        </div>
      </div>
    );
  }
}
