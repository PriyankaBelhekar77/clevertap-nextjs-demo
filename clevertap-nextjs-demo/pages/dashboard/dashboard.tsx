import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2 ${inter.className}`}
    >
      This is dashboard page!
      <Link href="/content/content">Redirect to Content</Link>
    </main>
  );
}
