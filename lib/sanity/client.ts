import { apiVersion, dataset, projectId, useCdn } from './config'
import {
  postquery,
  limitquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  aboutQuery,
  eventsQuery,
  aboutPagesQuery,
  qfhPagesQuery,
  infocornerQuery,
  infocornerPagesQuery,
  getSubsiteContentQuery, pathquerySubsite, landingpageQuery,impressumQuery,heroesQuery
} from './groq'
import { createClient } from 'next-sanity'

if (!projectId) {
  console.error(
    'The Sanity Project ID is not set. Check your environment variables.'
  )
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : []
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll)
    if (!data || !data.length) {
      console.error(
        'Sanity returns empty array. Are you sure the dataset is public?'
      )
    }
  }
})()
export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || []
  }
  return []
}

export async function getAllEvents() {
  if (client) {
    return (await client.fetch(eventsQuery)) || []
  }
  return []
}


export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || []
  }
  return []
}

export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {}
  }
  return {}
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || []
    return slugs.map(slug => ({ slug }))
  }
  return []
}

export async function getAllSubsiteSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquerySubsite)) || []
    return slugs.map(slug => ({ slug }))
  }
  return []
}

// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || []
    return slugs.map(slug => ({ author: slug }))
  }
  return []
}

export async function getAuthorPostsBySlug(slug) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {}
  }
  return {}
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || []
  }
  return []
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || []
    return slugs.map(slug => ({ category: slug }))
  }
  return []
}

export async function getPostsByCategory(slug) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {}
  }
  return {}
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || []
  }
  return []
}

export async function getPaginatedPosts(limit) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: 0,
        limit: limit
      })) || {}
    )
  }
  return {}
}

// About

export async function getAbout() {
  if (client) {
    return (await client.fetch(aboutQuery)) || []
  }
  return []
}

export async function getAboutPages() {
  if (client) {
    return (await client.fetch(aboutPagesQuery)) || []
  }
  return []
}


// QFH

export async function getQfhPages() {
  if (client) {
    return (await client.fetch(qfhPagesQuery)) || []
  }
  return []
}
export async function getHeroes() {
  if (client) {
    return (await client.fetch(heroesQuery)) || []
  }
  return []
}


export async function getInfocornerPages() {
  if (client) {
    return (await client.fetch(infocornerPagesQuery)) || []
  }
  return []
}

// Subsites


export async function getSubsiteBySlug(slug) {
  if (client) {
    return (await client.fetch(getSubsiteContentQuery, { slug })) || {}
  }
  return {}
}


export async function getLandingPage() {
  if (client) {
    return (await client.fetch(landingpageQuery)) || []
  }
  return []
}

export async function getImpressum() {
  if (client) {
    return (await client.fetch(impressumQuery)) || []
  }
  return []
}