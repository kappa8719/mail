'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import React from 'react'
import { SidebarMain } from '@/components/sidebar/sidebar-main'
import { SidebarSettings } from '@/components/sidebar/sidebar-settings'
import { useAtom } from 'jotai'
import { sidebarState } from '@/components/sidebar/state'

export function Sidebar() {
  const [state, setState] = useAtom(sidebarState)

  return (
    <div className="min-w-52 w-52 lg:min-w-64 lg:w-64 flex-col h-full border-r bg-background/50 backdrop-blur-xl z-10 md:flex hidden">
      <div className="flex h-14 items-center px-4">
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <Mail className="h-5 w-5" />
          <span className="font-semibold">entropi Mail</span>
        </Button>
      </div>

      <div className="relative flex-1 items-stretch flex flex-col *:absolute *:top-0 *:bottom-0 *:w-full overflow-hidden">
        <SidebarMain />
        <SidebarSettings />
      </div>
    </div>
  )
}
