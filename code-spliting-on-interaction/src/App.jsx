import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react'; 
import { Navbar } from './components/Navbar';

// import { About } from './pages/About';
// import { Contact } from './pages/Contact';
// import { FAQs } from './pages/FAQs';
// import { Login } from './pages/Login';
// import { Profile } from './pages/Profile';
// import { Home } from './pages/Home';

const Home =  lazy(()=> import('./pages/Home'))
const About =  lazy(()=> import('./pages/About'))
const Contact =  lazy(()=> import('./pages/Contact'))
const FAQs =  lazy(()=> import('./pages/FAQs'))
const Login =  lazy(()=> import('./pages/Login'))
const Profile =  lazy(()=> import('./pages/Profile'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Suspense fallback={<div> Loading HomePage...</div>}> <Home /> </Suspense>} />
        <Route path="/about" element={ <Suspense fallback={<div> Loading AboutPage...</div>}> <About /> </Suspense>} />
        <Route path="/contact" element={ <Suspense fallback={<div> Loading ContactPage...</div>}> <Contact /> </Suspense>} />
        <Route path="/faqs" element={ <Suspense fallback={<div> Loading FAQsPage...</div>}> <FAQs /> </Suspense>} />
        <Route path="/login" element={ <Suspense fallback={<div> Loading LoginPage...</div>}> <Login /> </Suspense>} />
        <Route path="/profile" element={ <Suspense fallback={<div> Loading ProfilePage...</div>}> <Profile /> </Suspense>} />
        <Route path="/*" element={ <Suspense fallback={<div> Loading NotFoundPage...</div>}> <h1 className="text-red-400 bg-black">Not found</h1> </Suspense>} />
      </Routes>
    </>
  )
}

export default App
