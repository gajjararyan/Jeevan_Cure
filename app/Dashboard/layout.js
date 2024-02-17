import Sidebar from "@/components/dashboard/Sidebar";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Jeevan Cure",
  description: "Health app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={inter.className}>
          <div className="flex h-screen w-full">
            <Sidebar />
            <div className="w-full">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
