import React from "react";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "../css/usuarios.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/getAll")
      .then((resultado) => setUsuarios(resultado.data));
  }, []);
  console.log(usuarios);

  return (
    <div>
      <NavBar />
      <TableContainer className="tabla">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombre</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usuarios[0]
              ? usuarios.map((user) => (
                  <Tr>
                    <Td><Link to={`/user/${user.id}`} >{user.id}</Link></Td>
                    <Td><Link to={`/user/${user.id}`}>{user.name}</Link></Td>
                  </Tr>
                ))
              : ""}
          </Tbody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}

export default Usuarios;
