import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./Components/MainRoute";


function App() {
  return (
    <BrowserRouter>
        <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
