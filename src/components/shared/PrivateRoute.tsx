import React, { PropsWithChildren, useContext, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import { DashBoardContext } from "../../contexts/DashboardContext";

interface PropsInterface {
  fallback: string;
}

export const PrivateRoute: FC<PropsWithChildren & PropsInterface> = ({
  children,
  fallback,
}) => {
  const { user } = useContext(DashBoardContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(fallback);
  }, [user, navigate, fallback]);

  return <>{children || null}</>;
};
