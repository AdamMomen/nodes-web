import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import MessageList from '../messages/MessagesList.jsx'
//set room name id here !!!

var socketed = io('http://192.168.137.82:5001/room1', {
    query: {
        'authorization': `bearer ${localStorage.getItem("token")}`
    }
})

socketed.on('connect', () => {
    console.log('connected!');
})

export function Chat(props) {
    //using hooks
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState()

    useEffect(() => {
        setSocket(socketed)
    }, [])

    var handleSubmit = (e) => {
        e.preventDefault()
        //submit the form 
        socket.emit("MESSAGE", { "message": message, "senderNickname": 'adam' })
        setMessage('');
    }

    return (
        < div >

            <div className="">
                <MessageList />
                <form
                    onSubmit={handleSubmit}
                    style={{ padding: "100px" }}>
                    <Input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        multiline></Input>
                    <Button
                        type="submit"
                        color="secondary"
                    >Send</Button>
                </form>
            </div>
        </div >
    )
}
export default Chat