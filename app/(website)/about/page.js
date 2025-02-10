import { getAboutPages, getSettings,getAbout } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  const aboutPages = await getAboutPages();
  const about = await getAbout();
  return <About aboutPages={aboutPages} about={about}/>;
}

// export const revalidate = 60;
