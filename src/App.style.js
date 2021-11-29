import styled from "styled-components";

export const WrapperTitle = styled.div`
  text-align: center;
  margin-top: 5%;
`;

export const Title = styled.h1`
  color: #010305;
  font-size: 30px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 12hv;
  width: 100%;
  max-width: 790px;
  min-height: 12px;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  padding: 30px;
`;

export const Content = styled.div`
flex-direction: row;
color: #333;
font-size: 22px;
font-weight: bold;
cursor: pointer;
height: 300px;
line-height: 10px;
z-index: 8;
border-radius: 5px;
padding: 12px 18px;
justify-content: space-between;
align-items: center;
background-color: #fff;
opacity: 0.8;
& span {
  color: #444;
}
`;

export const Itens = styled.ul`
  list-style: none;
  & li {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2px;
    cursor: pointer;
    height: 90px;
    line-height: 10px;
    border-radius: 5px;
    padding: 18px 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    opacity: 0.8;
    &:hover {
      background: #f6f6f6;
    }
  }
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 12hv;
  width: 100%;
  max-width: 300px;
  min-height: 70%;
  position: relative;
  flex-direction: column;
`;

export const ButtonDetail = styled.button`
  font-size: 12px;
  color: #005076;
  line-height: 5px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonFav = styled.button`
  font-size: 12px;
  line-height: 5px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

