'use client'

import { Authenticator } from '@aws-amplify/ui-react'

export default function AppProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>
}
