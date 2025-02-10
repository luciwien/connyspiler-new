import { groq } from 'next-sanity'

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
...,
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  excerpt, 
  slug,
  featured,
  title,
  author-> {
    _id,
    image,
    slug,
    name
  },
  categories[]->,
}
`
// Get all posts with 0..limit

export const eventsQuery = groq`
*[_type == "events"] | order(von desc, bis desc) {
...,
post->{slug}
}
`
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  categories[]->
}
`
// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  author->,
  categories[]->
}
`

// Get Site Config
export const configQuery = groq`
*[_type == "settings"][0] {
  ...,
}
`

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  url,
  abgerufen,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`

// Paths for generateStaticParams
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
// Paths for generateStaticParams
export const pathquerySubsite = groq`
*[_type in ["subsite","timeline"] && defined(slug.current)][].slug.current
`
export const catpathquery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`

// Get top 5 categories
export const catquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  author->,
  categories[]->,
   title,
   slug
}`

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
}
`

// get everything from sanity
// to test connection
export const getAll = groq`*[]`


// About

export const aboutQuery = groq`
*[_type == "about"][0] {
  ...,
}
`
export const impressumQuery = groq`
*[_type == "impressum"][0] {
  ...,
}
`

export const aboutPagesQuery = groq`
*[_type == "about"][0] {  
subsites[]->{
  title,slug
}
}
`

// QFH


export const qfhQuery = groq`
*[_type == "queerfootballheroes"][0] {
  ...,
}
`


export const qfhPagesQuery = groq`
*[_type == "queerfootballheroes"][0] {  
subsites[]->{
  title,slug
}
}
`

export const heroesQuery = groq`
*[_type == "heroes"] {  
...,
mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
}
`

//Infocorner

export const infocornerQuery = groq`
*[_type == "infocorner"][0] {
  ...,
}
`


export const infocornerPagesQuery = groq`
*[_type == "infocorner"][0] {  
subsites[]->{
  title,slug
}
}
`
// get Subsites
export const getSubsiteContentQuery = groq`
*[_type in ["subsite","timeline"] && slug.current == $slug][0]{
  ...,
  slug
}
`

export const landingpageQuery = groq`
*[_type == "landingpage"][0] {
  ...,
  title,
  subtitle,
  aboutTitle,
  aboutBeschreibung,
  aboutImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  doingsTitle,
  doingsBeschreibung,
  doingsImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
}
`