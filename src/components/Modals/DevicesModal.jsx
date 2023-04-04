import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { components } from "react-select";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

const schema = Yup.object({
  category: Yup.object()
    .shape({
      label: Yup.string().required("Please select categoey"),
      value: Yup.string().required("Please select categoey"),
    })
    .nullable()
    .required("Category is required"),

  device: Yup.object()
    .shape({
      label: Yup.string().required("Please select device"),
      value: Yup.string().required("Please select device"),
    })
    .nullable()
    .required("Device is required"),

  model: Yup.string()
    .required("Model is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "This field cannot contain white space and special character"
    )
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 20 characters"),

  serialNo: Yup.string()
    .required("Serial No. is required")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "This field cannot contain white space and special character"
    )
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 20 characters"),

  macId: Yup.string()
    .required("Mac address is required")
    .matches(
      /^([0-9a-fA-F]{2}[:.-]){5}[0-9a-fA-F]{2}$/,
      "Mac address not match"
    ),
  operatingSystem: Yup.object()
    .shape({
      label: Yup.string().required("Please select operating system"),
      value: Yup.string().required("Please select operating system"),
    })
    .nullable()
    .required("Operating System is required"),
  department: Yup.object()
    .shape({
      label: Yup.string().required("Please select department"),
      value: Yup.string().required("Please select department"),
    })
    .nullable()
    .required("Department is required"),
});

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

const DevicesModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const defaultValues = {
    category: null,
    device: null,
    model: "",
    serialNo: "",
    macId: "",
    operatingSystem: null,
    department: null,
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  React.useEffect(() => {
    setFocus("category");
  }, [setFocus]);

  const onSubmit = (data) => {
    reset(defaultValues);
    console.log("Device list is ", JSON.stringify(data));
  };

  return (
    <>
      <div className="cursor-pointer">
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: "#008080" }}
          sx={{ textTransform: "none" }}
          onClick={handleClickOpen}
        >
          + New
        </Button>
      </div>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white border p-8">
            <div className="flex justify-end cursor-pointer">
              <CancelPresentationIcon
                color="error"
                onClick={() => {
                  handleClose();
                  reset(defaultValues);
                }}
              />
            </div>
            <fieldset className="border border-gray-400 rounded">
              <legend className="px-2 ml-4">
                <h6 className="font-semibold">Add Device</h6>
              </legend>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                <div className="lg:w-72">
                  <Controller
                    name="category"
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Category"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          options={[
                            { value: "computer", label: "Computer" },
                            { value: "tablet", label: "Tablet" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                  <p className="text-xs mt-2 text-red-500">
                    {errors.category?.message || errors.category?.label.message}
                  </p>
                </div>
                <div className="lg:w-72">
                  <Controller
                    name="device"
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Device"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          options={[
                            { value: "mobile", label: "Mobile" },
                            { value: "tablet", label: "Tablet" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                  <p className="text-xs mt-2 text-red-500">
                    {errors.device?.message || errors.device?.label.message}
                  </p>
                </div>
                <div className="lg:w-72">
                  <TextField
                    name="model"
                    fullWidth
                    size="small"
                    id=""
                    variant="outlined"
                    label="Model"
                    {...register("model")}
                    error={Boolean(errors.model)}
                    helperText={errors.model?.message}
                  />
                </div>
                <div className="lg:w-72">
                  <TextField
                    name="serialNo"
                    fullWidth
                    size="small"
                    id=""
                    variant="outlined"
                    label="Serial No."
                    {...register("serialNo")}
                    error={Boolean(errors.serialNo)}
                    helperText={errors.serialNo?.message}
                  />
                </div>
                <div className="lg:w-72">
                  <TextField
                    name="macId"
                    fullWidth
                    size="small"
                    id=""
                    variant="outlined"
                    label="Mac Address"
                    {...register("macId")}
                    error={Boolean(errors.macId)}
                    helperText={errors.macId?.message}
                  />
                </div>
                <div className="lg:w-72">
                  <Controller
                    name="operatingSystem"
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Operating System"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          options={[
                            { value: "mac", label: "Mac" },
                            { value: "windows", label: "Windows" },
                            { value: "linux", label: "Linux" },
                            { value: "other", label: "other" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                  <p className="text-xs mt-2 text-red-500">
                    {errors.operatingSystem?.message ||
                      errors.operatingSystem?.label.message}
                  </p>
                </div>
                <div className="lg:w-72">
                  <Controller
                    name="department"
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Department"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          options={[
                            { value: "aaa", label: "Aaa" },
                            { value: "bbb", label: "Bbb" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                  <p className="text-xs mt-2 text-red-500">
                    {errors.department?.message ||
                      errors.department?.label.message}
                  </p>
                </div>
                <div className="md:ml-5">
                  <FormGroup>
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "15px" },
                      }}
                      control={<Checkbox size="small" defaultChecked />}
                      label="Active"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="flex justify-end gap-4 mr-4 mb-4">
                <div className="">
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{ textTransform: "none" }}
                    color="success"
                  >
                    Submit
                  </Button>
                </div>
                <div>
                  <Button
                    type="reset"
                    variant="contained"
                    size="small"
                    sx={{ textTransform: "none" }}
                    style={{ backgroundColor: "#0B83A5" }}
                        onClick={() => {
                          reset(defaultValues);
                        }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default DevicesModal;
