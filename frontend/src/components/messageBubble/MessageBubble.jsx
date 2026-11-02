import CheckOutlined from "@ant-design/icons/es/icons/CheckOutlined";
import FolderOpenOutlined from "@ant-design/icons/es/icons/FolderOpenOutlined";
import PictureOutlined from "@ant-design/icons/es/icons/PictureOutlined";
import Button from "antd/es/button";

export default function MessageBubble({ item, grouped = false }) {
  const mine = item.from === "me";
  return (
    <div className={`message-row ${mine ? "message-row-mine" : ""}`}>
      {!mine && <span className={`message-avatar ${grouped ? "avatar-hidden" : ""}`}>M</span>}
      <div className="message-content">
        <div className={`bubble ${mine ? "bubble-mine" : "bubble-theirs"}`}>
          <div className="bubble-actions">
            {["💜", "😂", "🙌", "➕"].map((emoji) => <button key={emoji} aria-label={`React with ${emoji}`}>{emoji}</button>)}
          </div>
          {item.attachment ? (
            <div className="attachment-card">
              <div className="attachment-preview"><PictureOutlined /></div>
              <div className="attachment-copy"><strong>Dashboard-preview.png</strong><span>PNG image · 2.4 MB</span></div>
              <Button type="text" shape="circle" icon={<FolderOpenOutlined />} aria-label="Download attachment" />
            </div>
          ) : <p>{item.text}</p>}
          {item.reaction && <span className="reaction-pill">{item.reaction} <span>1</span></span>}
        </div>
        <div className={`message-meta ${mine ? "meta-mine" : ""}`}>
          <span>{item.time}</span>
          {mine && <span className="read-receipt" aria-label={item.read ? "Read" : "Sent"}><CheckOutlined /><CheckOutlined /></span>}
        </div>
      </div>
    </div>
  );
}
