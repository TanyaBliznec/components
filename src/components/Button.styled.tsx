import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";


type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  btnType: "primary" | "outlined"
  active?: boolean
};


export const StyledBtn = styled.button<StyledBtnPropsType>`
border: none;
padding: 10px 20px;
color: #ffffff;
font-size: ${props => props.fontSize || '2rem'};
font-weight: bold;
border-radius: 10px;

${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
border: 2px solid ${props => props.color || "#e920d4"};
color: ${props => props.color || "#e920d4"};
background-color: transparent;

&:hover{
  border-color: #31de3d;
  color: #31de3d;
  background-color: transparent;
  
}

`}

${props => props.btnType === "primary" && css<StyledBtnPropsType>`
  background-color: ${props => props.color || "#e920d4"};
  color: #ffffff;
  &:hover{
  background-color: #31de3d;
  
}

`}

${props => props.active && css<StyledBtnPropsType>`
box-shadow:  5px 5px 5px 5px #7ca77f79;
`}

`