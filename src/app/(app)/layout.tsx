import { ReactNode } from 'react'
import { ViewTransitions } from 'next-view-transitions'
import { Sidebar } from '@/components/sidebar/sidebar'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-dvw overflow-hidden bg-gradient-to-b from-background to-background/95">
      <Sidebar />

      <div className="z-0 w-full">
        <ViewTransitions>{children}</ViewTransitions>
      </div>
    </div>
  )
}
