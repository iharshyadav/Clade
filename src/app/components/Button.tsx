import { FC, ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;    
}

const Button: FC<ButtonProps> = ({children}) => {
  return <div className='h-8 inline-flex items-center text-[#6e6d6d] shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)] text-[12px] font-medium p-2 gap-2 bg-white border-[#c9ced6] rounded-lg border-2'>
    {children}
  </div>
}

export default Button