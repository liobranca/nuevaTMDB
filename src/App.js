import { Route, Routes} from "react-router-dom";
import Peliculas from "./pages/Peliculas";
import PeliculasDetails from "./pages/PeliculasDetails";
import Tv from "./pages/Tv";
import "./app.css"
import SingIn from "./pages/SingIn";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";



function App() {

return (
<Routes>
  <Route path="/" element={<Peliculas/>} />
  <Route path="/tv" element={<Tv/>}/>
  <Route path="/peliculas" element={<Peliculas/>}/>
  <Route path="/peliculas/:id"element={<PeliculasDetails/>}/>
  <Route path="/singIn"element={<SingIn/>}/>
  <Route path="/register"element={<Register/>}/>
  <Route path="/perfil" element={<Perfil/>}/>
</Routes>
  );
}

export default App;
