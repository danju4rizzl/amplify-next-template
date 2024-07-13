'use client'

import { redirect } from 'next/navigation'
import AppProvider from './AppProvider'

import { Amplify } from 'aws-amplify'
import outputs from '@/amplify_outputs.json'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'
import './../app/app.css'

Amplify.configure(outputs)

export default function App() {
  const { route } = useAuthenticator((context) => [context.route])

  return (
    <AppProvider>
      {route === 'authenticated' ? redirect('/dashboard') : <Authenticator />}
    </AppProvider>
  )
}
