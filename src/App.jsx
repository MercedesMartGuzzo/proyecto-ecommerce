import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";


function App() {

  return  (<div>
   <Navbar/>
   <ItemListContainer gretting={"Bienvenidos a nuestra tienda!"}/>
    </div>
  )
}

export default App;
