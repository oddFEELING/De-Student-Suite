import { useGetEventList } from '@/hooks/event-query';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { CiUser } from 'react-icons/ci';

const OpenEventsList = () => {
  const { data: eventList, isLoading } = useGetEventList();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {eventList && (
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full justify-items-center'
        >
          {eventList.data.map(
            (event) =>
              event.status === 'open' && (
                <li
                  key={event._id}
                  className='col-span-1 max-w-lg w-full space-y-2 rounded-lg bg-white shadow-md relative mt-14 border border-gray-400 cursor-pointer hover:border-violet-500 hover:shadow-2xl duration-200 ease-out transition-all py-6 px-5'
                >
                  <img
                    src={event.image_url}
                    alt='event-image'
                    className='w-full h-40 rounded-lg shadow-lg -mt-14 border border-gray-400'
                  />

                  <div className='flex-1 truncate w-full border-b border-gray-200 pb-2'>
                    <div className='flex items-center space-x-3 mt-2'>
                      <h3 className='truncate font-medium text-gray-900'>
                        {event.title}
                      </h3>
                      <span className='inline-flex flex-shrink-0 items-center rounded-full bg-teal-50 px-1.5 py-0.5 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20'>
                        {event.status}
                      </span>
                    </div>
                    <p className='mt-4 truncate text-sm text-gray-700'>
                      {event.description}
                    </p>
                    <p className='mt-1 truncate text-xs text-gray-500'>
                      {event.date.start !== event.date.end &&
                        `Dates: ${event.date.start} -- ${event.date.end}`}{' '}
                      {event.date.start === event.date.end && event.date.start}
                    </p>
                  </div>

                  {/* -- text section */}
                  <div className='flex items-center justify-between gap-2 flex-1 truncate w-full'>
                    <span className='flex items-center gap-2'>
                      <CiUser />
                      <p className='text-sm text-gray-600'>
                        Host: {event.host.name}
                      </p>
                    </span>
                    <button className='text-sm py-1 px-5 border shadow rounded-md text-gray-800 border-gray-800 duration-150 ease-out transition-all hover:shadow-md hover:bg-gray-900 hover:text-white'>
                      View
                    </button>
                  </div>

                  {/* -- buttons section */}
                  <div className='flex-1 grid grid-cols-2 gap-3 w-full pt-3'>
                    <button className='flex items-center gap-2 justify-center py-2 text-sm w-full col-span-2 border rounded-md shadow transition-all duration-150 ease-out hover:shadow-md bg-rose-600 text-white hover:bg-rose-500'>
                      <XMarkIcon className='w-5 h-5' />
                      Close Event
                    </button>
                  </div>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default OpenEventsList;
