import { useState } from "react";
import {
  AudioOutlined,
  FileImageOutlined,
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

const emojis = ["✨", "😊", "💜", "🙌", "👍"];

const MessageComposer = ({ onSend }) => {
  const [draft, setDraft] = useState("");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
    setEmojiPickerOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };

  return (
    <form className="composer-wrap" onSubmit={handleSubmit}>
      <div className="composer-toolbar">
        <div className="composer-tools">
          <Button type="text" shape="circle" icon={<PaperClipOutlined />} aria-label="Attach file" />
          <Button type="text" shape="circle" icon={<FileImageOutlined />} aria-label="Attach photo" />
          <span className="tool-divider" />
          <span className="emoji-anchor">
            <Button
              type="text"
              shape="circle"
              icon={<SmileOutlined />}
              aria-label="Choose emoji"
              aria-expanded={emojiPickerOpen}
              onClick={() => setEmojiPickerOpen((open) => !open)}
            />
            {emojiPickerOpen && (
              <span className="emoji-picker">
                {emojis.map((emoji) => (
                  <button
                    type="button"
                    key={emoji}
                    onClick={() => {
                      setDraft((current) => `${current}${emoji}`);
                      setEmojiPickerOpen(false);
                    }}
                    aria-label={`Add ${emoji}`}
                  >
                    {emoji}
                  </button>
                ))}
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="composer-input-row">
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 4 }}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              send();
            }
          }}
          placeholder="Write a message..."
          bordered={false}
          aria-label="Write a message"
        />
        <Button
          type="text"
          className="voice-button"
          shape="circle"
          icon={<AudioOutlined />}
          aria-label="Voice message"
        />
        <Button
          className="send-button"
          type="primary"
          shape="circle"
          icon={<SendOutlined />}
          htmlType="submit"
          disabled={!draft.trim()}
          aria-label="Send message"
        />
      </div>
    </form>
  );
};

export default MessageComposer;
