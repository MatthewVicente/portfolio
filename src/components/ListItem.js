import React from "react";
import styled from "styled-components";
import ListBody from "./ListBody";

const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  background: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  color: #707070;
  margin-bottom: 1em;
  cursor: pointer;

  .leftWall {
    width: 0.5em;
    background-color: ${props => props.completed ? "green" : "red"};
  }
`;
console.log("RENDERED");
const ListItem = ({toDo, handleOnClick}) => {
  return <Item completed={toDo.completed} onClick={() => handleOnClick(toDo.id)}>
    <div className="leftWall">
			<ListBody name={toDo.name} description={toDo.description}/>
    </div>
  </Item>
}

export default ListItem;