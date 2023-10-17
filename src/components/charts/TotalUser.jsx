import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const styles = {
  fontFamily: "sans-serif",
};

const data = [
  {
    name: "Mar",
    Static: 0,
  },
  {
    name: "April",
    Static: 50,
  },
  {
    name: "May",
    Static: 150,
  },
  {
    name: "July",
    Static: 100,
  },
  {
    name: "Aug",
    Static: 50,
  },
  {
    name: "Sep",
    Static: 200,
  },
];

const TotalUser = () => {
  return (
    <div style={styles}>
      <div className="p-3">
        <h6 className="text-[#2f64a4] font-bold">Total User Activity</h6>
      </div>
      <ResponsiveContainer height={250}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <Line
            type="monotone"
            dataKey="Static"
            stroke="#F03C3D"
            strokeWidth={3}
            dot={false}
          />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalUser;
