import { useEffect } from 'react'
import SignUpComponent from '../components/auth/sign-up'

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up | The Agility'
  }, [])

  return <SignUpComponent />
}

export default SignUp