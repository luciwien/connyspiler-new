import Image from 'next/image'
import Link from 'next/link'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity/image'
import Iframe from 'react-iframe'
import getVideoId from 'get-video-id'
import { cx } from '@/utils/all'

import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import jsx from 'refractor/lang/jsx'
import html from 'refractor/lang/markup'
import css from 'refractor/lang/css'
import bash from 'refractor/lang/bash'

Refractor.registerLanguage(js)
Refractor.registerLanguage(jsx)
Refractor.registerLanguage(html)
Refractor.registerLanguage(css)
Refractor.registerLanguage(bash)

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={urlForImage(value)}
      alt={value.alt || 'Image'}
      loading='lazy'
      className='object-cover'
      sizes='(max-width: 800px) 100vw, 800px'
    />
  )
}

// Barebones lazy-loaded image component
const VideoComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <video width='320' height='240' controls preload='none'>
      <source src='/path/to/video.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
)
}
const PortableTextTable = ({ value }) => {
  const [head, ...rows] = value.table.rows

  return (
    <table>
      {head.cells.filter(Boolean).length > 0 && (
        <thead>
        <tr>
          {head.cells.map(cell => (
            <th key={cell}>{cell}</th>
          ))}
        </tr>
        </thead>
      )}
      <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.cells.map((cell, index) => {
            return <td className={'text-left h-12 px-4 py-2'} style={{ verticalAlign: 'top' }} key={cell}>{cell}</td>
          })}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

const Code = ({ value }) => {
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language={value.language || 'bash'}
      value={value.code}
      markers={value.highlightedLines}
    />
  )
}


const IframePreview = ({ value }) => {
  const { url, height } = value
  if (!url) {
    return <p>Missing Embed URL</p>
  }
  const { id, service } = getVideoId(url)

  const isYoutubeVideo = id && service === 'youtube'

  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url

  return (
    <Iframe
      url={finalURL}
      width='100%'
      height={height || '350'}
      className={cx(!height && 'aspect-video', 'rounded-md')}
      display='block'
      position='relative'
      frameBorder='0'
      allowfullscreen
      loading='lazy'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
    />
  )
}

const components = {
  types: {
    image: ImageComponent,
    code: Code,
    embed: IframePreview,
    tables: PortableTextTable
  },
  marks: {
    center: props => (
      <div className='text-center'>{props.children}</div>
    ),
    highlight: props => (
      <span className='font-bold text-blue-500'>
        {props.children}
      </span>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener'
        : undefined
      const target = !value.href.startsWith('/')
        ? '_blank'
        : undefined
      return (
        <a className='bg-brand-secondary/20 rounded-full text-md text-blue-600 dark:text-blue-500'
           href={value.href} rel={rel} target={target}>
          {children}
        </a>
      )
    },
    assetReference: ({ children, value }) => {
      // The file reference in the asset object has the form <_file>-<id>-<extension>
      // We split the text string to get the individual pieces of information.
      const [_file, id, extension] = value.file.asset._ref.split('-');
      // The URL to access your file should be of the form
      // https://cdn.sanity.io/files/{PROJECT_ID}/{DATASET}/{FILE ID}.{FILE EXTENSION}
      return (
        <a className='bg-brand-secondary/20 rounded-full text-md text-blue-600 dark:text-blue-500' href={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}?dl=${id}.${extension}`}>
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return (
        <Link href={`/post/${value?.slug?.current}`}>{children}</Link>
      )
    },

  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children,value }) => {
      const styleType = value.level === 2 ? 'circle' : 'disc'
      return(<ul className={cx('list-disc', 'pl-12')} style={{listStyle: "outside", listStyleType: styleType,paddingLeft: 3 + "rem"}}>{children}</ul>)},
    number: ({ children }) => <ol className='list-decimal mt-lg'>{children}</ol>,

  },
  block:{
    infobox: ({children}) => {
      return <span style={{padding: 16 + "px", backgroundColor: "rgb(253 230 138);"}} className={"text-center bg-fuchsia-400 rounded-lg"}>{children}</span>
    },
    h2: ({children}) => {
      return <h2 className={"text-lg lg:text-xl"}>{children}</h2>
    },
    h3: ({children}) => {return <h3 className={"font-semibold text-md lg:text-lg"}>{children}</h3>},
    h4: ({children}) => {return <h4 className={"text-md lg:text-lg"}>{children}</h4>},
  }

}
// Set up Portable Text serialization
export const PortableText = props => (
  <PortableTextComponent components={components} {...props} />
)
