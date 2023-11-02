import { useState } from "react";
const Message =()=>{
    const[messages,setMessages]=useState(["메세지1", "메세지2", "메세지3"]);

    const lis =messages.map((m,i) =><li key={i}>{m}</li>);
    const handleClick =()=>{
        setMessages(messages.concat('메시지4'));
        
    }

    return(
        <ul>
            <ul>{lis}</ul>
            <button type ="button" onClick={handleClick}>메시지 추가</button>
        </ul>
    );
};

export default Message;