import { Route, Routes} from "react-router-dom";
import Peliculas from "./pages/Peliculas";
import PeliculasDetails from "./pages/PeliculasDetails";
import Tv from "./pages/Tv";
import "./app.css"
import SingIn from "./pages/SingIn";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";
import Search from "./pages/Search";
import Usuarios from "./pages/Usuarios";
import Usuario from "./pages/Usuario";


function App() {

return (
<Routes>
  <Route path="/" element={<Peliculas/>} />
  <Route path="/shows/:tvParams" element={<Tv/>}/>
  <Route path="/peliculas/:movieParams" element={<Peliculas/>}/>
  <Route path="/:movieOrTvDetails/:id"element={<PeliculasDetails/>}/>
  <Route path="/singIn"element={<SingIn/>}/>
  <Route path="/register"element={<Register/>}/>
  <Route path="/perfil" element={<Perfil/>}/>
  <Route path="/search/:movieOrTv/:search" element={<Search/>}/>
  <Route path="/usuarios"element={<Usuarios/>}/>
  <Route path="/user/:id"element={<Usuario/>}/>
</Routes>
  );
}

export default App;
