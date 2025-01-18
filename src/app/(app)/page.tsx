import { Button } from '@/components/ui/button'
import { Archive, Settings, Trash2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export default function Page() {
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b px-6 bg-background/50 backdrop-blur-xl">
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
        <ScrollArea className="flex-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'flex cursor-pointer items-center gap-4 border-b p-4 hover:bg-muted/50',
                i === 0 && 'bg-muted/30',
              )}
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="min-w-[180px] font-medium">Vercel Team</div>
              <div className="flex-1 text-muted-foreground">
                Your weekly project summary and latest deployment updates...
              </div>
              <div className="text-sm text-muted-foreground">12:42 PM</div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Email Preview */}
      <div className="w-[600px] border-l bg-background/50 backdrop-blur-xl">
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
                Here's your weekly summary of project activities and deployment updates. We've
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
    </>
  )
}
