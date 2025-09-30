import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import DigitalIdentity from './pages/DigitalIdentity'



function App() {
  return (
    <AuthProvider>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="card" element={<DigitalIdentity />} />
      </Routes>
    </AuthProvider>
  )
}

export default App