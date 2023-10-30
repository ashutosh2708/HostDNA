import React from "react";
import Select, { components } from "react-select";
import Sidebar from "../components/sidebar/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Checkbox,
  styled,
  TextField,
} from "@mui/material";
import DevicesModal from "../components/Modals/DevicesModal";
import CommonTable from "../commonTable/CommonTable";
import Navbar from "../components/Navbar/Navbar";
const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};
const deviceData = {
  message: "Items Receive Return List found ",
  result: [
    {
      id: 1,
      Category: "Mobile",
      "Model No": "9028661",
      "Serial No": "006655",
    },
    {
      id: 2,
      Category: "Mobile",
      "Model No": "9025661",
      "Serial No": "003355",
    },
    {
      id: 3,
      Category: "Tablet",
      "Model No": "9025661",
      "Serial No": "003366",
    },
    {
      id: 4,
      Category: "Computer",
      "Model No": "9025661",
      "Serial No": "003322",
    },
    {
      id: 5,
      Category: "Comp",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 6,
      Category: "Comp1",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 7,
      Category: "Comp2",
      "Model No": "9033661",
      "Serial No": "113322",
    },
    {
      id: 8,
      Category: "Comp3",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 9,
      Category: "Comp4",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 10,
      Category: "Comp5",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 11,
      Category: "Comp6",
      "Model No": "9025661",
      "Serial No": "113322",
    },
    {
      id: 12,
      Category: "Comp7",
      "Model No": "9025661",
      "Serial No": "113422",
    },
    {
      id: 13,
      Category: "Comp8",
      "Model No": "9025661",
      "Serial No": "113422",
    },
    {
      id: 14,
      Category: "Comp9",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 15,
      Category: "Comp10",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 16,
      Category: "Comp11",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 17,
      Category: "Comp12",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 18,
      Category: "Comp13",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 19,
      Category: "Comp14",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 20,
      Category: "Comp15",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 21,
      Category: "Comp16",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 22,
      Category: "Comp9",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 23,
      Category: "Comp9",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 24,
      Category: "Comp9",
      "Model No": "9025661",
      "Serial No": "113455",
    },
    {
      id: 25,
      Category: "Comp9",
      "Model No": "9025661",
      "Serial No": "113455",
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

const Styles = {
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    overflow: "visible",
  }),

  placeholder: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    position: "absolute",
    top: state.hasValue || state.selectProps.inputValue ? -15 : "10%",
    transition: "top 0.1s, font-size 0.1s",
    fontSize: (state.hasValue || state.selectProps.inputValue) && 14,
  }),
};

const TotalAsset = () => {
  // eslint-disable-next-line
  const [data, setData] = React.useState(deviceData);

  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box>
      <Navbar/>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />
            <form>
              <div className="border bg-white shadow-lg p-4">
                <div className="text-base font-semibold mb-2">
                  Device master
                </div>
                <div className="grid md:grid-row-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-3">
                  <div className="">
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <IconButton>
                            <SearchOutlinedIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <Select
                      isClearable
                      styles={Styles}
                      placeholder="Device category"
                      components={{
                        ValueContainer: CustomValueContainer,
                        IndicatorSeparator: () => null,
                      }}
                      options={[
                        { value: "Computer", label: "Computer" },
                        { value: "Tablet", label: "Tablet" },
                      ]}
                    />
                  </div>
                  <div>
                    <Select
                      isClearable
                      styles={Styles}
                      placeholder="Department"
                      components={{
                        ValueContainer: CustomValueContainer,
                        IndicatorSeparator: () => null,
                      }}
                      options={[
                        { value: "department1", label: "Department 1" },
                        {
                          value: "department2",
                          label: "Department 2",
                        },
                        { value: "department3", label: "Department 3" },
                        { value: "department4", label: "Department 4" },
                        { value: "department5", label: "Department 5" },
                      ]}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="mx-4">
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
                              variant="outlined"
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
                <div>
                  <div className="flex justify-between mb-3">
                    <div className="text-base font-semibold flex items-center">
                      Device List:
                    </div>
                    <div>
                      <DevicesModal />
                    </div>
                  </div>

                  <Box sx={{ height: "100%", width: "100%" }}>
                    <CommonTable data={deviceData} setData={setData} />
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

export default TotalAsset;
