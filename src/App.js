import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import Footer from "./components/Footer";
import Community from "./pages/Community";
import Travel from "./pages/Travel";
import Mypage from "./pages/Mypage";
import PlaceDetail from "./pages/PlaceDetail";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import useClickedName from './hooks/useClickedPlaceName';
import Intro from "./pages/Intro";
import Redirection from "./pages/Login/Redirection";
import LoginSuccess from "./pages/Login/LoginSuccess";


function App() {

  const { clickedName, updateClickedName } = useClickedName();

  return (
    <div className="App" style ={{width : "100%"}}>
      <BrowserRouter>
      <Header  clickedName={clickedName}/>
      <Routes>
      <Route path = "/" element ={<Intro/>} />
        <Route path = "/main" element ={<Main updateClickedName={updateClickedName} />} />
        <Route path ="/*" element = {<NotFound/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/login/callback" element = {<Redirection/>}/>
        <Route path ="/loginSuccess" element = {<LoginSuccess/>}/>
        <Route path ="/travel" element = {<Travel updateClickedName={updateClickedName} />}/>
        <Route path ="/calendar" element = {<Calendar/>}/>
        <Route path ="/community" element = {<Community/>}/>
        <Route path = "/main/:name" element = {<PlaceDetail updateClickedName={updateClickedName} />} />
        <Route path = "/travel/:name" element = {<PlaceDetail updateClickedName={updateClickedName} />}/>
        <Route path ="/mypage" element = {<Mypage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;