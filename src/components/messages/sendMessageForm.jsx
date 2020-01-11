import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


export function SendMessageForm(props) {

  const [message, setMessage] = useState('')

  var handleSubmit = (e) => {
    e.preventDefault()
    props.click(message);
  }

  return (
    <form
      className="send-message-form"
      onSubmit={handleSubmit}
    >
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
  )
}
export default SendMessageForm;
