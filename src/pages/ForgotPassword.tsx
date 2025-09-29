import ForgotPasswordComponent from '@/components/auth/forgot-password'
import { useEffect } from 'react'

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password | The Agility'
  }, [])

  return <ForgotPasswordComponent />
}

export default ForgotPassword