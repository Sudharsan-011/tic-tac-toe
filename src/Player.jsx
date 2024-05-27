import { useState } from 'react';

export default function Player({ name, symbol,isActive ,onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);

    function changeName(event){
        console.log(event.target)
        setEditedName(event.target.value) 

        if(isEditing==true){
            onChangeName(symbol,editedName)
        }
    }

    function update() {
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
    }
let playerName=<span className='player-name'>{editedName}</span>

    if (isEditing){
        playerName= <input type='text' required value={editedName}  onChange={changeName}></input>
    }
    return (
        <li className = { isActive ? 'active' : undefined} >
            {console.log("is active:",isActive)}
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={update}>{isEditing ? "Save" : "Edit"}</button>
        </li>
      );
}
    