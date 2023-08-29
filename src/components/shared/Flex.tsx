import styled from "styled-components";

interface FlexPropsInterface {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  gap?: string;
  color?: string;
  flexDirection?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
  display: flex;

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "start"};
  background: ${(props) => props.background || "none"};
  gap: ${(props) => props.gap || "none"};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;
export const FlexColumn = styled(Flex)`
  flex-direction: column;

  .auth-link{
    display:flex;
    margin: auto;
    font-size: 24px;
  }
  .wrapper {
    /* width: 20px;
    height: 20px; */
    background-color: #abfdab;

  }
  .input-auth{
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #9c9c9c;
  }
  .input-auth::placeholder{
    padding-left: 5px;
    color: #a9a9a9;
    font-size: 16px;
  }
  .submit-btn{
    width: 305px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #abfdab;
    color: #858585;
    font-size: 18px;
  }
  /* .posts{
    margin: auto;
    justify-content: center;
  } */
  .post-card{
    border-radius: 10px;
    padding: 20px;
    line-height: 30px;
  }
  .show-hide-btn{
    width: 180px;
    height: 40px;
    margin-top: 20px;
    border: none;
    background-color: #59a7fb;
    color: #ffffff;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 5px;
  }
`;
