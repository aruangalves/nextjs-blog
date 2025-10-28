'use client';

import ErrorMessage from '@/components/ErrorMessage';
import Link from 'next/link';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle={'Error | The Blog'}
      contentTitle={'An error has occurred'}
      message={
        <>
          <p>
            The server encountered an error while processing your request.{' '}
            <Link href='/'>Return to home</Link> or click on the button below to
            try again.
          </p>
          <button onClick={() => reset()}>Try again</button>
        </>
      }
    />
  );
}
