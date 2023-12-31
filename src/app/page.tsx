import Agencia from "./components/Agencia";
import Avaliacao from "./components/Avaliacao";
import BestService from "./components/BestService";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <>
      <Main />
      <BestService />
      <Solutions />
      <Agencia />
      <Avaliacao />
      <Footer />
    </>
  )
}