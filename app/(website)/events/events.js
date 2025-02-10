import Container from '@/components/container'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import { parseISO, format } from 'date-fns'
import Link from 'next/link'

export default function Events({ events }) {
  return (
    <Container>
      <div className={'flex flex-col w-full divide-y'}>
        {events && events.map((event, index) => {
          if (event.post) {
            return (
              <Link key={index} href={`../post/${event.post?.slug?.current}`}>
                <EventRow key={index} event={event} />
              </Link>)
          }
          else {
            return <EventRow key={index} event={event} />
          }
        })}
      </div>
    </Container>
  )
}

export const EventRow = ({event}) => {
  return (
    <div className={'flex flex-row items-center border-separate my-2 py-3'} >
      <div className={'flex flex-col mr-10  font-light text-xl'}>
                <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.createdAt || event.von
                  ),
                  'dd.MM'
                )}
                </span>
        <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.createdAt || event.von
                  ),
                  'yyyy'
                )}
                </span>
      </div>
      <div className={'flex flex-col items-stretch flex-grow'}>
        <h2 className={'text-2xl font-light'}>{event.title}</h2>
        <h3 className={'text-sm font-light'}>{event.excerpt}</h3>
      </div>
    </div>
  )

}