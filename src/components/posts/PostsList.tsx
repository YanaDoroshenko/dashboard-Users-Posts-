import React, { useCallback, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardPostsInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { PostCard } from "./PostCard";

export const PostsList = () => {
  //useMemo
  const options = useMemo(() => ({ method: "GET" }), []);

  const { data, isLoading } = useFetchData<DashboardPostsInterface[]>(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );

  // console.log("Posts", data, isLoading);

  //useCallback
  // const fn = useCallback(() => {
  //   const a = Math.random() * 100;
  //   console.log(data, a)
  // }, [data]);

  return (
    <FlexColumn
      width="100%"
      justifyContent="center"
      margin="10px 50px"
      className="posts"
    >
      <h2>Posts</h2>

      {data?.map((post) => (
        <PostCard post={post} />
      ))}
    </FlexColumn>
  );
};
