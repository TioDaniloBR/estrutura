import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>    
  );
}

export default App;
