import Container from '@/components/container'
import { PortableText } from '@portabletext/react'
export default function Impressum({impressum}) {
  return (
    <Container>
      <div className={"max-w-screen-md mx-auto"}>
        <h1 className={"text-2xl font-bold mb-6 text-center"}>IMPRESSUM</h1>
      <PortableText value={impressum.impressum} />
      <br/>
        <h1 className={"text-2xl font-bold mb-6 text-center"}>DATENSCHUTZ</h1>
      <PortableText value={impressum.datenschutz} />
      </div>™
    </Container>
  )
}
