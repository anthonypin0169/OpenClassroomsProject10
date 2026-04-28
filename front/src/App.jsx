import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import SignIn from './pages/sign-in/sign-in'
import User from './pages/user/user'
import ProtectedRoute from "./store/protectedRoute"

  function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

  export default App