'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcCancel } from 'react-icons/fc';
import { FaRegSave } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { CiMenuKebab } from 'react-icons/ci';
import { classnames } from '@/utils/classnames';
import { IoPersonAddOutline, IoPersonRemoveOutline } from 'react-icons/io5';

const RotaList = () => {
  const [open, setOpen] = useState('');
  const router = useRouter();

  return (
    <section className='w-full h-max min-h-[400px] flex flex-col items-center py-32 overflow-hidden'>
      <h3 className='text-2xl lg:text-3xl font-bold text-gray-800'>
        Available Rotas
      </h3>
      <p className='text-gray-600 text-sm md:text-base mt-1'>
        Here is a list of savailable rotas for you to join.
      </p>

      <div className='w-full md:w-3/4 flex flex-col h-max py-6 px-2 gap-6 mt-10 divide-y'>
        {rota_list?.map((item) => (
          <motion.div
            className={classnames(
              'w-full h-max lg:h-28 bg-white transition-all ease-out duration-300 hover:drop-shadow-xl rounded-xl border-gray-200 flex flex-col gap-5 lg:flex-row px-8 py-10 border hover:border-gray-300  lg:items-center justify-between z-10',
              open === item._id && 'z-20'
            )}
            key={item._id}
            initial={{ x: -50, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className='flex flex-col gap-2 w-full md:w-2/3'>
              <span className='flex gap-1 items-center'>
                <p className='md:text-lg font-medium flex items-center gap-2'>
                  {/* @ts-ignore */}
                  <lord-icon
                    src={item.icon_url}
                    trigger='loop'
                    colors='primary:#121331,secondary:#059669'
                    style={{ width: '40px', height: '40px' }}
                  />
                  {item.rota_name}
                </p>
                <p
                  className={classnames(
                    'text-xs md:text-sm h-5 px-4 rounded-md shadow-sm border  ml-5 flex items-center justify-center',
                    item.status === 'open' &&
                      'bg-emerald-100 text-emerald-600 border-emerald-600',
                    item.status === 'closed' &&
                      'bg-rose-100 text-rose-600 border-rose-600'
                  )}
                >
                  {item.status}
                </p>
              </span>
              <p className='text-gray-600 text-xs md:text-sm'>
                {item.dates.length} total Dates &#183; Created on {item.created}
                .
              </p>
            </div>

            <div className='flex items-center gap-5 justify-between md:justify-start'>
              <button
                className='text-lg md:text-sm lg:text-base border rounded-md shadow transition-all duration-200 ease-out hover:shadow-lg py-1.5 px-6 border-gray-300 hover:border-gray-400 text-gray-800  cursor-pointer'
                onClick={() => router.push('/rotas/2')}
              >
                view rota
              </button>
              <div className='relative'>
                <CiMenuKebab
                  className='cursor-pointer h-6 text-gray-700 w-6'
                  onClick={() => setOpen(() => item._id)}
                />
                <ul
                  className={classnames(
                    'bg-white py-4 px-3 rounded-lg shadow-lg transition-all duration-300 absolute -bottom-[12rem] right-0 w-max text-gray-600 gap-2translate-y-14 border',
                    open !== item._id
                      ? 'pointer-events-none  opacity-0 -translate-y-10'
                      : ' translate-y-0'
                  )}
                >
                  <li
                    className='hover:text-gray-900 hover:bg-gray-50 w-full py-1 rounded m-1 hover:shadow-sm transition-all ease-out duration-100 px-3 cursor-pointer flex items-center gap-3'
                    onClick={() => setOpen(() => '')}
                  >
                    <IoPersonAddOutline /> Show interest
                  </li>
                  <li
                    className='hover:text-gray-900 hover:bg-gray-50 w-full py-1 rounded m-1 hover:shadow-sm transition-all ease-out duration-100 px-3 cursor-pointer flex items-center gap-3'
                    onClick={() => setOpen(() => '')}
                  >
                    <IoPersonRemoveOutline /> Revoke interest
                  </li>
                  <li
                    className='hover:text-gray-900 hover:bg-gray-50 w-full py-1 rounded m-1 hover:shadow-sm transition-all ease-out duration-100 px-3 cursor-pointer flex items-center gap-3'
                    onClick={() => setOpen(() => '')}
                  >
                    <FaRegSave className='text-gray-500' />
                    Save rota
                  </li>
                  <li
                    className='hover:text-rose-900 hover:bg-rose-50 w-full py-1 rounded m-1 hover:shadow-sm transition-all ease-out duration-100 px-3 cursor-pointer flex items-center gap-3'
                    onClick={() => setOpen(() => '')}
                  >
                    <FcCancel /> <p>Close menu</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='w-[450px] h-[270px] absolute right-0 bottom-0 overflow-hidden'>
        <Image src='/rota/cute-dog.png' alt='cute-dog' fill />
      </div>
    </section>
  );
};

export default RotaList;

const rota_list: Rota[] = [
  {
    _id: '1',
    rota_name: 'Student Coffee Rota',
    rota_description:
      'This rota holds the schedule for students who have volunteered to join the coffee team in the church. Students always handle welcome and coffee on the first sunday of every month.',
    created: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
    icon_url: 'https://cdn.lordicon.com/kcoawjon.json',
    status: 'closed',
    dates: [
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        shifts: ['11:15'],
        need_count: 3,
        available: true,
        people: {
          pending: null,
          approved: null,
          declined: null,
        },
      },
    ],
    activity_feed: [
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        agent: 'Jumbo Arson',
        event: 'showed interest in',
        target: 'Friday coffee rota',
        type: 'info',
      },
    ],
  },
  {
    _id: '2',
    rota_name: 'Student Welcome Rota',
    rota_description:
      'This rota holds the schedule for students who have volunteered to join the coffee team in the church. Students always handle welcome and coffee on the first sunday of every month.',
    created: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
    icon_url: 'https://cdn.lordicon.com/awmkozsb.json',
    status: 'open',
    dates: [
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        shifts: ['11:15'],
        need_count: 3,
        available: true,
        people: {
          pending: null,
          approved: null,
          declined: null,
        },
      },
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        shifts: ['11:15'],
        need_count: 3,
        available: true,
        people: {
          pending: null,
          approved: null,
          declined: null,
        },
      },
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        shifts: ['11:15'],
        need_count: 3,
        available: true,
        people: {
          pending: null,
          approved: null,
          declined: null,
        },
      },
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        shifts: ['11:15'],
        need_count: 3,
        available: true,
        people: {
          pending: null,
          approved: null,
          declined: null,
        },
      },
    ],
    activity_feed: [
      {
        date: 'Wed Jan 10 2024 00:42:47 GMT+0000 (Greenwich Mean Time)',
        agent: 'Jumbo Arson',
        event: 'showed interest in',
        target: 'Friday coffee rota',
        type: 'info',
      },
    ],
  },
];
