import {getSubsiteBySlug, getAllSubsiteSlugs, getInfocornerPages } from '@/lib/sanity/client'
import InfocornerPage from "./default";

export async function generateStaticParams() {
  return await getAllSubsiteSlugs();
}

export async function generateMetadata({ params }) {
  const subsite = await getSubsiteBySlug(params.slug);
  return { title: subsite.title };
}

export default async function InfocornerDefault({ params }) {
  const infocornerPages = await getInfocornerPages();
  const infocorner = await getSubsiteBySlug(params.slug);
  return <InfocornerPage infocornerPages={infocornerPages} infocorner={infocorner}/>;
}

// export const revalidate = 60;
