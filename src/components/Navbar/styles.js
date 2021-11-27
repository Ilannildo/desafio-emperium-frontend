import styled from "styled-components";

export const Item = styled.li`
  & a {
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
`;

export const List = styled.ul`
  list-style: none;
  & li {
    display: inline-block;
    padding: 0px 20px;

    & a {
      transition: all 0.3s ease 0s;
    }

    & a:hover {
      color: #ffe300;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #000;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
