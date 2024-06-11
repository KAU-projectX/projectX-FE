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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element ={<Main/>} />
        <Route path ="/*" element = {<NotFound/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/travel" element = {<Travel/>}/>
        <Route path ="/calendar" element = {<Calendar/>}/>
        <Route path ="/community" element = {<Community/>}/>
        <Route path = "/main/:name" element = {<PlaceDetail/>}/>
        <Route path = "/travel/:name" element = {<PlaceDetail/>}/>
        <Route path ="/mypage" element = {<Mypage/>}/>
        <Route path ="/login/callback" element = {<CallBack/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;