import React, { FC, SyntheticEvent, useCallback, useContext, useState } from 'react'
import { FlexRow } from './Flex'
import {GiCancel} from 'react-icons/gi'
import { SearchContext } from '../../contexts/SearchContext';

export type HTMLInputEvent = {target: {value: string, name: string}};

interface PropsInterface {
    
}

export const Search: FC<PropsInterface> = () => {
    const {value, setValue} = useContext(SearchContext)!;

    const onChange = useCallback((event: HTMLInputEvent) => {
        //SyntheticEvent<HTMLInputElement> => не стабильный
        //ChangeEventHandler<HTMLInputElement>
        //(event: {target: {value: string}})
        setValue(event.target.value);
    }, [setValue]);

    const onClear = useCallback(() => {
        setValue("");
    }, [setValue]);

  return (
    <FlexRow width='100%' justifyContent='center' gap='10px' margin='20px 0'>
        <input value={value} onChange={onChange} placeholder='Search'/>
        <GiCancel size="30px" onClick={(event) => onClear()}/>
    </FlexRow>
  )
}
function setValue(value: string) {
    throw new Error('Function not implemented.');
}

