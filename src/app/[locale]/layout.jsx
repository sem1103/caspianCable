import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";



export function generateMetadata({ params }) {

  const metadata = {
    ru: {
      authors: { name: 'Caspian Cable' },
      title: "Главная страница - Caspian Cable",
      description: "Caspian Cable — надежный лидер в производстве кабельной продукции в Азербайджане! Высокое качество, передовые технологии и решения, которые двигают ваш бизнес вперед. Выбирайте лучшее для своих проектов!",
      openGraph: {
        title: 'Главная страница - Caspian Cable',
        description: 'Caspian Cable — надежный лидер в производстве кабельной продукции в Азербайджане! Высокое качество, передовые технологии и решения, которые двигают ваш бизнес вперед. Выбирайте лучшее для своих проектов!',
        url: 'https://caspiancable.com/ru',
        siteName: 'Caspian Cable',
        images: [{ url: '/assets/img/logo.svg' }],
        locale: 'ru',
        type: 'website',
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
          'en-EN': '/en',
          'tr-TR': '/tr',
          'it-IT': '/it',
        },
      },
      verification: { google: "123" },
    },
    az: {
      authors: { name: 'Caspian Cable' },
      title: "Ana Səhifə - Caspian Cable",
      description: "Caspian Cable — Azərbaycanda kabel məhsullarının etibarlı lideri! Yüksək keyfiyyət, qabaqcıl texnologiyalar və layihələriniz üçün mükəmməl həllər təklif edir.",
      openGraph: {
        title: 'Ana Səhifə - Caspian Cable',
        description: 'Caspian Cable — Azərbaycanda kabel məhsullarının etibarlı lideri! Yüksək keyfiyyət, qabaqcıl texnologiyalar və layihələriniz üçün mükəmməl həllər təklif edir.',
        url: 'https://caspiancable.com/az',
        siteName: 'Caspian Cable',
        images: [{ url: '/assets/img/logo.svg' }],
        locale: 'az',
        type: 'website',
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
          'en-EN': '/en',
          'tr-TR': '/tr',
          'it-IT': '/it',
        },
      },
      verification: { google: "123" },
    },
    en: {
      authors: { name: 'Caspian Cable' },
      title: "Home Page - Caspian Cable",
      description: "Caspian Cable — a trusted leader in cable manufacturing in Azerbaijan! High quality, advanced technologies, and solutions that drive your projects forward.",
      openGraph: {
        title: 'Home Page - Caspian Cable',
        description: 'Caspian Cable — a trusted leader in cable manufacturing in Azerbaijan! High quality, advanced technologies, and solutions that drive your projects forward.',
        url: 'https://caspiancable.com/en',
        siteName: 'Caspian Cable',
        images: [{ url: '/assets/img/logo.svg' }],
        locale: 'en',
        type: 'website',
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
          'en-EN': '/en',
          'tr-TR': '/tr',
          'it-IT': '/it',
        },
      },
      verification: { google: "123" },
    },
    tr: {
      authors: { name: 'Caspian Cable' },
      title: "Ana Sayfa - Caspian Cable",
      description: "Caspian Cable — Azerbaycan'da kablo üretiminde güvenilir lider! Yüksek kalite, yenilikçi teknolojiler ve projeleriniz için mükemmel çözümler.",
      openGraph: {
        title: 'Ana Sayfa - Caspian Cable',
        description: 'Caspian Cable — Azerbaycan\'da kablo üretiminde güvenilir lider! Yüksek kalite, yenilikçi teknolojiler ve projeleriniz için mükemmel çözümler.',
        url: 'https://caspiancable.com/tr',
        siteName: 'Caspian Cable',
        images: [{ url: '/assets/img/logo.svg' }],
        locale: 'tr',
        type: 'website',
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
          'en-EN': '/en',
          'tr-TR': '/tr',
          'it-IT': '/it',
        },
      },
      verification: { google: "123" },
    },
    it: {
      authors: { name: 'Caspian Cable' },
      title: "Pagina Principale - Caspian Cable",
      description: "Caspian Cable — leader affidabile nella produzione di cavi in Azerbaigian! Alta qualità, tecnologie innovative e soluzioni perfette per i vostri progetti.",
      openGraph: {
        title: 'Pagina Principale - Caspian Cable',
        description: 'Caspian Cable — leader affidabile nella produzione di cavi in Azerbaigian! Alta qualità, tecnologie innovative e soluzioni perfette per i vostri progetti.',
        url: 'https://caspiancable.com/it',
        siteName: 'Caspian Cable',
        images: [{ url: '/assets/img/logo.svg' }],
        locale: 'it',
        type: 'website',
      },
      alternates: {
        canonical: '/',
        languages: {
          'az-AZ': '/az',
          'ru-RU': '/ru',
          'en-EN': '/en',
          'tr-TR': '/tr',
          'it-IT': '/it',
        },
      },
      verification: { google: "123" },
    },
  };

  return metadata[params.locale ]; 
}


export default async function RootLayout({ children , params: { locale }}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </head>
      <body >
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
