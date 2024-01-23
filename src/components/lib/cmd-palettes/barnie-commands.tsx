'use client';

import { Fragment, useState } from 'react';
import { CiLink } from 'react-icons/ci';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { classnames } from '@/utils/classnames';
import {
  ExclamationTriangleIcon,
  LifebuoyIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: ' Rota: Create a Rota',
    category: 'Projects',
    url: '#',
  },
  {
    id: 2,
    name: 'Generate a story',
    category: 'Projects',
    url: '#',
  },
  {
    id: 3,
    name: 'De Lounge: Create a new lounge',
    category: 'Projects',
    url: '#',
  },
  {
    id: 4,
    name: 'Rota: Suggest a rota to join',
    category: 'Projects',
    url: '#',
  },
  {
    id: 5,
    name: 'Event: Suggest the nearest event',
    category: 'Projects',
    url: '#',
  },
  {
    id: 6,
    name: 'Rota: My saved rotas',
    category: 'Projects',
    url: '#',
  },
];

const pages = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Rotas',
    url: '/rotas',
  },
  {
    id: 3,
    name: 'Events',
    url: '/events',
  },
  {
    id: 4,
    name: 'Barnie-Bot',
    url: '/barnie',
  },
  {
    id: 5,
    name: 'De Lounge',
    url: '/lounge',
  },
  {
    id: 5,
    name: 'Contact us',
    url: '/contact',
  },
];

type PaletteProps = {
  open: boolean;
  setOpen: (show: boolean) => void;
};

const BarnieCmdPalette: React.FC<PaletteProps> = ({
  open = false,
  setOpen,
}) => {
  // const [open, setOpen] = useState(true);
  const [rawQuery, setRawQuery] = useState('');
  const query = rawQuery.toLowerCase().replace(/^[#>]/, '');

  const filteredCommands =
    rawQuery === '#'
      ? projects
      : query === '' || rawQuery.startsWith('>')
      ? []
      : projects.filter((project) =>
          project.name.toLowerCase().includes(query)
        );

  const filteredLinks =
    rawQuery === '>'
      ? pages
      : query === '' || rawQuery.startsWith('#')
      ? []
      : pages.filter((link) => link.name.toLowerCase().includes(query));

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setRawQuery('')}
      appear
    >
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-25 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'>
              <Combobox onChange={(item: any) => (window.location = item.url)}>
                <div className='relative'>
                  <MagnifyingGlassIcon
                    className='pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <Combobox.Input
                    className='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                    placeholder='Search...'
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {(filteredCommands.length > 0 || filteredLinks.length > 0) && (
                  <Combobox.Options
                    static
                    className='max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2'
                  >
                    {filteredCommands.length > 0 && (
                      <li>
                        <h2 className='text-xs font-semibold text-gray-900'>
                          Commands
                        </h2>
                        <ul className='-mx-4 mt-2 text-sm text-gray-700'>
                          {filteredCommands.map((command) => (
                            <Combobox.Option
                              key={command.id}
                              value={command}
                              className={({ active }) =>
                                classnames(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-violet-600 text-white'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <CommandLineIcon
                                    className={classnames(
                                      'h-6 w-6 flex-none',
                                      active ? 'text-white' : 'text-gray-400'
                                    )}
                                    aria-hidden='true'
                                  />
                                  <span className='ml-3 flex-auto truncate'>
                                    {command.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                    {filteredLinks.length > 0 && (
                      <li>
                        <h2 className='text-xs font-semibold text-gray-900'>
                          Pages
                        </h2>
                        <ul className='-mx-4 mt-2 text-sm text-gray-700'>
                          {filteredLinks.map((link) => (
                            <Combobox.Option
                              key={link.id}
                              value={link}
                              className={({ active }) =>
                                classnames(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-violet-600 text-white'
                                )
                              }
                            >
                              <CiLink className='w-5 h-5' />
                              <span className='ml-3 flex-auto truncate'>
                                {link.name}
                              </span>
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === '?' && (
                  <div className='px-6 py-14 text-center text-sm sm:px-14'>
                    <LifebuoyIcon
                      className='mx-auto h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <p className='mt-4 font-semibold text-gray-900'>
                      Help with searching
                    </p>
                    <p className='mt-2 text-gray-500'>
                      This is the Barnie-bot command palette. Use this to
                      quickly take actions with the help of your bot. type in
                      '#' to access commands and &gt; to access pages
                    </p>
                  </div>
                )}

                {query !== '' &&
                  rawQuery !== '?' &&
                  filteredCommands.length === 0 &&
                  filteredLinks.length === 0 && (
                    <div className='px-6 py-14 text-center text-sm sm:px-14'>
                      <ExclamationTriangleIcon
                        className='mx-auto h-6 w-6 text-gray-400'
                        aria-hidden='true'
                      />
                      <p className='mt-4 font-semibold text-gray-900'>
                        No results found
                      </p>
                      <p className='mt-2 text-gray-500'>
                        We couldn&apos;t find anything with that term. Please
                        try again.
                      </p>
                    </div>
                  )}

                <div className='flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700'>
                  Type{' '}
                  <kbd
                    className={classnames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('#')
                        ? 'border-violet-600 text-violet-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    #
                  </kbd>{' '}
                  <span className='sm:hidden'>for commands,</span>
                  <span className='hidden sm:inline'>to access commands,</span>
                  <kbd
                    className={classnames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('>')
                        ? 'border-violet-600 text-violet-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    &gt;
                  </kbd>{' '}
                  for pages, and{' '}
                  <kbd
                    className={classnames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery === '?'
                        ? 'border-violet-600 text-violet-600'
                        : 'border-gray-400 text-gray-900'
                    )}
                  >
                    ?
                  </kbd>{' '}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BarnieCmdPalette;
