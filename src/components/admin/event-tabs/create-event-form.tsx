'use client';
import { motion } from 'framer-motion';
import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateEvent } from '@/hooks/event-query';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { classnames } from '@/utils/classnames';
import { CiUser } from 'react-icons/ci';

const CreateNewEventForm = () => {
  const [formData, setFormData] = useState<EventType | null>(null);
  const {
    refetch: createEvent,
    isLoading,
    isError,
  } = useCreateEvent(formData as EventType);
  const [selected, setSelected] = useState<{
    id: number;
    title: string;
    value: boolean;
  }>(volunteerOptions[0]);

  type Inputs = {
    title: string;
    description: string;
    location: string;
    date: { start: string; end: string };
    notes: string;
    host: {
      name: string;
      contact: { email: string; phone: string };
    };
  };

  // ======= destructure react hook form components -->
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: formErrors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(formData);
    createEvent();
  };

  const note_len = watch('notes');

  return (
    <div className='w-full rounded-lg shadow-2xl border border-gray-300 h-max py-2 lg:py-5 px-4 lg:px-8 flex flex-col gap-4'>
      <h3 className='text-lg font-medium text-gray-900'>Create a new Event</h3>
      <form
        className='w-full h-max grid grid-cols-6 py-6 px-2 md:px-5 lg:px-10 gap-8'
        onChange={() =>
          // @ts-ignor
          setFormData(() => ({
            ...watch(),
            image_url:
              'https://images.pexels.com/photos/4585617/pexels-photo-4585617.jpeg?auto=compress&cs=tinysrgb&w=800',
            volunteers_needed: selected.value,
          }))
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* -- TITLE */}
        <div className='col-span-6'>
          <label
            htmlFor='title'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Event Title
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='title'
              {...register('title', { required: true })}
              className='form__input-dashboard'
              placeholder='Make it fun!'
            />
          </div>
        </div>

        {/* -- DECRIPTION */}
        <div className='col-span-6'>
          <label
            htmlFor='description'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            What is this event about?
          </label>
          <div className='mt-2'>
            <textarea
              rows={4}
              id='description'
              className='text__area-dashboard'
              defaultValue={''}
              placeholder='Tell us whats gonna happen...'
              {...register('description', { required: true })}
            />
          </div>
        </div>

        {/* -- LOCATION */}
        <div className='col-span-6'>
          <label
            htmlFor='location'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Event Location
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='location'
              className='form__input-dashboard'
              {...register('location', { required: true })}
              placeholder='01 Somwhere Around The World, A Town. PO51 COD'
            />
          </div>
        </div>

        {/* --  START DATE */}
        <div className='col-span-3 xl:col-span-2'>
          <label
            htmlFor='date'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Start date
          </label>
          <div className='mt-2'>
            <input
              type='date'
              {...register('date.start', { required: true })}
              id='date'
              className='form__input-dashboard cursor-pointer'
              placeholder='you@example.com'
            />
          </div>
        </div>

        {/* --  END DATE */}
        <div className='col-span-3 xl:col-span-2'>
          <label
            htmlFor='date'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            end date
          </label>
          <div className='mt-2'>
            <input
              type='date'
              {...register('date.end', { required: true })}
              id='date'
              className='form__input-dashboard cursor-pointer'
              placeholder='you@example.com'
            />
          </div>
        </div>

        {/* -- VOLUNTEERS NEEDED? */}
        <div className='col-span-6'>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>
                  Do you need volunteers?
                </Listbox.Label>
                <div className='relative mt-2'>
                  <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600 sm:text-sm sm:leading-6'>
                    <span className='block truncate'>{selected.title}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                      <ChevronUpDownIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {volunteerOptions.map((option) => (
                        <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                            classnames(
                              active
                                ? 'bg-violet-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classnames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate'
                                )}
                              >
                                {option.title}
                              </span>

                              {selected ? (
                                <span
                                  className={classnames(
                                    active ? 'text-white' : 'text-violet-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        {/* -- NOTES */}
        <div className='col-span-6'>
          <label
            htmlFor='description'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Do you have any notes to add? (optional)
          </label>
          <div className='mt-2'>
            <textarea
              rows={3}
              maxLength={200}
              id='notes'
              {...register('notes', { maxLength: 200 })}
              defaultValue={''}
              className='text__area-dashboard'
              placeholder='Anything to keep in mind? (max 40 characters)...'
            />
            <p className='text-xs mt-2 text-gray-700'>
              <b> {note_len ? 200 - note_len.length : 200}</b> characters left
            </p>
          </div>
        </div>

        <div className='border-b border-gray-300 font-medium text-gray-800 py-2 col-span-6 text-xl flex items-center gap-2 mt-10'>
          <CiUser />
          <p>Host Info</p>
        </div>

        {/* -- HOST NAME */}
        <div className='col-span-6'>
          <label
            htmlFor='name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Full Name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='name'
              {...register('host.name')}
              className='form__input-dashboard'
              placeholder="John Doesn't (😂get it?)"
            />
          </div>
        </div>

        {/* -- HOST email */}
        <div className='col-span-3'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='name'
              {...register('host.contact.email')}
              className='form__input-dashboard'
              placeholder='example@email.com'
            />
          </div>
        </div>

        {/* -- HOST PHONE */}
        <div className='col-span-3'>
          <label
            htmlFor='phone'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Phone
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='phone'
              {...register('host.contact.phone')}
              className='form__input-dashboard'
              placeholder='+44 1234 567890'
            />
          </div>
        </div>

        {/* -- CREATE BUTTON */}
        <div className='col-span-6 py-5 flex'>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            whileInView={{ x: 0, opacity: 1 }}
            type='submit'
            disabled={isLoading}
            className={classnames(
              'py-2 px-8 w-max h-max rounded-md shadow-md duration-300 ease-out transition-all hover:shadow-xl text-white',
              isLoading ? 'bg-amber-500' : 'hover:bg-teal-600 bg-teal-500'
            )}
          >
            {isLoading ? 'Loading...' : 'Create Event +'}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const volunteerOptions = [
  { id: 1, title: "We've got this", value: false },
  { id: 2, title: 'Volunteers Needed', value: true },
];

export default CreateNewEventForm;
