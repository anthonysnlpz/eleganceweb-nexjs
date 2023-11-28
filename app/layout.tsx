import { inter } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className='p-10 flex justify-around items-center'>
          <p className='font-bold'>Hecho con ❤️ EleganceWeb</p>
          <p className='font-bold'>Contacto: 555-222-00</p>
          <p className='font-bold'>Ubicación: Col. Cuauhtemoc, 70660 Salina Cruz, Oax.</p>
        </footer>
      </body>
    </html>
  );
}
