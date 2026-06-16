import './globals.css';
import EbookPopupWrapper from '@/components/ebook/EbookPopupWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {children}
      {/* Popup do ebook — aparece uma vez por sessão em qualquer página */}
      <EbookPopupWrapper />
    </html>
  );
}