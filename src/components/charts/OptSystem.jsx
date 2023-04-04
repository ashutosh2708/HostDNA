import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const OptSystem = () => {
  const data = [
    { name: "Linux", value: 400 },
    { name: "Android", value: 300 },
    { name: "Mac OS", value: 400 },
    { name: "Windows", value: 500 },
  ];

  const COLORS = ["#0263FF", "#2BB72A", "#892AF0", "#FF7723"];

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
          <h6 className="text-[#2f64a4] font-bold">Operating Systems</h6>
        </div>
        <div className="">
          <ResponsiveContainer width="100%" height={250} className="">
            <PieChart
              width={100}
              height={200}
              margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
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

export default OptSystem;
