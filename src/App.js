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
import Login from "./pages/Login";
import CallBack from "./components/CallBack";
import useClickedName from './hooks/useClickedPlaceName';


function App() {

  const { clickedName, updateClickedName } = useClickedName();

  return (
    <div className="App" style ={{width : "100%"}}>
      <BrowserRouter>
      <Header  clickedName={clickedName}/>
      <Routes>
        <Route path = "/main" element ={<Main updateClickedName={updateClickedName} />} />
        <Route path ="/*" element = {<NotFound/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/travel" element = {<Travel updateClickedName={updateClickedName} />}/>
        <Route path ="/calendar" element = {<Calendar/>}/>
        <Route path ="/community" element = {<Community/>}/>
        <Route path = "/main/:name" element = {<PlaceDetail updateClickedName={updateClickedName} />} />
        <Route path = "/travel/:name" element = {<PlaceDetail updateClickedName={updateClickedName} />}/>
        <Route path ="/mypage" element = {<Mypage/>}/>
        <Route path ="/login/callback" element = {<CallBack/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;