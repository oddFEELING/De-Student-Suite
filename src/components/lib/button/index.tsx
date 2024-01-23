'use client';
import React, { ReactNode } from 'react';
import { classnames } from '@/utils/classnames';

type ButtonProps = {
  children: ReactNode | ReactNode[];
  theme?: 'violet' | 'cyan' | 'amber' | 'rose' | 'emerald' | 'light' | 'dark';
  sx?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  theme = 'dark',
  sx,
  size = 'base',
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classnames(
        'm-44 transition-all duration-200 ease-out',
        !!sx,
        // ======= THEME -->
        theme === 'dark' &&
          'text-white bg-gray-900 hover:text-white hover:bg-gray-700',
        theme === 'violet' &&
          'text-white bg-violet-600 hover:text-white hover:bg-violet-500',
        theme === 'cyan' &&
          'text-white bg-cyan-600 hover:text-white hover:bg-cyan-500',
        theme === 'amber' &&
          'text-white bg-amber-600 hover:text-white hover:bg-amber-500',
        theme === 'rose' &&
          'text-white bg-rose-600 hover:text-white hover:bg-rose-500',
        theme === 'emerald' &&
          'text-white bg-emerald-600 hover:text-white hover:bg-emerald-500',
        theme === 'light' &&
          'text-gray-700 bg-white-600 hover:text-gray-900 hover:bg-gray-100 border-gray-300 border',
        // ======= SIZES -->
        size === 'xs' &&
          'text-xs rounded-md shadow-sm py-1 px-5 hover:shadow-md',
        size === 'sm' &&
          'text-sm rounded-md shadow-sm py-1 px-6 hover:shadow-md',
        size === 'base' &&
          'text-base rounded-md shadow py-1.5 px-8 hover:shadow-md',
        size === 'lg' &&
          'text-lg rounded-lg shadow-md py-1.5 px-8 hover:shadow-lg',
        size === 'xl' &&
          'text-xl rounded-lg shadow-md py-1.5 px-12 hover:shadow-lg'
      )}
      onClick={onClick || (() => {})}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
