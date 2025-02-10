import Container from '@/components/container'
import { urlForImage } from '@/lib/sanity/image'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@/lib/sanity/plugins/portabletext'
import ThemeSiteWrapper from '@/components/themeSiteWrapper'

export default function About({ aboutPages, about }) {
  return (
    <ThemeSiteWrapper themenListe={aboutPages} siteContent={about} />
  )
}
