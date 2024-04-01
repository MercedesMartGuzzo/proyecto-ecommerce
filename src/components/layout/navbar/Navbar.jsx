import "./Navbar.css";
import { AppBar, Box, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "peru", position: "static"}}>

        <ul className="lista">
          <li>
            <h2 className="logo">VIOLIN SHOP</h2>
          </li>
          <li><a href="">Intrumentos</a></li>
          <li><a href="">Cuerdas</a></li>
          <li><a href="">Accesorios</a></li>
          <li><a href="">Estuches</a></li>
         <li> <Badge badgeContent={0} color="primary" showZero={true}><AddShoppingCartIcon/></Badge></li>
        </ul>
      </AppBar>
    </Box>
  );
};
