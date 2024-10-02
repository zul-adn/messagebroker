import React from 'react'
import { IQuestionItemProps } from './listItem';
import Image from 'next/image';
import Link from 'next/link';

export const Item = (props: IQuestionItemProps) => {

  const {
    title,
    view_count,
    score,
    owner,
    answer_count,
    link,
    accepted_answer_id,
    tags
  } = props

  return (
    <div className='border-b py-4'>
      <div className='flex justify-between'>
        <div className='w-4/5'>
          <Link href={link ?? "#"} target='__blank'>
            <span className='text-lg'>{title}</span>
          </Link>
          <div className='flex mt-2'>
              {tags && tags.length > 0 ? tags.map((tag, i) =>
                <div className='px-2 text-xs border rounded-full text-grey-200 mr-2'>{tag}</div>
              ): null}
          </div>
        
          <div className='mt-4 flex flex-row justify-between w-1/2'>
            <div className={`${score < 0 && "bg-red-500 text-white"} text-sm font-semibold p-2 aspect-square flex flex-col justify-center items-center rounded-md`}>
              <span>Score </span>
              <span>{score}</span>
            </div>
            <div className={`${answer_count > 1 ? accepted_answer_id ? "bg-green-500 text-white" : "border border-green-500 text-green-500" : ""} text-sm font-semibold p-2 aspect-square flex flex-col justify-center items-center rounded-md`}>
              <span>Answer </span>
              <span>{answer_count}</span>
            </div>
            <div className={`text-sm font-semibold p-2 aspect-square flex flex-col justify-center items-center rounded-md`}>
              <span >Viewed </span>
              <span>{view_count}</span>
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col justify-center items-center">
          {owner?.profile_image &&
            <Image
              alt={'alt-image'} 
              className="rounded-full " 
              src={owner?.profile_image} 
              width={70}
              height={70}
            /> 
          }
          <span className='mt-2 text-sm'>{owner?.display_name}</span>
        </div>
      </div>
    </div>
  )
}