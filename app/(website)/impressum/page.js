import Impressum from "./impressum";
import {getImpressum} from '@/lib/sanity/client'

export default async function ImpressumPage() {
  const impressum = await getImpressum()
  return <Impressum impressum={impressum}/>;
}

// export const revalidate = 60;
