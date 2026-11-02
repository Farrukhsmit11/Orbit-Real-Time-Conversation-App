import AudioOutlined from "@ant-design/icons/es/icons/AudioOutlined";
import FileImageOutlined from "@ant-design/icons/es/icons/FileImageOutlined";
import PaperClipOutlined from "@ant-design/icons/es/icons/PaperClipOutlined";
import SendOutlined from "@ant-design/icons/es/icons/SendOutlined";
import SmileOutlined from "@ant-design/icons/es/icons/SmileOutlined";
import Button from "antd/es/button";
import Input from "antd/es/input";

export default function MessageComposer() {
  return (
    <div className="composer-wrap">
      <div className="composer-toolbar">
        <div className="composer-tools">
          <Button type="text" shape="circle" icon={<PaperClipOutlined />} aria-label="Attach file" />
          <Button type="text" shape="circle" icon={<FileImageOutlined />} aria-label="Attach photo" />
          <span className="tool-divider" />
          <Button type="text" shape="circle" icon={<SmileOutlined />} aria-label="Emoji picker" />
        </div>
        <span className="composer-hint">Press <kbd>↵</kbd> to send</span>
      </div>
      <div className="composer-input-row">
        <Input.TextArea autoSize={{ minRows: 1, maxRows: 4 }} readOnly placeholder="Write a message..." bordered={false} aria-label="Write a message" />
        <Button type="text" className="voice-button" shape="circle" icon={<AudioOutlined />} aria-label="Voice message" />
        <Button className="send-button" type="primary" shape="circle" icon={<SendOutlined />} aria-label="Send message" />
      </div>
    </div>
  );
}
