'use client';
import React, { useState } from 'react';
import { classnames } from '@/utils/classnames';
import { useGetEventList } from '@/hooks/event-query';

const AdminEventsPage = () => {
  const [currentTab, setCurrentTab] = useState<
    'open' | 'closed' | 'pending' | 'create'
  >('open');

  const { data: eventList, isLoading } = useGetEventList();

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
              className='ml-3 inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'
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
              defaultValue={tabs.find((tab) => tab.value === currentTab)!.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
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
            open: <OpenEvents />,
            closed: <ClosedEvents />,
            pending: <PendingEvents />,
            create: <CreateNewEvent />,
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
const OpenEvents = () => {
  return <div>Open Event List</div>;
};

//=============================================>
// ======= closed events component -->
//=============================================>
const ClosedEvents = () => {
  return <div>Closed Event List</div>;
};

//=============================================>
// ======= pending events component -->
//=============================================>
const PendingEvents = () => {
  return <div>Pending Event List</div>;
};

//=============================================>
// ======= create new event component -->
//=============================================>
const CreateNewEvent = () => {
  return <div>Create new Event</div>;
};
