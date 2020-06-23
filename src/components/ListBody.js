import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  #name {
		font-size: 2em;
  }

  #description {
    font-size: 0.8em;
  }
`;

const ListBody = ({name, description}) => {
  return <Wrapper>
		<span id="name">{name}</span>
		<span id="description">{description}</span>
	</Wrapper>
}

export default ListBody;