import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { DashBoardContext } from "../../contexts/DashboardContext";
import { styled } from "styled-components";
import { StyledLink } from "../shared/Link";


export const Dashboard = () => {
  const { user } = useContext(DashBoardContext)!;

  // if(!user) return <h1>Not authorized!</h1>

  const dashboardsLinks = [
    { link: "users", text: "Users" },
    { link: "posts", text: "Posts" },
    { link: "comments", text: "Comments" },
    { link: "settings", text: "Settings" },
  ];

  return (
    <FlexColumn width="100%">
      <FlexRow
        width="100%"
        height="70px"
        alignItems="center"
        justifyContent="center"
        background="gray"
      >
        {dashboardsLinks.map(({ link, text }) => (
          <StyledLink to={link}>{text}</StyledLink>
        ))}
      </FlexRow>
      {/* <h1>Hello {user?.email}</h1> */}
      <Outlet />
    </FlexColumn>
  );
};
