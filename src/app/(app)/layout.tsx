import { Button } from '@/components/ui/button'
import { AlertCircle, Archive, Inbox, Mail, Send, Star, Tag, Trash2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {ReactNode} from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-b from-background to-background/95">
      <div className="w-64 border-r bg-background/50 backdrop-blur-xl">
        <div className="flex h-14 items-center px-4">
          <Button variant="ghost" className="w-full justify-start gap-2 px-2">
            <Mail className="h-5 w-5" />
            <span className="font-semibold">entropi Mail</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)] px-2">
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
      </div>

      {children}
    </div>
  )
}
