import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
});


const paulSlab = localFont({
  src: [
    {
      path: '../public/fonts/PaulSlab-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PaulSlab-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-paul-slab',
});
export const metadata: Metadata = {
  title: "Innovation Growth Hub",
  description: "We drive business growth with smart tech solutions, equip individuals with in-demand digital skills, and support startups in building the future",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${paulSlab.variable}`}>
      <body className="font-body antialiased text-slate-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}