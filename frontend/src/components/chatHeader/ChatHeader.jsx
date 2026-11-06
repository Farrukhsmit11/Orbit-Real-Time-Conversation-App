import {
  EllipsisOutlined,
  MenuOutlined,
  PhoneOutlined,
  PictureOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Button } from "antd";
import { AvatarFace } from "../index";

const ChatHeader = ({ person, onMenu }) => {
  return (
    <header className="chat-header">
      <Button
        className="mobile-menu"
        type="text"
        icon={<MenuOutlined />}
        onClick={onMenu}
        aria-label="Open conversations"
      />

      <AvatarFace person={person} online={person.online} size={42} />

      <div className="chat-contact">
        <strong className="contact-name">{person.name}</strong>
        <span className="contact-status">
          {person.online ? "Online now" : person.group ? "Group conversation" : "Last seen recently"}
        </span>
      </div>

      <div className="header-actions">
        <Button
          type="text"
          shape="circle"
          icon={<PhoneOutlined />}
          aria-label="Voice call"
        />

        <Button
          type="text"
          shape="circle"
          icon={<VideoCameraOutlined />}
          aria-label="Video call"
        />

        <span className="header-divider" />

        <Button
          type="text"
          shape="circle"
          icon={<PictureOutlined />}
          aria-label="Shared media"
        />

        <Button
          type="text"
          shape="circle"
          icon={<EllipsisOutlined />}
          aria-label="More options"
        />
      </div>
    </header>
  );
};

export default ChatHeader;
