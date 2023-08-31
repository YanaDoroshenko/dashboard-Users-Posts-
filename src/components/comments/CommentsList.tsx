import React, { useContext } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { SearchContext } from '../../contexts/SearchContext';
import { FlexColumn } from '../shared/Flex';
import { Search } from '../shared/Search';
import { CommentsItem } from './CommentsItem';

export const CommentsList = () => {

    const {comments, commentSearchResults} = useContext(SearchContext)!;

    console.log(commentSearchResults);

  return (
    <FlexColumn width="80%" alignItems="center" margin='40px'>
    <h1>Comments</h1>
    <Search/>
  {comments?.map((comment) => (
    <CommentsItem comment={comment} />
  ))}
</FlexColumn>
  )
}
