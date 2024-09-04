import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ChatItem from './chat-item';
import './chat.css'

function Chat (): JSX.Element {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState<string>('')
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://echo.websocket.org/');
    setSocket(ws);

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
    
    ws.onerror = () => {
      toast.warn('Ошибка');
    };

    return () => {
      ws.close();
    };

  }, [])
    
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (socket && newMessage) {
      socket.send(newMessage);
        setNewMessage(''); 
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value)
  }

  return (
    <div className='chat'>
      <div className='chat_messages'>
        {messages.map((message, i) => <ChatItem key={i} message={message}/>)}
      </div>
      <form onSubmit={handleSubmit} className='chat__form'>
        <div>
          <input
            type='text'
            name='message'
            onChange={handleMessageChange}
            value={newMessage}
          ></input>
          <button
            type='submit'
            disabled={!socket}
            className='chat__form__btn'
            ><svg id="Capa_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='chat__form__svg'><g><path d="m500.017 237.629-393.721-172.402c-16.375-7.168-33.253 9.253-26.552 25.879l32.342 80.249-103.078 67.891c-12.002 7.905-12.018 25.591 0 33.507l103.078 67.891-32.342 80.249c-6.695 16.611 10.158 33.054 26.552 25.879l393.721-172.402c16.2-7.199 15.753-29.741 0-36.741zm-443.605 18.37 70.953-46.733 18.834 46.733-18.834 46.733zm78.775 134.369c8.731-21.665 37.24-92.402 46.074-114.322h215.007zm46.075-154.416c-9.162-22.734-36.532-90.646-46.074-114.322l261.081 114.322z" fill="#000000"></path></g></svg></button>
        </div>
      </form>
    </div>
  )
}

export default Chat;