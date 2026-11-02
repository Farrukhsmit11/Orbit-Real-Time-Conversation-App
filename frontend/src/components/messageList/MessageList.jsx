import SoundOutlined from "@ant-design/icons/es/icons/SoundOutlined";

export default function MessageList({ messages, person }) {
  return (
    <div className="message-stream" aria-label={`Messages with ${person.name}`}>
      <div className="date-divider"><span>Today, October 24</span></div>

      <div className="voice-preview">
        <span className="voice-avatar">M</span>
        <span className="voice-play"><SoundOutlined /></span>
        <span className="voice-duration">0:18</span>
      </div>
      <div className="typing-indicator"><span className="typing-avatar avatar-lilac">M</span><span> is typing</span><i /><i /><i /></div>
    </div>
  );
}
