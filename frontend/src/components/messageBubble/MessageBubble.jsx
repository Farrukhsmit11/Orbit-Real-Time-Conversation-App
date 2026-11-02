const MessageBubble = ({ className, children }) => {
  return <div className={`bubble ${className}`}>{children}</div>;
};

export default MessageBubble;
