import React, { FC } from "react";
import { DashboardUserInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { ContentWrapper } from "../shared/Common";

interface PropsInterface {
  user: DashboardUserInterface;
}

export const UserItem: FC<PropsInterface> = ({ user }) => {
  const { name, email, phone } = user;

  return (
    <ContentWrapper>
      <FlexColumn>
        <h3>{name}</h3>
        <p>{email}</p>

        <p>{phone}</p>
      </FlexColumn>
    </ContentWrapper>
  );
};
