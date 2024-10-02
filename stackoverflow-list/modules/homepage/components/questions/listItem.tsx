'use client'
import React, { useEffect, useState } from 'react'
import { Item } from './litem'
import { InView, useInView } from 'react-intersection-observer'
import { useQuestions } from '../../hooks/useQuestions'
import { getQuestions } from '../../features/homepage.slice'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export type IQuestionItemProps = {
  title: string;
  link: string;
  owner: any;
  score: number;
  answer_count: number;
  view_count: number;
  accepted_answer_id?: number;
  tags: string[]
}

type IQuestionProps = {
  questions: IQuestionItemProps[];
  loading: boolean;
  cb: () => void;
}

export const ListItem = ({questions, cb, loading}: IQuestionProps) => {
  const { ref, inView } = useInView()
  const [isLoading, setIsLoading] = useState<boolean>(false)

   useEffect(() => {
      if(inView){
       cb()
      }
   }, [inView])

  return (
    <div>
      {loading && <Skeleton count={4} height={90} className='mb-4'/>}
      {questions.length > 0 && questions.map((question, i) => <Item key={i} {...question}/>)} 

      <div ref={ref}>
        .
        {isLoading ? "Loading" : ''}
      </div>
    </div>
  )
}
