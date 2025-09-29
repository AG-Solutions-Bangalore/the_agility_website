import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import toast from 'react-hot-toast'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const SocialSignIn = ({ actionText = 'Sign In' }) => {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    toast.success(`${actionText} with Google - Demo Mode`)
    signIn({ name: 'Google User', email: 'user@google.com' })
    navigate('/')
  }

  const handleGithubSignIn = () => {
    toast.success(`${actionText} with GitHub - Demo Mode`)
    signIn({ name: 'GitHub User', email: 'user@github.com' })
    navigate('/')
  }

  return (
    <div className='flex flex-col gap-4 md:flex-row md:flex items-center'>
      <button
        onClick={handleGoogleSignIn}
        className='flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer'>
        {actionText}
        <Icon icon='flat-color-icons:google' width='22' height='22' />
      </button>

      <button
        onClick={handleGithubSignIn}
        className='flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer'>
        {actionText}
        <Icon icon='logos:github-icon' width='22' height='22' />
      </button>
    </div>
  )
}

export default SocialSignIn