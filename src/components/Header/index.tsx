'use client';

import clsx from 'clsx';

export function Header() {
  return (
    <div>
      <h1 className={clsx(
        'text-3xl',
        'font-bold',
        'text-blue-500',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transation',
        'duration-1000',
        )}
        onClick={() => alert(123)}>
          Miguel, Juan e Saturno, Amor sem fim!

      </h1>
    </div>
  );
}
