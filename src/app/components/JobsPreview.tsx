import { Coins, MapPin, Pencil, Trash2 } from 'lucide-react';
import { FC } from 'react'
import Button from './Button';
import Image from 'next/image';

interface JobsPreviewProps {
  
}

const button = [
    {
        logo : "/1024px-Figma-logo.svg.png",
        name : "Figma"
    },
    {
        logo : "/512px-Adobe_Illustrator_CC_icon.svg.png",
        name : "Adobe Illustrator"
    },
    {
        logo : "/512px-Adobe_XD_CC_icon.svg.png",
        name : "Adobe  XD"
    },
]

const JobsPreview: FC<JobsPreviewProps> = ({}) => {
    
  return (
    <div className="flex">
      <div className="w-[70%] pl-20 bg-white shadow-lg rounded-lg mt-6">
        <div className="flex flex-col gap-1 items-start border-b pb-4 mb-4">
          <div className="flex gap-1 items-center">
            <h1 className="text-2xl font-bold text-[#3d3d3d]">
              Senior Product Designer
            </h1>
            <p className="text-[10px] font-medium text-[#3d3d3d]">
              {" "}
              <span className="">•</span> posted 2 days ago
            </p>
            <span className="text-green-700 text-[8px] rounded-lg pr-2 pl-2 bg-green-200">
              <span className="text-[#3d3d3d]">•</span> Open
            </span>
          </div>

          <div>
            <div className="flex items-center mt-1">
              <MapPin size={16} />
              <span>Delaware, USA</span>
              <span className="mx-2">•</span>
              <Coins size={16} />
              <span className="ml-1">$300k - $400k</span>
            </div>
          </div>
        </div>
        <div className="flex border-b-2">
          <div className="mb-4 flex flex-col">
            <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
              Skills Required
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              {button.map((item) => (
                <ul key={item.name}>
                  <Button>
                    <Image src={item.logo} alt="figma" width={15} height={15} />
                    <p>{item.name}</p>
                  </Button>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex grid-cols-2 gap-20 mb-4">
            <div className="ml-16">
              <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                Preferred Language
              </h2>
              <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                English
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-semibold text-[#6e6d6d]">Type</h2>
              <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                Full time
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                Years of Experience
              </h2>
              <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                3+ Years of Experience
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-5">
          <h2 className="text-[13px] font-semibold text-[#6e6d6d]">
            About the job
          </h2>
          <ol className=" list-inside mt-2 space-y-1 text-[13px] text-[#3d3d3d] font-medium">
            <li>1. Handle the UI/UX research design</li>
            <li>
              2. Work on researching on latest web applications designs & trends
            </li>
            <li>3. Work on conceptualizing and visualizing</li>
            <li>
              4. Work on creating graphics content and other graphic related
              works
            </li>
          </ol>
        </div>
        <div className="text-[13px] text-[#3d3d3d] font-medium">
          <h2 className="list-disc list-inside space-y-1">Benefits</h2>
          <ul className="list-disc list-inside space-y-1 space-x-3">
            <li className="ml-3">Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>
        <div className="text-[13px] text-[#3d3d3d] font-medium">
          <h2 className="list-disc list-inside space-y-1">Schedule</h2>
          <p className="list-disc list-inside space-y-1 space-x-3">
            <span className="mx-2">•</span>Day shift
          </p>
        </div>
        <div className="text-[13px] text-[#3d3d3d] font-medium">
          <h2 className="list-disc list-inside space-y-1">
            Supplemental pay types
          </h2>
          <p>
            <span className="mx-2">•</span>Performance bonus
          </p>
        </div>
        <div className="flex flex-col justify-center items-start mt-6 pt-4 border-t">
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12 rounded-xl mr-4"
              src="/Rectangle 43.png"
              alt="Company Logo"
            />
            <h3 className="text-lg font-medium">Atlassian</h3>
            <button className="p-2 ml-2 rounded-lg bg-[#e0ebfa] shadow-lg text-blue-950 font-bold text-[10px]">
              FOLLOW
            </button>
          </div>
          <div className="w-[70%]">
            <div className="flex items-center justify-start gap-64 mt-10">
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Company size
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  1k - 2k Employees
                </p>
              </div>
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Type
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  Private
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-32 mt-10">
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Sector
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Funding
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  Bootstrapped
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-[20vw] mt-10">
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Founded in
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  2019
                </p>
              </div>
              <div className="">
                <h2 className="text-[11px] font-semibold text-[#6e6d6d]">
                  Founded by
                </h2>
                <p className="text-[13px] font-medium mt-2 text-[#3d3c3c]">
                  Scott Farquhar, Mike Cannon-Brookes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
      <div className="w-[30%]">
        <div className="p-4 max-w-sm mx-auto bg-white rounded-xl space-y-4">
          <div className="flex justify-between">
            <button className=" bg-[#fef4f2] flex p-2 pr-5 text-sm pl-5 border-2 border-red-600 items-center justify-center gap-2 text-red-500 font-semibold rounded-xl">
              <Trash2 size={19} />
              <p>Delete job</p>
            </button>
            <button className=" bg-[#dc4a2e] flex p-2 pr-5 pl-5 text-sm border-2 border-red-600 items-center justify-center gap-2 text-white font-semibold rounded-xl">
              <Pencil size={19} />
              <p>Edit job</p>
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center border-b-2 ">
              <span className="text-gray-500">Applicants</span>
              <span className="text-gray-900 font-semibold mb-6">400</span>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <span className="text-gray-500">Matches</span>
              <span className="text-gray-900 font-semibold mb-6">100</span>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <span className="text-gray-500">Messages</span>
              <span className="text-gray-900 font-semibold mb-6">147</span>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <span className="text-gray-500">Views</span>
              <span className="text-gray-900 font-semibold mb-6">800</span>
            </div>
          </div>
          <div className="p-10 bg-white shadow-xl rounded-lg">
            <p className="text-gray-700 font-bold">
              “A quote from a Atlassian.”
            </p>
            <div className="flex items-center mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src="/Avatar.png"
                alt="Profile"
              />
              <div className="ml-3">
                <p className="text-gray-900">Name</p>
                <p className="text-gray-500 text-sm">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPreview


