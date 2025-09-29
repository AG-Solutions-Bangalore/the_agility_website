import { useEffect } from 'react'
import SignInComponent from '../components/auth/sign-in'

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In | The Agility'
  }, [])

  return <SignInComponent />
}

export default SignIn