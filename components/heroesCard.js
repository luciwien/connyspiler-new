import Image from "next/image";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import Link from "next/link";

export default function HeroesCard({ hero }) {
  const imageProps = hero?.mainImage ? urlForImage(hero.mainImage) : null;
  return (
    <div className="mt-3 rounded-2xl bg-gray-50 px-2 py-4 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap flex-col items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 mb-3 h-24 w-24 flex-shrink-0 mx-auto ">
          {imageProps && (
              <Image
                src={imageProps.src}
                alt={hero.title}
                className="rounded-full object-cover"
                fill
                sizes="96px"
              />
          )}
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              {hero.title}
            </h3>
          </div>
          <div>
            {hero.body && <PortableText value={hero.body} />}
          </div>
        </div>
      </div>
    </div>
  );
}
