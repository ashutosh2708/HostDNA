import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeptModal from "../components/Modals/DeptModal";
import CommonTable from "../commonTable/CommonTable";

const departmentData = {
  message: "Items Receive Return List found ",
  result: [
    {
      id: 1,

      "Department Name": "global",
    },
    {
      id: 2,
      "Department Name": "global",
    },
    {
      id: 3,
      "Department Name": "global",
    },
    {
      id: 4,
      "Department Name": "global",
    },
    {
      id: 5,
      "Department Name": "global",
    },
    {
      id: 6,
      "Department Name": "global",
    },
    {
      id: 7,
      "Department Name": "global",
    },
    {
      id: 8,
      "Department Name": "global",
    },
    {
      id: 9,
      "Department Name": "global",
    },
    {
      id: 10,
      "Department Name": "global",
    },
    {
      id: 11,
      "Department Name": "global",
    },
    {
      id: 12,
      "Department Name": "global",
    },
    {
      id: 13,
      "Department Name": "global",
    },
    {
      id: 14,
      "Department Name": "global",
    },
    {
      id: 15,
      "Department Name": "global",
    },
    {
      id: 16,
      "Department Name": "global",
    },
    {
      id: 17,
      "Department Name": "global",
    },
    {
      id: 18,
      "Department Name": "global",
    },
    {
      id: 19,
      "Department Name": "global",
    },
    {
      id: 20,
      "Department Name": "global",
    },
    {
      id: 21,
      "Department Name": "global",
    },
    {
      id: 22,
      "Department Name": "global",
    },
    {
      id: 23,
      "Department Name": "global",
    },
    {
      id: 24,
      "Department Name": "public",
    },
    {
      id: 25,
      "Department Name": "public",
    },
    {
      id: 26,
      "Department Name": "public",
    },
    {
      id: 27,
      "Department Name": "public",
    },
    {
      id: 28,
      "Department Name": "public",
    },
    {
      id: 29,
      "Department Name": "public",
    },
    {
      id: 30,
      "Department Name": "public",
    },
    {
      id: 31,
      "Department Name": "public",
    },
    {
      id: 32,
      "Department Name": "public",
    },
    {
      id: 33,
      "Department Name": "public",
    },
    {
      id: 34,
      "Department Name": "public",
    },
    {
      id: 35,
      "Department Name": "public",
    },
    {
      id: 35,
      "Department Name": "public",
    },
    {
      id: 36,
      "Department Name": "public",
    },
    {
      id: 37,
      "Department Name": "public",
    },
    {
      id: 38,
      "Department Name": "public",
    },
    {
      id: 39,
      "Department Name": "public",
    },
    {
      id: 40,
      "Department Name": "public",
    },
    {
      id: 41,
      "Department Name": "public",
    },
    {
      id: 42,
      "Department Name": "common",
    },
    {
      id: 43,
      "Department Name": "common",
    },
    {
      id: 44,
      "department Name": "common",
    },
    {
      id: 45,
      "department Name": "common",
    },
    {
      id: 46,
      "department Name": "common",
    },
    {
      id: 47,
      "department Name": "common",
    },
    {
      id: 48,
      "department Name": "common",
    },
  ],
  actions: ["Edit", "Delete"],
  statusCode: 200,
  count: 5,
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const TotalDep = () => {
  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />
            <form action="">
              <div className="border bg-white shadow-lg p-4">
                <div className="text-base font-semibold mb-2">Department</div>
                <div className="grid grid-rows-1 md:grid-cols-4 gap-3 space-x-6 mb-3">
                  <div>
                    <TextField
                      fullWidth
                      name=""
                      size="small"
                      id=""
                      variant="outlined"
                      placeholder=""
                      InputProps={{
                        endAdornment: (
                          <IconButton>
                            <SearchOutlinedIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="">
                      <FormGroup>
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "15px",
                            },
                          }}
                          control={
                            <Checkbox
                              sx={{ color: "blue", marginRight: 1 }}
                              defaultChecked
                            />
                          }
                          label="Active"
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <Button variant="contained" size="small">
                        <SearchOutlinedIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="text-base font-semibold flex items-center">
                    Department List:
                  </div>
                  <div>
                    <DeptModal />
                  </div>
                </div>
                <div>
                  <Box sx={{ height: "100%", width: "100%" }}>
                    <CommonTable data={departmentData} />
                  </Box>
                </div>
              </div>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TotalDep;
