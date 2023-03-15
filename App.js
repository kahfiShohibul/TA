import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Database from './components/Database';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/database" element={<Database/>}/>
            
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
