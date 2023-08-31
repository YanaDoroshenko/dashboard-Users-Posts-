import React, {FC} from 'react'
import { CommentInterface } from './types'
import { FlexColumn } from '../shared/Flex';
import { visitFunctionBody } from 'typescript';

interface PropsInterface {
    comment: CommentInterface
}

export const CommentsItem: FC<PropsInterface> = ({comment}) => {
    const {name, id, body} = comment;

  return (
    <FlexColumn width='80%' background='lightblue' padding='10px' margin='20px'>
        <h5>{name}</h5>
        {/* <h5>{id}</h5> */}
        <p>{body}</p>
        </FlexColumn>
  )
}
