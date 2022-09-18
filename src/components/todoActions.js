import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Floyd Miles',
    email: 'floy.dmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

const TodoActions = ({ openTodoSidebar, setOpenTodoSidebar }) => {
  console.log('openTodoSidebar', openTodoSidebar)
  return (
    <div>
      <Transition.Root show={openTodoSidebar.open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpenTodoSidebar}>
          <div className='fixed inset-0' />

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                    <form className='flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl'>
                      <div className='h-0 flex-1 overflow-y-auto'>
                        <div className='bg-indigo-700 py-6 px-4 sm:px-6'>
                          <div className='flex items-center justify-between'>
                            <Dialog.Title className='text-lg font-medium text-white'>
                              New Project
                            </Dialog.Title>
                            <div className='ml-3 flex h-7 items-center'>
                              <button
                                type='button'
                                className='rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                                onClick={() =>
                                  setOpenTodoSidebar({ open: false })
                                }
                              >
                                <span className='sr-only'>Close panel</span>
                                <XMarkIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </button>
                            </div>
                          </div>
                          <div className='mt-1'>
                            <p className='text-sm text-indigo-300'>
                              Get started by filling in the information below to
                              create your new project.
                            </p>
                          </div>
                        </div>
                        <div className='flex flex-1 flex-col justify-between'>
                          <div className='divide-y divide-gray-200 px-4 sm:px-6'>
                            <div className='space-y-6 pt-6 pb-5'>
                              <div>
                                <label
                                  htmlFor='project-name'
                                  className='block text-sm font-medium text-gray-900'
                                >
                                  Project name
                                </label>
                                <div className='mt-1'>
                                  <input
                                    type='text'
                                    name='project-name'
                                    id='project-name'
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor='description'
                                  className='block text-sm font-medium text-gray-900'
                                >
                                  Description
                                </label>
                                <div className='mt-1'>
                                  <textarea
                                    id='description'
                                    name='description'
                                    rows={4}
                                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                    defaultValue={''}
                                  />
                                </div>
                              </div>
                              <div>
                                <h3 className='text-sm font-medium text-gray-900'>
                                  Team Members
                                </h3>
                                <div className='mt-2'>
                                  <div className='flex space-x-2'>
                                    {team.map(person => (
                                      <a
                                        key={person.email}
                                        href={person.href}
                                        className='rounded-full hover:opacity-75'
                                      >
                                        <img
                                          className='inline-block h-8 w-8 rounded-full'
                                          src={person.imageUrl}
                                          alt={person.name}
                                        />
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <fieldset>
                                <legend className='text-sm font-medium text-gray-900'>
                                  Privacy
                                </legend>
                                <div className='mt-2 space-y-5'>
                                  <div className='relative flex items-start'>
                                    <div className='absolute flex h-5 items-center'>
                                      <input
                                        id='privacy-public'
                                        name='privacy'
                                        aria-describedby='privacy-public-description'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        defaultChecked
                                      />
                                    </div>
                                    <div className='pl-7 text-sm'>
                                      <label
                                        htmlFor='privacy-public'
                                        className='font-medium text-gray-900'
                                      >
                                        Public access
                                      </label>
                                      <p
                                        id='privacy-public-description'
                                        className='text-gray-500'
                                      >
                                        Everyone with the link will see this
                                        project.
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className='relative flex items-start'>
                                      <div className='absolute flex h-5 items-center'>
                                        <input
                                          id='privacy-private-to-project'
                                          name='privacy'
                                          aria-describedby='privacy-private-to-project-description'
                                          type='radio'
                                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                      </div>
                                      <div className='pl-7 text-sm'>
                                        <label
                                          htmlFor='privacy-private-to-project'
                                          className='font-medium text-gray-900'
                                        >
                                          Private to project members
                                        </label>
                                        <p
                                          id='privacy-private-to-project-description'
                                          className='text-gray-500'
                                        >
                                          Only members of this project would be
                                          able to access.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className='relative flex items-start'>
                                      <div className='absolute flex h-5 items-center'>
                                        <input
                                          id='privacy-private'
                                          name='privacy'
                                          aria-describedby='privacy-private-to-project-description'
                                          type='radio'
                                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                      </div>
                                      <div className='pl-7 text-sm'>
                                        <label
                                          htmlFor='privacy-private'
                                          className='font-medium text-gray-900'
                                        >
                                          Private to you
                                        </label>
                                        <p
                                          id='privacy-private-description'
                                          className='text-gray-500'
                                        >
                                          You are the only one able to access
                                          this project.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-shrink-0 justify-end px-4 py-4'>
                        <button
                          type='button'
                          className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          onClick={() => setOpenTodoSidebar({ open: false })}
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          className='ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default TodoActions
