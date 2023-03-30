import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
