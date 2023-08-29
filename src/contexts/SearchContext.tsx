import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { DashboardPostsInterface } from "../components/posts/types";
import { DashboardUserInterface } from "../components/users/types";
import { useFetchData } from "../hooks/useFetchData";

interface SearchContextInterface {
  users: DashboardUserInterface[];
  posts: DashboardPostsInterface[];

  value: string;
  setValue: Dispatch<string>;

  userSearchResults: DashboardUserInterface[];
  postSearchResults: DashboardPostsInterface[];
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const { data: users } = useFetchData<DashboardUserInterface[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { data: posts } = useFetchData<DashboardPostsInterface[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const userSearchResults = users ? users.filter(({ name }) => name.includes(value)) : [];

  const postSearchResults = posts ? posts.filter(({ title }) => title.includes(value)) : [];

  return (
    <SearchContext.Provider
      value={{
        value,
        setValue,
        users: users || [],
        posts: posts || [],
        userSearchResults,
        postSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
