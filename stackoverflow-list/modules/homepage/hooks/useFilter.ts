'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByClickTag, searchByTag, setFilteredTag } from '../features/homepage.slice';
import { AppDispatch, RootState } from '@/bootstrap/store';

export function useFilter() {
    const dispatch = useDispatch<AppDispatch>();
    const activeFilter = useSelector((state: RootState) => state.homepage.filteredText);

    function setFilterTag (tag: string) {
        dispatch(setFilteredTag(tag))
    }

    function filterSubmit() {
        dispatch(searchByTag());
    }

    function filterByTag(tag: string) {
        dispatch(searchByClickTag(tag));
    }

  return {
   setFilterTag,
   filterSubmit,
   filterByTag,
   activeFilter
  }
}