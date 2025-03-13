import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { CogIcon, Inbox, StepBackIcon } from 'lucide-react'
import { sidebarState } from '@/components/sidebar/state'
import { useAtom } from 'jotai/index'
import { cn } from '@/lib/utils'

export function SidebarSettings() {
  const [state, setState] = useAtom(sidebarState)

  return (
    <div
      className={cn(
        'flex flex-col transition-all duration-500 ease-primary',
        state == 'settings' ? '' : 'translate-x-full',
      )}
    >
      <ScrollArea className="px-2 flex-1">
        <div className="space-y-1 p-2">
          <Button className="w-full justify-start gap-2" disabled>
            <CogIcon className="h-4 w-4" />
            고급 설정
          </Button>
        </div>
      </ScrollArea>
      <div className="px-2 mb-2">
        <Button className="w-full" onClick={() => setState('main')}>
          <StepBackIcon />
          완료
        </Button>
      </div>
    </div>
  )
}
