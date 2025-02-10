import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'
import Timeline from '@/components/timeline'

export default function AboutPage({ aboutPages, about }) {
  let siteContent = ''

  if (about?._type === 'subsite') {
    siteContent = <SubsitePage subsiteContent={about} />
  } else {
    siteContent =

      <div>
        <h1 className={'font-bold text-lg lg:text-xl mb-3'}>UNSERE GESCHICHTE</h1>
        <p>2007 trafen sich die offen lesbischen und schwulen Fußballfanclubs erstmals zu einem internationalen
          Vernetzungstreffen. 2009 beschlossen sie, als QFF eine Vereinsstruktur aufzubauen. Um die queeren Fußballfans
          zu unterstützen und gemeinsam mit cis-hetero Fans ein Zeichen gegen Homophobie zu setzen, gründete sich 2011
          der Verein “Fußballfans gegen Homophobie Deutschland” und analog 2015 unser Verein “Fußballfans gegen
          Homophobie Österreich”. Zehn Jahre später vereinen wir in unserem Tun Queere Fußballfans und Fußballfans gegen
          LGBTIQA+-Feindlichkeit.

          Wir sind österreichische Fußballfans. Manche von uns sind queer. Alle setzen sich für einen
          LGBTIQA+-inklusiven Fußball ein.
        </p>
        <Timeline abschnitte={about} />
      </div>
  }

  return (
    <ThemeSiteWrapper themenListe={aboutPages.subsites} siteContent={siteContent} slug={about.slug.current}
                      slugprefix={'about'} />
  )
}
