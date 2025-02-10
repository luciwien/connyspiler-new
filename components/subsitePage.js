import {parseISO, format} from "date-fns";
import { PortableText } from '@/lib/sanity/plugins/portabletext'
import  deLocale from 'date-fns/locale/de'

export default function SubsitePage({ subsiteContent }) {
  const date = format(parseISO(subsiteContent?.publishedAt), 'MMMM yyyy', { locale: deLocale })

  return (
    <>
      <h1 className={'font-bold text-lg lg:text-xl'}>{subsiteContent?.title?.toUpperCase()}</h1>
      {subsiteContent && <PortableText value={subsiteContent.body} />}

      <div className={'font-light text-sm lg:text-sm'}>
        {`Status: ${date.split(' ')[0]} ${date.split(' ')[1]} · Änderungen an diesen Ansichten bleiben vorbehalten und sind erwünscht. 
                Mit der Zeit nicht dazu lernen, das wäre ein Fehler.`}
      </div>
    </>


  )

}