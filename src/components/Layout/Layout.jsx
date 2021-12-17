import Footer from "../footer/Footer";
import Navbar from "../navegacion/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
