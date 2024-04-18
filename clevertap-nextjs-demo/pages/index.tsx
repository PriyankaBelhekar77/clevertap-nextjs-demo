import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import CleverTap from 'clevertap-web-sdk/clevertap'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clevertapModule, setClevertapModule] = useState<CleverTap | null>(null);

  useEffect(() => {
    clevertapInit()
  }, []);

  const clevertapInit = async () => {
    let clevertap = clevertapModule
    if (!clevertap) {
      clevertap = await initializeClevertap()
    }

    if (clevertap) {
      // clevertap.event.push('Amee')            // Popup Campaign
      // clevertap.event.push('webpopup test')   // Banner Campaign
      // clevertap.event.push('InternalTest2')   // Inbox Campaign
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2 ${inter.className}`}
    >
      This is initial page!
      <Link href="/dashboard/dashboard">Redirect to Dashboard</Link>
    </main>
  );
}

async function initializeClevertap(): Promise<CleverTap> {
  const clevertapModule = await import('clevertap-web-sdk')

  clevertapModule.default.init("TEST-9W4-KK8-WZ7Z", "in1")
  clevertapModule.default.privacy.push({ optOut: false })
  clevertapModule.default.privacy.push({ useIP: false })
  clevertapModule.default.setLogLevel(3)

  return clevertapModule.default
}
