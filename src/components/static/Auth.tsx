import React, { useContext, useState } from "react";
import { FlexColumn } from "../shared/Flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { DashBoardContext } from "../../contexts/DashboardContext";
import { useCounter } from "../../hooks/useCounter";

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
    // console.log(formData, "formData");
  const [_, setlocalStorageFormData] =
    useLocalStorage("userData");

  // const [counter, increment, decrement] = useCounter(); 

  const navigate = useNavigate();

  const {setUser} = useContext(DashBoardContext)!;

  const onSubmit = () => {

    if(formData.email === "admin" && formData.password === "admin"){
      setlocalStorageFormData(formData);
      setUser(formData);
      navigate("/dashboard");
    } else {
      alert("Wrong data");
    };

    setFormData({ email: "", password: "" });
  };

  return (
    <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Authorization</h1>
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        className="input-auth"
      />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        className="input-auth"
      />
      <button onClick={onSubmit} className="submit-btn">Submit</button>

      {/* <button onClick={increment}>{counter}</button> */}
    </FlexColumn>
  );
};
