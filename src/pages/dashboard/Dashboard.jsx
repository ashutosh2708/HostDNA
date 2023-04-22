import React from "react";
import { Box, styled } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Sidebar from "../../components/sidebar/Sidebar";
import ActiveUser from "../../components/charts/ActiveUser";
import TotalUser from "../../components/charts/TotalUser";
import InfraStruct from "../../components/charts/InfraStruct";
import StaticDynamic from "../../components/charts/StaticDynamic";
import OptSystem from "../../components/charts/OptSystem";
import TotalThreatChart from "../../components/charts/TotalThreatChart";
  

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 1, width: "100%" }}>
            <DrawerHeader />
            <div className="mb-2 grid gap-y-5 gap-x-3 md:grid-cols-2 xl:grid-cols-4">
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Total Assets</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">845</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 3.58%</h6>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Total Departments</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">56</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 55.58%</h6>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleDownIcon sx={{ color: "#f44336" }} />
                  <h5 className="text-red-500 ">Total Threats Detected</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">15</h5>
                  </div>
                  <div>
                    <h6 className="text-red-500 text-sm">- 3.58%</h6>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Check Updates</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">454</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 35.58%</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 grid md:grid-cols-2 xl:grid-cols-2 gap-3">
              <div className="bg-white border rounded-lg">
                <StaticDynamic />
              </div>
              <div className="bg-white border rounded-lg">
                <OptSystem />
              </div>
              <div className="bg-white border rounded-lg">
                <TotalThreatChart />
              </div>
              <div className="bg-white border rounded-lg">
                <ActiveUser />
              </div>
              <div className="bg-white border rounded-lg">
                <TotalUser />
              </div>
              <div className="bg-white border rounded-lg">
                <InfraStruct />
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Dashboard;
