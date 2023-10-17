import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const schema = Yup.object({
  departmentName: Yup.string()
    .required("Department Name is required")
    .matches(/^[A-Za-z .*\\S+.]*$/, "Please enter valid deartment name")
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 20 characters"),
});

const DeptModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const defaultValues = {
    departmentName: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    reset(defaultValues);
    console.log("Department Name is ", data);
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
              <div className="grid md:grid-cols-2 gap-2 p-4">
                <div className="w-72">
                  <TextField
                    name="departmentName"
                    fullWidth
                    size="small"
                    id=""
                    variant="outlined"
                    label="Department Name"
                    {...register("departmentName")}
                    error={Boolean(errors.departmentName)}
                    helperText={errors.departmentName?.message}
                  />
                </div>
                <div className="flex">
                  <div className="">
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
                  <div className="">
                    <Button
                      type="submit"
                      variant="contained"
                      size="small"
                      sx={{ textTransform: "none" }}
                      color="success"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default DeptModal;
