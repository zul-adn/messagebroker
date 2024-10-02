import React from 'react'
import { Item } from './litem'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useFilter } from '../../hooks/useFilter'

type ITagItemProps = {
  has_synonyms?: boolean,
  is_moderator_only?: boolean,
  is_required?: boolean,
  count?: number,
  name: string
}

type ITagsProps = {
  tags: ITagItemProps[],
  loading: boolean
}

export const ListItem = ({tags, loading}: ITagsProps) => {
  const {filterByTag, activeFilter} = useFilter()

  const onClickTag = (tag:string) => {
    filterByTag(tag)
  }

  return (
    <div>
      {loading && 
        <Skeleton 
          count={5}  
          inline
          width={90}
          height={30}
          className='mr-4 mb-10'
        />}
        {loading ?
          null
        : 
          <div className='flex flex-wrap py-4'>
            {tags.length > 0  ? tags.map((tag, i) => <Item key={i} activeFilter={activeFilter} onClick={() => onClickTag(tag.name)} name={tag.name}/>) : "No tag"}
          </div>
        }
    </div>
  )
}