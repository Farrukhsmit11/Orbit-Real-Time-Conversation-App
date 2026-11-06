import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import MoonOutlined from "@ant-design/icons/es/icons/MoonOutlined";
import PictureOutlined from "@ant-design/icons/es/icons/PictureOutlined";
import PlusOutlined from "@ant-design/icons/es/icons/PlusOutlined";
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import SunOutlined from "@ant-design/icons/es/icons/SunOutlined";
import TeamOutlined from "@ant-design/icons/es/icons/TeamOutlined";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { useState } from "react";
import { AvatarFace, Brand } from "../index";


export default function ConversationSidebar({
  items = [],
  activeName,
  onSelect,
  open = false,
  colorMode = "dark",
  onColorModeChange,
}) {
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((person) =>
    `${person.name} ${person.preview}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <Brand />
        <div className="theme-toggle" role="group" aria-label="Color mode">
          <Button
            type="text"
            className={colorMode === "light" ? "theme-toggle-active" : ""}
            icon={<SunOutlined />}
            aria-label="Light mode"
            aria-pressed={colorMode === "light"}
            title="Light mode"
            onClick={() => onColorModeChange?.("light")}
          />
          <Button
            type="text"
            className={colorMode === "dark" ? "theme-toggle-active" : ""}
            icon={<MoonOutlined />}
            aria-label="Dark mode"
            aria-pressed={colorMode === "dark"}
            title="Dark mode"
            onClick={() => onColorModeChange?.("dark")}
          />
        </div>
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
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="section-heading">
        <span>MESSAGES <span className="thread-count">{items.length}</span></span>
        <Button type="text" size="small" icon={<EllipsisOutlined />} aria-label="Message options" />
      </div>

      <div className="thread-list">
        {filteredItems.length ? filteredItems.map((person) => (
          <button
            className={`thread-item ${activeName === person.name ? "thread-active" : ""}`}
            key={person.name}
            onClick={() => onSelect?.(person)}
            aria-current={activeName === person.name ? "page" : undefined}
          >
            <AvatarFace person={person} size={40} online={person.online} />
            <span className="thread-text">
              <span className="thread-title">
                <strong>{person.name}</strong>
                <time>{person.time}</time>
              </span>
              <span className="thread-preview">{person.preview}</span>
            </span>
            {person.unread > 0 && <span className="unread-count">{person.unread}</span>}
          </button>
        )) : (
          <p className="empty-search">No conversations found</p>
        )}
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
          <Button
            type="text"
            icon={colorMode === "light" ? <MoonOutlined /> : <SunOutlined />}
            aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
            onClick={() => onColorModeChange?.(colorMode === "light" ? "dark" : "light")}
          />
          <span className="footer-spacer" />
          <Button type="text" icon={<EllipsisOutlined />} aria-label="Settings" />
        </div>
      </div>
    </aside>
  );
}
