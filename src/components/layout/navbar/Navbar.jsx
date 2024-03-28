import "./Navbar.css";
import { AppBar, Box, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "peru"}}>
        <ul className="lista">
          <li>
            <h2 className="logo">VIOLIN SHOP</h2>
          </li>
          <li>Intrumentos</li>
          <li>Cuerdas</li>
          <li>Accesorios</li>
          <li>Estuches</li>
         <li> <Badge badgeContent={0} color="primary" showZero={true}><AddShoppingCartIcon/></Badge></li>
        </ul>
      </AppBar>
    </Box>
  );
};
