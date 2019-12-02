import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CapacityForecastChart from "./components/capacity-forecast-chart/capcaity-forecast-chart";
import EditableTable from "./components/editable-table/editable-table";
import mockCapacityForecastData from "./data/mock/mock-capacity-forecast-data";
import "./App.css";

const defaultColumns = [
  { title: "Stage", field: "stage" },
  { title: "Goal", field: "goal", type: "numeric" },
  { title: "Simulation", field: "simulation", type: "numeric" },
  { title: "Limit", field: "limit", type: "numeric" },
  { title: "Actual", field: "actual", type: "numeric" }
];
const style = { margin: 10 };

function App() {
  const [data, setData] = useState(mockCapacityForecastData);
  return (
    <Container maxWidth="md">
      <div style={style}>
        <EditableTable
          initialColumns={defaultColumns}
          initialData={mockCapacityForecastData}
          onChange={setData}
          title="Capacity Forecast Settings"
        />
      </div>
      <Paper elevation={3} style={style}>
        <CapacityForecastChart data={data} />
      </Paper>
    </Container>
  );
}

export default App;
