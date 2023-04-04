import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebar from "../components/sidebar/Sidebar";
import DeviceCatModal from "../components/Modals/DeviceCatModal";
import CommonTable from "../commonTable/CommonTable";

const deviceCategory = {
  message: "Items Receive Return List found ",
  result: [
    {
      id: 1,
      "Device Category": "global",
    },
    {
      id: 2,
      "Device Category": "global",
    },
    {
      id: 3,
      "Device Category": "global",
    },
    {
      id: 4,
      "Device Category": "global",
    },
    {
      id: 5,
      "Device Category": "global",
    },
    {
      id: 6,
      "Device Category": "global",
    },
    {
      id: 7,
      "Device Category": "global",
    },
    {
      id: 8,
      "Device Category": "global",
    },
    {
      id: 9,
      "Device Category": "global",
    },
    {
      id: 10,
      "Device Category": "global",
    },
    {
      id: 11,
      "Device Category": "global",
    },
    {
      id: 12,
      "Device Category": "global",
    },
    {
      id: 13,
      "Device Category": "global",
    },
    {
      id: 14,
      "Device Category": "global",
    },
    {
      id: 15,
      "Device Category": "global",
    },
    {
      id: 16,
      "Device Category": "global",
    },
    {
      id: 17,
      "Device Category": "global",
    },
    {
      id: 18,
      "Device Category": "global",
    },
    {
      id: 19,
      "Device Category": "global",
    },
    {
      id: 20,
      "Device Category": "global",
    },
    {
      id: 21,
      "Device Category": "global",
    },
    {
      id: 22,
      "Device Category": "global",
    },
    {
      id: 23,

      "Device Category": "global",
    },
    {
      id: 24,
      "Device Category": "global",
    },
    {
      id: 25,
      "Device Category": "global",
    },
    {
      id: 26,
      "Device Category": "global",
    },
    {
      id: 27,
      "Device Category": "global",
    },
    {
      id: 28,
      "Device Category": "global",
    },
    {
      id: 29,
      "Device Category": "global",
    },
    {
      id: 30,
      "Device Category": "global",
    },
    {
      id: 31,
      "Device Category": "global",
    },
    {
      id: 32,
      "Device Category": "global",
    },
    {
      id: 33,
      "Device Category": "global",
    },
    {
      id: 34,
      "Device Category": "global",
    },
    {
      id: 35,
      "Device Category": "global",
    },
    {
      id: 36,
      "Device Category": "global",
    },
    {
      id: 37,
      "Device Category": "global",
    },
    {
      id: 38,
      "Device Category": "global",
    },
    {
      id: 39,
      "Device Category": "global",
    },
    {
      id: 40,
      "Device Category": "global",
    },
    {
      id: 41,
      "Device Category": "global",
    },
    {
      id: 42,
      "Device Category": "global",
    },
    {
      id: 43,
      "Device Category": "global",
    },
    {
      id: 44,
      "Device Category": "global",
    },
    {
      id: 45,
      "Device Category": "global",
    },
    {
      id: 46,
      "Device Category": "global",
    },
    {
      id: 47,
      "Device Category": "global",
    },
    {
      id: 48,
      "Device Category": "global",
    },
    {
      id: 49,
      "Device Category": "global",
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

const DeviceCat = () => {
  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />
            <form action="">
              <div className="border bg-white shadow-lg p-4 mb-3">
                <div className="text-base font-semibold mb-2">
                  Device Category
                </div>
                <div className="grid grid-rows-1 md:grid-cols-3 gap-3 space-x-6 mb-3">
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
                          control={<Checkbox defaultChecked />}
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
                    Device Category List:
                  </div>
                  <div>
                    <DeviceCatModal />
                  </div>
                </div>
                <div>
                  <Box sx={{ height: "100%", width: "100%" }}>
                    <CommonTable data={deviceCategory} />
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

export default DeviceCat;
