import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import MenuOutlined from "@ant-design/icons/es/icons/MenuOutlined";
import PhoneOutlined from "@ant-design/icons/es/icons/PhoneOutlined";
import PictureOutlined from "@ant-design/icons/es/icons/PictureOutlined";
import VideoCameraOutlined from "@ant-design/icons/es/icons/VideoCameraOutlined";
import Button from "antd/es/button";
import { AvatarFace } from "../index"

export default function ChatHeader({ person, onMenu }) {
  return (
    <header className="chat-header">
      <Button className="mobile-menu" type="text" icon={<MenuOutlined />} onClick={onMenu} aria-label="Open conversations" />
      <AvatarFace person={person} online={person.online} size={42} />
      <div className="connection-pill"><i className="connection-dot" /><span>Connected</span></div>
      <div className="header-actions">
        <Button type="text" shape="circle" icon={<PhoneOutlined />} aria-label="Voice call" />
        <Button type="text" shape="circle" icon={<VideoCameraOutlined />} aria-label="Video call" />
        <span className="header-divider" />
        <Button type="text" shape="circle" icon={<PictureOutlined />} aria-label="Shared media" />
        <Button type="text" shape="circle" icon={<EllipsisOutlined />} aria-label="More options" />
      </div>
    </header>
  );
}
