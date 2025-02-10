import {getSubsiteBySlug, getAllSubsiteSlugs, getQfhPages,getHeroes } from '@/lib/sanity/client'
import QfhPage from "./default";

export async function generateStaticParams() {
  return await getAllSubsiteSlugs();
}

export async function generateMetadata({ params }) {
  const subsite = await getSubsiteBySlug(params.slug);
  return { title: subsite.title };
}

export default async function InfocornerDefault({ params }) {
  const qfhPages = await getQfhPages();
  const heroes = await getHeroes();
  const qfh = await getSubsiteBySlug(params.slug);
  return <QfhPage qfhPages={qfhPages} qfh={qfh} heroes={heroes}/>;
}

// export const revalidate = 60;
