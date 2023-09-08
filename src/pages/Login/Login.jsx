import React, { useState } from "react";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../Schema/loginSchema";
import { NavLink } from "react-router-dom";
import { SHA256 } from "crypto-js";
import LoginImg from "../assets/LoginImg.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const p = "5981eda53eeb4100828394dd43631aede8015e58311c5caaa3f5c67598a327d5";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const defaultValue = {
    username: "",
    password: "",
  };

  const onSubmit = () => {
    reset(defaultValue);
    console.log("Password is " + password);
    console.log(document.getElementsByName("password")[0].value);
    let encryption = SHA256(password).toString();
    console.log("Hashing password is " + encryption);
    if (p === encryption) {
      console.log("OK");
    } else {
      console.log("nax");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
      <div className="hidden lg:block">
        <h2 className="text-4xl font-bold flex justify-center ml-60 font-Poppins mt-14 text-gray-500">
          HostDNA
        </h2>
        <img className="ml-24 object-cover" src={LoginImg} alt="LoginImg" />
      </div>

      <div className="flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[400px] w-full mx-auto p-4 border rounded-lg bg-white shadow-md"
        >
          <h2 className="text-3xl font-bold text-center font-Poppins py-6 text-gray-500">
            HostDNA
          </h2>
          <h2 className="text-3xl font-Poppins font-semibold text-center py-6 text-gray-800">
            Login
          </h2>
          <div className="flex flex-col py-2 mx-8">
            <TextField
              name="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              autoComplete="username"
              fullWidth
              size="small"
              {...register("username")}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
          </div>
          <div className="flex flex-col py-2 mx-8">
            <TextField
              label="Password"
              name="password"
              fullWidth
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              type={showPassword ? "text" : "password"}
              error={!!errors["password"]}
              helperText={errors["password"] ? errors["password"].message : ""}
              {...register("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="text-right mb-4 mr-8">
            <NavLink to="forgotPassword" className="text-sm">
              Forgot Password?
            </NavLink>
          </div>
          <div className="mb-10 mx-8">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#342B70" }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
