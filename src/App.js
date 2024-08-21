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
import useClickedPlace from './hooks/useClickedPlace';
import Intro from "./pages/Intro";
import Redirection from "./pages/Login/Redirection";
import LoginSuccess from "./pages/Login/LoginSuccess";
import { PlaceProvider } from "./contexts/clickedPlaceContexts";
import Review from "./pages/Review";


function App() {

  const { clickedPlace, updateClickedPlace } = useClickedPlace(1);

  return (
    <PlaceProvider>
    <div className="App" style ={{width : "100%"}}>
      <BrowserRouter>
      <Header  clickedPlace={clickedPlace}/>
      <Routes>
      <Route path = "/" element ={<Intro/>} />
        <Route path = "/main" element ={<Main updateClickedPlace={updateClickedPlace} />} />
        <Route path ="/*" element = {<NotFound/>}/>
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/login/callback" element = {<Redirection/>}/>
        <Route path ="/loginSuccess" element = {<LoginSuccess/>}/>
        <Route path ="/travel" element = {<Travel updateClickedPlace={updateClickedPlace} />}/>
        <Route path ="/calendar" element = {<Calendar/>}/>
        <Route path ="/community" element = {<Community/>}/>
        <Route path = "/main/:id" element = {<PlaceDetail updateClickedPlace={updateClickedPlace} />} />
        <Route path = "/travel/:id" element = {<PlaceDetail updateClickedPlace={updateClickedPlace} />}/>
        <Route path ="/mypage" element = {<Mypage/>}/>
        <Route path ="/review" element = {<Review/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
    </PlaceProvider>
  );
}

export default App;