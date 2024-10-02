import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    icon?: any
    onChange?: (e: any) => void
  }

export const SearchInput = ({
    name,
    value,
    onChange,
    ...rest
}: InputProps) => {
  return (
    <div>
        <input
            id={name}
            value={value}
            onChange={onChange}
            className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
            {...rest}
        />
    </div>
  )
}