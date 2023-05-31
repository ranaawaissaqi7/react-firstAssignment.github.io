
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MianContent from './components/maincontent/MianContent';
import SideBar from './components/sidebar/SideBar';
import UserCard from './components/usercard/UserCard';

function App() {
  return (
    <>
    <Header/>
    <SideBar/>
    <MianContent/>
    <UserCard/>
    <Footer/>
    </>
  );
}

export default App;
