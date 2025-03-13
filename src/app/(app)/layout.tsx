import { Button } from '@/components/ui/button'
import {
  AlertCircle,
  Archive,
  Inbox,
  Mail,
  Send,
  SettingsIcon,
  Star,
  Tag,
  Trash2,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ReactNode } from 'react'
import { ViewTransitions } from 'next-view-transitions'
import { Sidebar } from '@/components/sidebar/sidebar'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-dvw bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <Sidebar />

      <div className="z-0 w-full">
        <ViewTransitions>{children}</ViewTransitions>
      </div>
    </div>
  )
}
