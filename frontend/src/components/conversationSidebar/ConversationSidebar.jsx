import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import MoonOutlined from "@ant-design/icons/es/icons/MoonOutlined";
import PictureOutlined from "@ant-design/icons/es/icons/PictureOutlined";
import PlusOutlined from "@ant-design/icons/es/icons/PlusOutlined";
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import TeamOutlined from "@ant-design/icons/es/icons/TeamOutlined";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { AvatarFace, Brand } from "../index"


export default function ConversationSidebar({ open = false }) {

  return (
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <Brand />
        <Button className="new-chat-button" type="text" icon={<PlusOutlined />} aria-label="New message" />
      </div>

      <button className="profile-switcher" aria-label="Return to sign in">

        <AvatarFace person={{ initials: "A", color: "you" }} size={38} online />

        <span className="profile-details"><strong>Alex Morgan</strong><small><i className="status-dot" /> Available</small></span>
        <EllipsisOutlined className="profile-more" />
      </button>

      <div className="search-wrap">
        <SearchOutlined />
        <Input
          placeholder="Search anything..."
          bordered={false}
          aria-label="Search conversations"
        />
      </div>

      <div className="section-heading">
        <span>MESSAGES <span className="thread-count">12</span></span>
        <Button type="text" size="small" icon={<EllipsisOutlined />} aria-label="Message options" />
      </div>

      <div className="thread-list">
      </div>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <span className="upgrade-icon">✳</span>
          <div><strong>Make room for more</strong><span>Upgrade your workspace</span></div>
          <span className="upgrade-arrow">↗</span>
        </div>
        <div className="sidebar-footer">
          <Button type="text" icon={<TeamOutlined />} aria-label="Contacts" />
          <Button type="text" icon={<PictureOutlined />} aria-label="Media" />
          <Button type="text" icon={<MoonOutlined />} aria-label="Dark mode" />
          <span className="footer-spacer" />
          <Button type="text" icon={<EllipsisOutlined />} aria-label="Settings" />
        </div>
      </div>
    </aside>
  );
}
