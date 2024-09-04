import { Helmet } from 'react-helmet-async';
import Chat from '../components/chat/chat';

function ChatPage (): JSX.Element {
  return (
    <main className='container'>
      <Helmet>
        <title>Chat</title>
      </Helmet>
      <Chat/>
    </main>
  )
}

export default ChatPage;
