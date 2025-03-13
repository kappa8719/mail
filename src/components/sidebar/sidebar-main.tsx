import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { AlertCircle, Archive, Inbox, Send, SettingsIcon, Star, Tag, Trash2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useAtom } from 'jotai'
import { sidebarState } from '@/components/sidebar/state'
import { cn } from '@/lib/utils'

export function SidebarMain() {
  const [state, setState] = useAtom(sidebarState)

  return (
    <div className={cn('flex flex-col transition-all duration-500 ease-primary', state == 'main' ? '' : '-translate-x-full')} tabIndex={state == 'main' ? 0 : -1}>
      <ScrollArea className="px-2 flex-1">
        <div className="space-y-1 p-2">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <Inbox className="h-4 w-4" />
            받은 메일
            <span className="ml-auto text-xs text-muted-foreground">128</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Star className="h-4 w-4" />
            중요
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Send className="h-4 w-4" />
            보냄
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Archive className="h-4 w-4" />
            보관
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <AlertCircle className="h-4 w-4" />
            스팸
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Trash2 className="h-4 w-4" />
            쓰레기통
          </Button>
          <Separator className="my-4" />
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Tag className="h-4 w-4 text-blue-500" />일
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Tag className="h-4 w-4 text-red-500" />
            중요
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Tag className="h-4 w-4 text-green-500" />
            개인
          </Button>
        </div>
      </ScrollArea>
      <div className="px-2 mb-2">
        <Button className="w-full" onClick={() => setState('settings')}>
          <SettingsIcon />
          설정
        </Button>
      </div>
    </div>
  )
}
