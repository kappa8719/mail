import { Button } from '@/components/ui/button'
import { Archive, Trash2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Page() {
  return (
    <>
      <div className="bg-background/50 backdrop-blur-xl w-full animate-in fade-in duration-500 slide-in-from-right-[10%] ease-primary">
        <div className="flex h-14 items-center justify-between border-b px-6">
          <h2 className="font-semibold">Vercel</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)] min-h-full p-6">
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
    </>
  )
}
