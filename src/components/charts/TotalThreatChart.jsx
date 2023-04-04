import React from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

const TotalThreatChart = () => {
  const data = [
    { name: "Malware", value: 400 },
    { name: "Virtualization", value: 400 },
    { name: "Buffer Overflow", value: 300 },
    { name: "Network Intrusion", value: 300 },
  ];

  const COLORS = ["#1B658C", "#55B073", "#55D9F0", "#818422"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="">
        <div className="p-3">
          <h6 className="text-[#2f64a4] font-bold">Total Threats</h6>
        </div>
        <div className="">
          <ResponsiveContainer width="100%" height={250} className="">
            <PieChart
              width={100}
              height={200}
              margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
            >
              <Pie
                data={data}
                stroke="none"
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                wrapperStyle={{ fontSize: "14px" }}
                layout="horizontal"
                iconType="circle"
                iconSize={10}
                verticalAlign="bottom"
                align="center"
                formatter={(value, entry, index) => (
                  <span className="text-black">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};
export default TotalThreatChart;
