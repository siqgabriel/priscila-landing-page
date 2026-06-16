'use client';
// Este wrapper existe por uma única razão:
// o layout.js é um Server Component e não pode importar
// diretamente componentes que usam hooks (useEffect, useState).
// Este arquivo marca a fronteira 'use client' para o Next.js.

import EbookPopup from './EbookPopup';

export default function EbookPopupWrapper() {
  return <EbookPopup />;
}