import { Outfit } from 'next/font/google';
import './globals.css';

// compoenents
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: "Ryan Cerney's Portfolio",
  description: 'Personal portfolio for Ryan Cerney',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
