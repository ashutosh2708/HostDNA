import React from "react";
import { Box, styled } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import underConstr from "../assets/under_construction.jpg";
import Navbar from "../components/Navbar/Navbar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Updates = () => {
  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box>
      <Navbar/>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />
            <div className="border bg-white shadow-lg p-4">
              <div className="text-base font-semibold mb-2">
                <h5>Updates</h5>
                <div className="flex justify-center items-center">
                <img
                    className="object-cover"
                    width="50%"
                    height="50%"
                    src={underConstr}
                    alt="underConstr"                  
                  />
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Updates;
