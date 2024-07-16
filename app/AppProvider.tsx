'use client'

import { Authenticator } from '@aws-amplify/ui-react'

// add all providers to this component for better maintainability
export default function AppProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>
}
