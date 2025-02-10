import { getSettings, getAboutPages, getQfhPages, getInfocornerPages } from '@/lib/sanity/client'
import Footer from '@/components/footer'
import { urlForImage } from '@/lib/sanity/image'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import Countdown from '@/components/countdown'

export async function sharedMetaData(params) {
  const settings = await getSettings()

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        'Stablo - Blog Template for Next.js & Sanity CMS',
      template: '%s | Stablo'
    },
    description:
      settings?.description ||
      'Stablo - popular open-source next.js and sanity blog template',
    keywords: ['Next.js', 'Sanity', 'Tailwind CSS'],
    authors: [{ name: 'Surjith' }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            '/img/opengraph.jpg',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || 'Stablo Template',
      card: 'summary_large_image'
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params)
}

export default async function Layout({ children, params }) {
  const settings = await getSettings()
  const aboutPages = await getAboutPages()
  const qfhPages = await getQfhPages()
  const infocornerPages = await getInfocornerPages()
  return (
    <div className={"bg-white/50"}>
      <Navbar settings={settings} aboutPages={aboutPages.subsites} qfhPages={qfhPages.subsites}
              infocornerPages={infocornerPages.subsites} />

      <div>{children}</div>

      <Footer {...settings} />

      <Analytics />
    </div>


  )
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
