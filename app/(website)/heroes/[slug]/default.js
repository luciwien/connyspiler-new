import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'
import { notFound } from 'next/navigation'
import { PortableText } from '@/lib/sanity/plugins/portabletext'
import { urlForImage } from '@/lib/sanity/image'
import { parseISO, format } from 'date-fns'

import CategoryLabel from '@/components/blog/category'
import AuthorCard from '@/components/blog/authorCard'

export default function Post(props) {
  const { loading, post } = props

  const slug = post?.slug

  if (!loading && !slug) {
    notFound()
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null

  return (
    <>
      <Container className='!pt-0'>
        <div className='mx-auto max-w-screen-md '>
          <div className='flex justify-center'>
            <CategoryLabel categories={post.categories} />
          </div>

          <h1
            className='text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
            {post.title}
          </h1>

          <div className='mt-3 flex justify-center space-x-3 text-gray-500'>
            <div className='flex items-center gap-3'>
              <div className='relative h-10 w-10 flex-shrink-0'>
                {AuthorimageProps && (
                  <Image
                    src={AuthorimageProps.src}
                    alt={post?.author?.name}
                    className='rounded-full object-cover'
                    fill
                    sizes='40px'
                  />
                )}
              </div>
              <div>
                <p className='text-gray-800 dark:text-gray-400'>
                  {post.author.name}
                </p>
                <div className='flex items-center space-x-2 text-sm'>
                  <time
                    className='text-gray-500 dark:text-gray-400'
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      'MMMM dd, yyyy'
                    )}
                  </time>
                  <span>· {post.estReadingTime || '5'} min read</span>
                </div>
              </div>
            </div>
          </div>
          {post.url &&
            <div className='flex flex-col items-center justify-center mt-6 px-6'>
              <Link
                href={post.url}
                className='border-blue-500 border-2 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 '>
                Original Artikel abrufen →
              </Link>
              <Abgerufen abgerufen={post.abgerufen} />
            </div>
          }
        </div>

      </Container>
      <Container>
        <div className='relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg'>
          {imageProps && (
            <Image
              src={imageProps.src}
              alt={post.mainImage?.alt || 'Thumbnail'}
              loading='eager'
              fill
              sizes='100vw'
              className='object-cover'
            />
          )}
        </div>

        <div className={'mt-2'}>
          <p>{post.mainImage?.description}</p>
          <p className={'lg:text-left text-sm text-gray-500 dark:text-gray-600'}> {post.mainImage?.copyright}</p>
        </div>
      </Container>

      <Container>
        <article className='mx-auto max-w-screen-md '>
          <div className='prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600'>
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className='mb-7 mt-7 flex justify-center'>
            <Link
              href='/'
              className='bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 '>
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </>
  )
}

const MainImage = ({ image }) => {
  return (
    <div className='mb-12 mt-12 '>
      <Image {...urlForImage(image)} alt={image.alt || 'Thumbnail'} />
      <figcaption className='text-center '>
        {image.caption && (
          <span className='text-sm italic text-gray-600 dark:text-gray-400'>
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  )
}

const Abgerufen = ({ abgerufen }) => {

  if (abgerufen) {
    return (<p
      className='mx-auto bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-gray-500 dark:text-white  '>
      Status:&nbsp;
      <time
        className='text-gray-500 dark:text-gray-400'
        dateTime={abgerufen}>
        {format(
          parseISO(abgerufen),
          'MMMM dd, yyyy'
        )}
      </time>
    </p>)
  } else {
    return 'oida'
  }
}