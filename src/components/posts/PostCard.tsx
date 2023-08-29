import React, { FC, useCallback, useMemo, useState } from "react";
import { DashboardPostsInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { ContentWrapper } from "../shared/Common";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "../users/types";
import { FaRegUserCircle } from "react-icons/fa";
import { CommentInterface } from "../comments/types";

interface PropsInterface {
  post: DashboardPostsInterface;
}

export const PostCard: FC<PropsInterface> = ({ post }) => {
  const options = useMemo(() => ({ method: "GET" }), []);
  const [isShowComments, setIsShowComments] = useState<boolean>(false);
  const { title, body, id, userId } = post;

  const { data, isLoading } = useFetchData<DashboardUserInterface>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    options
  );

  const { data: comments, isLoading: isCommentsLoading } =
    useFetchData<CommentInterface[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      options
    );

  const onShowCommentsToogle = useCallback(() => {
    setIsShowComments(!isShowComments);
  }, [isShowComments]);

  // console.log(data, "USER");

  return (
    <ContentWrapper flexDirection="column" className="post-card">
      <FlexRow alignItems="center" gap="10px">
        <FaRegUserCircle size={40} />
        <h3>{data?.username}</h3>
        <span>{data?.email}</span>
      </FlexRow>
      <h3>{title}</h3>
      <p>{body}</p>

      <button onClick={() => onShowCommentsToogle()} className="show-hide-btn">
        {isShowComments ? "Hide" : "Show"} comments
      </button>

      {isShowComments && (
        <FlexColumn width="100%">
          {comments?.map(({ name, body }) => (
            <ContentWrapper flexDirection="row">
              <h3>{name}</h3>
              <p>{body}</p>
            </ContentWrapper>
          ))}
        </FlexColumn>
      )}
    </ContentWrapper>
  );
};
