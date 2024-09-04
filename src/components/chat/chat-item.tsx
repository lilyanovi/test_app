type ChatItemProps = {
  message: string;
}

function ChatItem ({message}: ChatItemProps): JSX.Element {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default ChatItem;