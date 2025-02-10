import { getAllAuthors, getSettings,getAbout } from "@/lib/sanity/client";
import Antrag from "./antrag";

export default async function AntragPage() {
  return <Antrag/>;
}

// export const revalidate = 60;
