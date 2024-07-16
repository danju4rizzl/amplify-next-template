'use client'

import { redirect } from 'next/navigation'

import { Amplify } from 'aws-amplify'
import outputs from '@/amplify_outputs.json'
import {
  Authenticator,
  Image,
  Link,
  Text,
  useAuthenticator,
  useTheme,
  View
} from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'
import './../app/app.css'

Amplify.configure(outputs)

/**
 * @description The authComponents is used to customize the Authenticator component
 */
const authComponents = {
  Header() {
    return (
      <View textAlign={'center'}>
        <Image
          alt="deejaydev logo"
          src="https://res.cloudinary.com/deejaydev/image/upload/v1685435440/deejaydev/DeejayDev_512_-_DarkGREEN_-_2022_egcvmt.svg"
          width={50}
        />
      </View>
    )
  },

  Footer() {
    const { tokens } = useTheme()

    return (
      <View textAlign="center" padding="medium">
        <Text color={tokens.colors.neutral[80]} fontSize={'small'}>
          &copy; {new Date().getFullYear()} All Rights Reserved{' '}
          <Link href="https://deejaydev.work" target="_blank">
            Deejaydev
          </Link>
        </Text>
      </View>
    )
  }
}

export default function App() {
  const { route, isPending } = useAuthenticator((context) => [context.route])

  return (
    <div>
      {isPending && <p>Loading... </p>}
      {route === 'authenticated' ? (
        redirect('/dashboard')
      ) : (
        <Authenticator
          socialProviders={['google']}
          components={authComponents}
        />
      )}
    </div>
  )
}
