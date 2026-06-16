// app/not-found.jsx
//
// Este arquivo é reconhecido AUTOMATICAMENTE pelo Next.js App Router.
// Qualquer URL que não corresponda a uma rota existente vai renderizar este componente.
// Não precisa de nenhuma configuração adicional — só existir nesta pasta já resolve.
//
// Documentação: https://nextjs.org/docs/app/api-reference/file-conventions/not-found

import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import LoadingScreen from '@/components/common/loader';
import Navbar from '@/components/common/Navbar2';
import Footer from '@/components/common/Footer';
import Script from 'next/script';
import Error from '@/components/page-404/Error';

export const metadata = {
    title: '404 — Página não encontrada | Priscila Milanese',
    description: 'Esta página não existe. Volte para a home e continue explorando.',
    icons: {
        icon: '/assets/imgs/favicon.ico',
        shortcut: '/assets/imgs/favicon.ico',
        other: generateStylesheetObject([
            '/assets/css/plugins.css',
            '/assets/css/style.css',
            'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        ]),
    },
};

export default function NotFound() {
    return (
        <body className="home-personal">
            <LoadingScreen />
            <ProgressScroll />
            <Lines />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg o-hidden">
                        <Error />
                    </main>
                    <Footer />
                </div>
            </div>

            <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
            <Script strategy="beforeInteractive" src="/assets/js/plugins.js" />
            <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js" />
            <Script strategy="beforeInteractive" src="/assets/js/charming.min.js" />
            <Script strategy="beforeInteractive" src="/assets/js/countdown.js" />
            <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js" />
            <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js" />
            <Script strategy="beforeInteractive" src="/assets/js/isotope.pkgd.min.js" />
            <Script strategy="beforeInteractive" src="/assets/js/imgReveal/imagesloaded.pkgd.min.js" />
            <Script src="/assets/js/scripts.js" />
        </body>
    );
}