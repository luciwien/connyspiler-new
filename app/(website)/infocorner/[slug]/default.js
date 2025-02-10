import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'
import Timeline from '@/components/timeline'

export default function InfocornerPage({ infocornerPages, infocorner }) {
  let siteContent = ''

 if (infocorner?._type === 'subsite') {
    siteContent = <SubsitePage subsiteContent={infocorner} />
  } else {
    siteContent = <Timeline abschnitte={infocorner} />
  }

  return (
    <ThemeSiteWrapper themenListe={infocornerPages.subsites} siteContent={siteContent} slug={infocorner.slug.current}
                      slugprefix={'infocorner'} />
  )
}
