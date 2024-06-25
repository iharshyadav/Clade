"use client"

import JobsPreview from '@/app/components/JobsPreview';
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {

  const params = usePathname();

  if(params === "/jobs/jobsPreview") return <JobsPreview />


  return <div>page</div>
}

export default Page