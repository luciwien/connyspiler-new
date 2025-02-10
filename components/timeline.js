export default function Timeline({ abschnitte }) {

  //abschnitte.map
  //Topic - Jahr
  // Title
  // Description
  return (<div className='container  mx-auto w-full h-full'>
      <div className='relative wrap overflow-hidden p-2 lg:p-10 h-full'>
        <div className='border-2-2 absolute border-opacity-20 border-gray-700 h-full border'
             style={{ left: 50 + '%' }}></div>
        {abschnitte.items.map((item, i) => {
          return (
            item.topic === "Fußball"?
              <LeftTimelineItem item={item} />:
              <RightTimelineItem item={item} />

          )
        })
        }
        {/*right*/}

        {/*left*/}

      </div>
    </div>
  )
}
export const RightTimelineItem = ({ item }) => {

  return (
    <div className='mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline'>
      <div className='order-1 w-5/12'></div>
      <div className='z-20 flex items-center order-1 bg-emerald-600 shadow-xl w-12 h-12 rounded-full'>
        <h1 className='mx-auto font-semibold text-md text-white'>{item.year}</h1>
      </div>
      <div className='order-1 bg-emerald-400 rounded-lg shadow-xl w-5/12 px-4 py-2 lg:px-6 lg:py-4'>
        {item.topic && <h4 className='mb-1 font-light text-gray-600 text-xs lg:text-sm '>{item.topic.toUpperCase()}</h4>}

        {item.title && <h3 className='mb-1 lg:mb-3 font-bold lg:font-medium text-gray-800 text-xs lg:text-xl'>{item.title}</h3>}
        <p
          className='text-xs lg:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>{item.description}</p>
      </div>
    </div>
  )
}

export const LeftTimelineItem = ({ item }) => {

  return (
    <div className='mb-8 flex flex-row justify-between items-center w-full left-timeline'>
      <div className='order-1 w-5/12'></div>
      <div className={`z-20 flex items-center order-1 bg-fuchsia-600 shadow-xl w-12 h-12 rounded-full`}>
        <h1 className='mx-auto font-semibold text-md text-white'>{item.year}</h1>
      </div>
      <div className='order-1 bg-fuchsia-300 rounded-lg shadow-xl w-5/12 px-4 py-2 lg:px-6 lg:py-4'>
        {item.topic && <h4 className='mb-1 font-light text-gray-600 text-xs lg:text-sm '>{item.topic.toUpperCase()}</h4>}

        {item.title && <h3 className='mb-1 lg:mb-3 font-bold lg:font-medium text-gray-800 text-xs lg:text-xl'>{item.title}</h3>}
        <p
          className='text-xs lg:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>{item.description}</p>
      </div>
    </div>
  )
}