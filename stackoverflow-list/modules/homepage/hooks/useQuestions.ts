'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, getTags } from '../features/homepage.slice';
import { AppDispatch, RootState } from '@/bootstrap/store';

export function useQuestions () {
    const dispatch = useDispatch<AppDispatch>();
    const {data, loading, page} = useSelector((state: RootState) => state.homepage.questions);

    function getQuestion(){
      dispatch(getQuestions());
    }
    
    return {
      data,
      loading,
      getQuestion
    }
}