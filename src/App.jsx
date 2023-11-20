import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Menu } from "./routes/Menu";
import { ContactUs } from "./routes/ContactUs";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MyCart } from "./routes/MyCart";

const theme = createTheme({
  palette: {
    primary: {
      light: '#FDDF30',
      main: '#FAC600',
      dark: '#E8B801',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
