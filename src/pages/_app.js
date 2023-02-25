import '@/styles/globals.css';
import './App.scss';
import { ClerkProvider } from '@clerk/clerk-react';
import { Inter } from '@next/font/google';
import SSRProvider from 'react-bootstrap/SSRProvider';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#7447D7',
          colorText: '#271254',
          fontFamily: inter.style.fontFamily,
        },
      }}
    >
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ClerkProvider>
  );
}

export default App;
