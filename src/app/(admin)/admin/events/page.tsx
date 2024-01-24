'use client';
import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { classnames } from '@/utils/classnames';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useGetEventList } from '@/hooks/event-query';
import { CheckIcon } from '@heroicons/react/20/solid';
import OpenEventsList from '@/components/admin/event-tabs/open-event-list';
import ClosedEventsList from '@/components/admin/event-tabs/closed-event-list';
import CreateNewEventForm from '@/components/admin/event-tabs/create-event-form';

const AdminEventsPage = () => {
  const [currentTab, setCurrentTab] = useState<
    'open' | 'closed' | 'pending' | 'create'
  >('open');

  return (
    <div className='flex flex-col items-center justify-center w-full h-max'>
      <div className='relative border-b border-gray-200 pb-5 sm:pb-0 w-full'>
        <div className='md:flex md:items-center md:justify-between'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            Events
          </h3>
          <div className='mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0'>
            <button
              type='button'
              className='ml-3 inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
              onClick={() => setCurrentTab('create')}
            >
              Create
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <div className='sm:hidden'>
            <label htmlFor='current-tab' className='sr-only'>
              Select a tab
            </label>
            <select
              id='current-tab'
              name='current-tab'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-600'
              value={currentTab}
              // @ts-ignore
              onChange={(e) => setCurrentTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.value}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className='hidden sm:block'>
            <nav className='-mb-px flex space-x-8'>
              {tabs.map((tab) => (
                <p
                  key={tab.name}
                  className={classnames(
                    tab.value === currentTab
                      ? 'border-violet-500 text-violet-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium cursor-pointer'
                  )}
                  aria-current={tab.value === currentTab ? 'page' : undefined}
                  onClick={() => setCurrentTab(tab.value)}
                >
                  {tab.name}
                </p>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* -- TABS */}
      <section className='w-full mt-10 flex'>
        {
          {
            open: <OpenEventsList />,
            closed: <ClosedEventsList />,
            pending: <PendingEvents />,
            create: <CreateNewEventForm />,
          }[currentTab]
        }
      </section>
    </div>
  );
};

export default AdminEventsPage;

const tabs: {
  name: string;
  value: 'open' | 'closed' | 'pending' | 'create';
}[] = [
  { name: 'Open', value: 'open' },
  { name: 'Closed', value: 'closed' },
  { name: 'Pending', value: 'pending' },
  { name: 'Create', value: 'create' },
];

//=============================================>
// ======= open event component -->
//=============================================>

//=============================================>
// ======= closed events component -->
//=============================================>

//=============================================>
// ======= pending events component -->
//=============================================>
const PendingEvents = () => {
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
              event.status === 'pending' && (
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
                      <span className='inline-flex flex-shrink-0 items-center rounded-full bg-amber-50 px-1.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20'>
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
                  <div className='flex-1 grid grid-cols-2 gap-3 w-full pt-2'>
                    <button className='flex items-center gap-2 justify-center py-2 text-sm w-full col-span-1 border rounded-md shadow transition-all duration-150 ease-out hover:shadow-md bg-emerald-600 text-white hover:bg-emerald-500'>
                      <CheckIcon className='w-5 h-5' />
                      Approve
                    </button>
                    <button className='flex items-center gap-2 justify-center py-2 text-sm w-full col-span-1 border rounded-md shadow transition-all duration-150 ease-out hover:shadow-md bg-rose-600 text-white hover:bg-rose-500'>
                      <XMarkIcon className='w-5 h-5' />
                      Reject
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

//=============================================>
// ======= create new event component -->
//=============================================>
