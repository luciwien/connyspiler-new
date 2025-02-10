import Link from 'next/link'
import Container from '@/components/container'
import PostList from '@/components/postlist'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {urlForImage} from '@/lib/sanity/image'
import {PhotoIcon} from "@heroicons/react/24/outline";
import landingpage from "@/lib/sanity/schemas/landingpage";

export default function LandingPage({landingPage}) {
	const posts = landingPage.articles
	const topics = landingPage.subsites

	const aboutPic = landingPage?.aboutImage
		? urlForImage(landingPage?.aboutImage)
		: null
	const doingsPic = landingPage?.doingsImage
		? urlForImage(landingPage?.doingsImage)
		: null


	return (<>
			<div>
				<Container>
					<div className={'flex flex-col justify-evenly align-around '}>
						<h1
							className={'mt-2 mb-3 text-3xl text-center font-semibold tracking-tight lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'}>{landingPage.title}</h1>
						<p className={'text-center text-lg'}>{landingPage.subtitle}</p>
					</div>
				</Container>
			</div>
			<section id={"about"}>
				<Container>
					<div className='flex flex-col-reverse flex-wrap items-center pt-16 lg:flex-row'>

						<div className="relative w-full lg:w-1/2 max-h-80 aspect-square">
							{aboutPic && (
								<Image
									src={aboutPic.src}
									alt={'Thumbnail'}
									loading='eager'
									fill
									sizes='100vw'
									className='object-cover'
								/>
							)}
						</div>
						<div className={'mr-auto ml-auto w-full px-4 md:w-5/12'}>
							<h1
								className={'text-4xl font-medium text-grey-600 mb-6'}>
								{landingPage.aboutTitle}
							</h1>

							<PortableText value={landingPage.aboutBeschreibung}/>
						</div>
					</div>
				</Container>
			</section>
			<section id={"doings"}>
				<Container>
					<div className='flex flex-col-reverse flex-wrap items-center pt-16 lg:flex-row-reverse'>

						<div className="relative w-full lg:w-1/2 max-h-80 aspect-square">
							{doingsPic && (
								<Image
									src={doingsPic.src}
									alt={'Thumbnail'}
									loading='eager'
									fill
									sizes='100vw'
									className='object-cover'
								/>
							)}
						</div>
						<div className={'mr-auto ml-auto w-full px-4 md:w-5/12'}>
							<h1
								className={'text-4xl font-medium text-grey-600 mb-6'}>
								{landingPage.doingsTitle}
							</h1>

							<PortableText value={landingPage.doingsBeschreibung}/>
						</div>
					</div>

				</Container>
			</section>
			<section id={"gallery"}>
				<Container>
					<div className={'flex flex-col mx-auto '}>
						<h1
							className={'text-4xl font-medium text-grey-600 mb-6 mx-auto'}>
							{"Gallery"}
						</h1>
						<Link
						href={"https://drive.google.com/drive/folders/1-0WhHetqqjIH9JUcTxEvQNwVqsOEywRF"}
						className='mx-auto relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300'>
						<span>Erfahre mehr!</span>
					</Link>
					</div>
				</Container>
			</section>
		</>
	)
}
