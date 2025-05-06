'use client'

import { Button } from '@/components/ui/button'
import { Archive, Settings, Trash2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import React from 'react'
import { useTransitionRouter } from 'next-view-transitions'

export default function Page() {
  const router = useTransitionRouter()

  return (
    <div className="flex h-full w-full animate-in fade-in duration-500 slide-in-from-left-[10%] ease-primary">
      {/* Main Content */}
      <div className="flex w-full flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 min-h-14 items-center justify-between border-b bg-background/50 px-6 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Inbox</h1>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              128
            </span>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </header>

        {/* Email List */}
        <ScrollArea className="flex flex-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <Button
              key={i}
              onClick={() => router.push('/view/1')}
              className={cn(
                'flex h-auto max-w-[100dvw] w-full flex-col items-start rounded-none border-b p-3 hover:bg-muted/50 hover:after:rounded-none md:flex-row md:items-center md:gap-4 md:p-4',
                i === 0 && 'bg-muted/30',
              )}
            >
              <div className="flex w-full text-base font-medium md:w-auto">
                Vercel Team
                <div className="ml-auto mr-2 text-xs text-muted-foreground md:hidden">12:42 PM</div>
              </div>
              <div className="max-w-full flex-1 overflow-hidden text-ellipsis text-start text-sm text-muted-foreground">
                Your weekly project summary and latest deployment updates...
              </div>
              <div className="hidden text-xs text-muted-foreground md:block">12:42 PM</div>
            </Button>
          ))}
        </ScrollArea>
      </div>

      {/* Email Preview */}
      <div className="hidden w-[600px] border-l bg-background/50 backdrop-blur-xl lg:block">
        <div className="flex h-14 items-center justify-between border-b px-6">
          <h2 className="font-semibold">Email Preview</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)] p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Your weekly project summary</h3>
              <p className="text-sm text-muted-foreground">From Vercel Team · 12:42 PM</p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Hi there,</p>
              <p>
                Here&#39;s your weekly summary of project activities and deployment updates. We&#39;ve
                noticed some great improvements in your application performance.
              </p>
              <p>
                Your latest deployment is running smoothly with a 99.9% uptime and improved loading
                times across all pages.
              </p>
              <p>
                Best regards,
                <br />
                The Vercel Team
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
