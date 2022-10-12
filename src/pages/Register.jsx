import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [name, setNombre] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPass = (e) => {
    setRepeatPass(e.target.value);
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    if (email === "") {
    } else if (name === "") {
    } else if (password === "") {
    } else if (repeatPass === password) {
      axios.post(`http://localhost:3001/api/users/register`, {
        email,
        password,
        name,
      });
      navigate("/singIn");
    } else {
      alert("Las contraseñas no coinciden !");
    }
  };
  const isErrorEmail = email === "";
  const isErrorPass = repeatPass !== password;
  const isErrorNombre = name === "";

  return (
    <>
      <NavBar />
      <Flex
        minH={"89vh"}
        align={"center"}
        justify={"center"}
        className="sm:flex-col xl:flex-row"
      >
        <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6}>
          <Stack align={"center"}>
            <h1 style={{ color: "white" }} className="font-Avenir text-4xl">
              Login
            </h1>
          </Stack>
          <Box p={8} as={"form"}>
            <Stack spacing={4}>
              <FormControl
                style={{ color: "white" }}
                id="email"
                isInvalid={isErrorEmail}
                isRequired
              >
                <FormLabel style={{ color: "white" }} className="font-Avenir">
                  <span className="text-xs" style={{ letterSpacing: "2px" }}>
                    EMAIL
                  </span>
                </FormLabel>
                <Input
                  borderColor="white"
                  focusBorderColor="black"
                  type="email"
                  onChange={handleEmail}
                />
                {!isErrorEmail ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Email es necesario</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                style={{ color: "white" }}
                id="email"
                isInvalid={isErrorNombre}
                isRequired
              >
                <FormLabel style={{ color: "white" }} className="font-Avenir">
                  <span className="text-xs" style={{ letterSpacing: "2px" }}>
                    NOMBRE
                  </span>
                </FormLabel>
                <Input
                  borderColor="white"
                  focusBorderColor="black"
                  type="name"
                  onChange={handleNombre}
                />
                {!isErrorNombre ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Nombre es necesario</FormErrorMessage>
                )}
              </FormControl>
              <FormControl style={{ color: "white" }} id="password" isRequired>
                <div>
                  <FormLabel className="font-Avenir">
                    <span
                      className="text-xs float-left mb-1"
                      style={{ letterSpacing: "2px" }}
                    >
                      PASSWORD
                    </span>
                  </FormLabel>
                </div>
                <Input
                  borderColor="white"
                  focusBorderColor="black"
                  type="password"
                  minWidth="350px"
                  onChange={handlePassword}
                />
              </FormControl>
              <FormControl
                style={{ color: "white" }}
                id="password"
                isInvalid={isErrorPass}
                isRequired
              >
                <div>
                  <FormLabel className="font-Avenir">
                    <span
                      className="text-xs float-left mb-1"
                      style={{ letterSpacing: "2px" }}
                    >
                      REPEAT PASSWORD
                    </span>
                  </FormLabel>
                </div>
                <Input
                  borderColor="white"
                  focusBorderColor="black"
                  type="password"
                  minWidth="350px"
                  onChange={handleRepeatPass}
                />
                {!isErrorPass ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Las contraseñas deben coincidir
                  </FormErrorMessage>
                )}
              </FormControl>
              <Stack spacing={10}>
                <button
                  className="font-Avenir font-bold pt-5 text-md"
                  style={{ letterSpacing: "2px", color: "white" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  CREATE ACCOUNT
                </button>

                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-700"></span>
                  <span className="text-gray-400 font-normal">or</span>
                  <span className="h-px w-16 bg-gray-700"></span>
                </div>
                <div className="flex justify-center gap-5 w-full ">
                  <div className="flex justify-center">
                    {/* <GoogleLogin
                  onSuccess={sucessGoogleResponse}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                /> */}
                  </div>
                </div>

                <Link
                  style={{ color: "white" }}
                  to="/singIn"
                  className="font-Avenir text-sm text-center hover:no-underline"
                >
                  Log In
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}

export default Register;
