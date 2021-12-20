import Footer from "../footer/Footer";
import Navbar from "../navegacion/Navbar";
import BancaHeader from "../BancaVirtualUser/BancaHeader/BancaHeader";


export default function Layout({ children }) {
  return (
    <>
     <BancaHeader/>
    
      <Footer />
    </>
  );
}
