import React from "react";
import PropTypes from "prop-types";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import blues from "@material-ui/core/colors/blue";
import greens from "@material-ui/core/colors/green";
import greys from "@material-ui/core/colors/grey";
import oranges from "@material-ui/core/colors/orange";
import purples from "@material-ui/core/colors/purple";
import reds from "@material-ui/core/colors/red";
import useCustomBars from "./use-custom-bars";

const SHADE = 200;
const COLORS = {
  BLUE: blues[SHADE],
  GREEN: greens[SHADE],
  GREY: greys[SHADE],
  ORANGE: oranges[SHADE],
  PURPLE: purples[SHADE],
  RED: reds[SHADE]
};

function CapacityForecastChart({ barGap, data }) {
  const { FullWidthBar, StandardBar } = useCustomBars(barGap);

  return (
    <ResponsiveContainer height={400} width="100%">
      <ComposedChart
        barGap={barGap}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="stage" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="goal" fill={COLORS.GREY} shape={<FullWidthBar />} />
        <Bar dataKey="simulation" fill={COLORS.BLUE} shape={<StandardBar />} />
        <Bar dataKey="limit" fill={COLORS.PURPLE} shape={<StandardBar />} />
        <Bar dataKey="actual" fill={COLORS.GREEN} shape={<StandardBar />} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

CapacityForecastChart.propTypes = {
  barGap: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

CapacityForecastChart.defaultProps = {
  barGap: 0
};

export default CapacityForecastChart;
