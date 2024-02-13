import React from 'react';
import styled from "styled-components";
import { linkedin, github, figma, dribble} from './Icons';
import { Bio } from '../../data/constants';

const SocailIconContainer = () => {
  return (
    <IconStyled>
      <a href={Bio.linkedin} target='display' >{linkedin}</a>
      <a href={Bio.github} target='display' >{github}</a>
      <a href={Bio.figma} target='display' >{figma}</a>
      <a href={Bio.dribble} target='display' >{dribble}</a>
    </IconStyled>
  )
}

const IconStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 75%;
    justify-content: space-between;

    a{
      color: black;
      text-decoration: none; 
    }
    a:hover {
      color:#854CE6;
    }
`;

export default SocailIconContainer;
