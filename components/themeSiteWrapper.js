import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import deLocale from 'date-fns/locale/de'

export default function ThemeSiteWrapper({ themenListe, siteContent, slug, slugprefix }) {
  if (!themenListe || !siteContent || !slug ||  !slugprefix) {
    return (<div></div>)
  }

  return (


      <div className={'max-w-screen-lg m-auto flex flex-col lg:flex-row px-2 py-4  '}>
        <div className={'mt-4 flex flex-col w-full divide-black divide-y-2 lg:w-1/4 lg:pr-5 '}>
          <div></div>
          {themenListe?.map((currentThema, index) => {
            return (
              <Link key={index} href={`/${slugprefix}/${currentThema.slug.current}`} className={'flex flex-row py-2'}>
                {/*<div className={'w-2/6'}>*/}
                {/*  <h1 className={'font-arial text-sm-arial lg:text-sd-arial'}>{currentThema.abschnittsnummer}</h1>*/}
                {/*</div>*/}
                <div className={'flex flex-col font-normal text-md lg:text-lg'}>
                  {slug === currentThema.slug.current ?
                    <h2 className={'font-normal text-sm lg:text-md'}>{currentThema.title}</h2> :
                    <h2 className={'font-normal text-sm lg:text-md'}>{currentThema.title}</h2>
                  }
                </div>
              </Link>)
          })}
          <div></div>
        </div>
        <div className={'flex flex-col lg:ml-12 gap-6 px-6 py-4  lg:w-3/4 mt-4 lg:-mt-2'}>
          {siteContent}
        </div>
      </div>
    // </div>
  )
}


