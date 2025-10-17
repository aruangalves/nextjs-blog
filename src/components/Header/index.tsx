'use client';

export function Header() {
  console.log('Message from the Header client component');
  return (
    <h1
      className='text-6xl font-bold text-blue-500 hover:text-blue-50 hover:bg-blue-500 transition duration-1000'
      onClick={() => alert(123)}
    >
      Some header text
    </h1>
  );
}
