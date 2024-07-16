'use client'

import { Button, useAuthenticator } from '@aws-amplify/ui-react'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { signOut } = useAuthenticator((context) => [context.user])
  return (
    <section>
      <nav>
        <Button onClick={signOut} colorTheme="error" variation="primary">
          Sign out
        </Button>
      </nav>
      {children}
    </section>
  )
}
