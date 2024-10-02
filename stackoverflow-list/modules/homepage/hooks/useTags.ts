'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../features/homepage.slice';
import { AppDispatch, RootState } from '@/bootstrap/store';

export function useTags () {
    const dispatch = useDispatch<AppDispatch>();
    const {data, loading} = useSelector((state: RootState) => state.homepage.tags);

    useEffect(() => {
      dispatch(getTags());
    }, [])

  return {
    data,
    loading,
  }
}