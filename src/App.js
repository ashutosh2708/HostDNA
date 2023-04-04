import React from "react";
import Login from "./pages/Login";
// import ForgotPassword from "./pages/Login/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import DeviceInfo from "./pages/DeviceInfo";
import Settings from "./pages/Settings";
import TotalAsset from "./pages/TotalAsset";
import TotalDep from "./pages/TotalDep";
import TotalThreat from "./pages/TotalThreat";
import Updates from "./pages/Updates";
import UserActivity from "./pages/UserActivity";
import DeviceCat from "./pages/DeviceCat";

function App() {
  return (
    <BrowserRouter  >
      <Routes>
        {/* <Route path="/forgotPassword" element={<ForgotPassword/>} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/totalAssets" element={<TotalAsset />} />
        <Route path="/totalDep" element={<TotalDep />} />
        <Route path="/deviceCat" element={<DeviceCat />} />
        <Route path="/totalThreat" element={<TotalThreat />} />
        <Route path="/userActivity" element={<UserActivity />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/deviceInfo" element={<DeviceInfo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
