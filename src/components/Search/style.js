import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 12hv;
  width: 100%;
  max-width: 700px;
  min-height: 12px;
  position: relative;
  flex-direction: column;
  /* overflow: hidden; */
  padding: 30px;
  & input {
    flex: 1;
    border: none;
    appearance: none;
    font-size: 14px;
    outline: none;
    height: 60px;
    line-height: 5px;
    border-radius: 20px;
    padding: 12px 18px;
    align-items: center;
    background-color: #fff;
    opacity: 0.9;
    width: 100%;
  }
`;
