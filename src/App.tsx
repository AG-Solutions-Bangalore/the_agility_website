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
import Blog from './pages/Blog'
import BlogDetails from './components/home/blog/BlogDetails'

import LoanLanding from './components/loan/LoanLanding'

import LoanPopup from './components/loan/LoanPopup'





function App() {
  return (
    <AuthProvider>
<LoanPopup />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog-list" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetails />} />
    
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} /> 
          <Route path="*" element={<NotFound />} />
          <Route path="loan" element={<LoanLanding />} />
        
        </Route>
        <Route path="card" element={<DigitalIdentity />} />
    
    
          
   
      </Routes>
    </AuthProvider>
  )
}

export default App