import {
  AudioOutlined,
  FileImageOutlined,
  PaperClipOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

const MessageComposer = () => {
  return (
    <div className="composer-wrap">
      <div className="composer-toolbar">
        <div className="composer-tools">
          <Button
            type="text"
            shape="circle"
            icon={<PaperClipOutlined />}
            aria-label="Attach file"
          />

          <Button
            type="text"
            shape="circle"
            icon={<FileImageOutlined />}
            aria-label="Attach photo"
          />

          <span className="tool-divider" />

          <Button
            type="text"
            shape="circle"
            icon={<SmileOutlined />}
            aria-label="Emoji picker"
          />
        </div>
      </div>

      <div className="composer-input-row">
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 4 }}
          readOnly
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
          aria-label="Send message"
        />
      </div>
    </div>
  );
};

export default MessageComposer;
