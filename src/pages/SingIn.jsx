import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import { useState } from "react";
import axios from "axios";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleEmail= (e)=>{
    setEmail(e.target.value)
  }
  const handlePass= (e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post(`http://localhost:3001/api/users/login`, {
      email,
      password,
    }).then((res) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.name,
          id: res.data.id,
          email: res.data.email,
          lastname: res.data.lastname
        }))
    })
    .then(()=> navigate("/perfil"))
    .catch(()=> alert("Email y contraseña no coinciden"))
    

    
    
  }
  const isErrorEmail = email === "";
  const isErrorPass = password === "";
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
                      PASSWORD
                    </span>
                  </FormLabel>
                </div>
                <Input
                  borderColor="white"
                  focusBorderColor="black"
                  type="password"
                  minWidth="350px"
                  onChange={handlePass}
                />
                {!isErrorPass ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Password es necesaria</FormErrorMessage>
                )}
              </FormControl>
              <Stack spacing={10}>
                <button
                  className="font-Avenir font-bold pt-5 text-md"
                  style={{ letterSpacing: "2px", color: "white" }}
                  onClick={handleSubmit}
                >
                  SIGN IN
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
                  to="/register"
                  className="font-Avenir text-sm text-center hover:no-underline"
                >
                  Create account
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

export default SingIn;
