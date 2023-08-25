import { create } from 'domain';
import React, { Dispatch, createContext, useState, FC, PropsWithChildren } from 'react';
import { UserInterface } from '../types';

interface DashboardContextInterface {
    user: UserInterface | null,
    setUser: Dispatch<UserInterface | null>
}

export const DashBoardContext = createContext<DashboardContextInterface | null>(null);

export const DashboardContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<UserInterface | null>(null)
  return (
    <DashBoardContext.Provider value={{user, setUser}}>
        {children}
    </DashBoardContext.Provider>
  )
}
