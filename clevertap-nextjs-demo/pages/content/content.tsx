import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Content() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2 ${inter.className}`}
    >
      This is content page!
      <Link href="/dashboard/dashboard">Redirect to Dashboard</Link>
    </main>
  );
}
