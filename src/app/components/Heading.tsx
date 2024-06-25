"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react'

interface HeadingProps {
  
}

const headingItems = [
  {
    name: "Jobs preview",
    href: "/jobs/jobsPreview",
  },
  {
    name: "Applicants",
    href: "/jobs/applicants",
  },
  {
    name: "Match",
    href: "/jobs/matches",
  },
  {
    name: "Messages",
    href: "/jobs/messages",
  },
];

const Heading: FC<HeadingProps> = ({}) => {

  // const path = "/jobs/jobsPreview"

  const params = usePathname();

  const menuItemClassName = (href:string) => {
  
    return params === href
      ? 'flex items-center text-red-600 justify-center font-medium gap-1 p-3 rounded-[30px]'
      : 'flex items-center justify-center gap-1 font-medium p-3 bg-black rounded-[30px] bg-white';
  };


  return (
    <div>
        <ul className='inline-flex p-4 border-2 w-full items-center text-[#b8b4b4] space-x-8'>
        {headingItems.map((items) => (
          <Link key={items.name} href={items.href}>
            <li  className="">
            <div className={menuItemClassName(items.href)}>{items.name}</div>
          </li>
          </Link>
      ))}
        </ul>
    </div>
  );
}

export default Heading