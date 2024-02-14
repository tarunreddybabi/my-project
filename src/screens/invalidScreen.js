import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/navBar";

const InvalidScreen = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/")
  }
  return (
    <>
      <NavBar />
      <h1>Invalid url please enter a valid url</h1>
      <button onClick={handleNavigate} >Click to login screen</button>
      <Footer/>
    </>
  );
};
export default InvalidScreen;
