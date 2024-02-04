import Navbar from './Navbar'
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/pricing":
      Component = Pricing
      break
    case "/about":
      Component = About
      break
    
  }
  return (
    <>
    <Navbar />
    <div className="container">

    <Component />
    </div>

    </>
  )
}
