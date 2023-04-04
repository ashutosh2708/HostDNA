import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/loginSchema";
import { NavLink } from "react-router-dom";
import { SHA256 } from "crypto-js";
import LoginImg from "../assets/LoginImg.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, styled } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

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
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <DrawerHeader />
          <div className="border bg-white shadow-lg p-4">
            <section className="text-gray-600 body-font">
              <div className="container px-2 py-8 mx-auto flex flex-wrap items-center">
                <div className="hidden lg:block lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <h2 className="title-font font-bold text-4xl text-gray-500 flex justify-center font-Poppins">
                    HostDNA
                  </h2>
                  <img className="object-cover" src={LoginImg} alt="LoginImg" />
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-white shadow-md border rounded-lg p-4 lg:p-8 flex flex-col md:ml-auto w-full mt-4 md:mt-0">
                  <h2 className="text-gray-500 text-3xl font-bold text-center font-Poppins mb-5">
                    HostDNA
                  </h2>
                  <h2 className="text-gray-800 text-3xl font-Poppins font-semibold text-center mb-5">
                    Login
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-4">
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
                    <div className="relative mb-5">
                      <TextField
                        label="Password"
                        name="password"
                        fullWidth
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        size="small"
                        type={showPassword ? "text" : "password"}
                        error={!!errors["password"]}
                        helperText={
                          errors["password"] ? errors["password"].message : ""
                        }
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
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="text-right mb-4">
                      <NavLink to="" className="text-sm">
                        Forgot Password?
                      </NavLink>
                    </div>
                    <div className="mb-2">
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
            </section>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
