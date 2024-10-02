import { SearchInput } from '@/components/search-input'
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'

type Props = {}

export const SeacrhBar = (props: Props) => {
    const [input, setInput] = useState('')
    const debounce = useDebounce(input, 800)
    const {setFilterTag, filterSubmit} = useFilter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setFilterTag(e.target.value)
    }
    useEffect(() => {
        if(input){
            filterSubmit()
        }
    },[debounce])

    return (
        <div className='sticky top-0 w-full bg-white'>
            <div className=' py-4 bg-white'>
                <SearchInput
                    name={'search-input'}
                    onChange={handleInputChange} 
                    placeholder='Seacrh by Tag' 
                />
            </div>
        </div>
    )
}