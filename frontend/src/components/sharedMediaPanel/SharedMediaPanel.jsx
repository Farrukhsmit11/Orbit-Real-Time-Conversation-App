import CodeOutlined from "@ant-design/icons/es/icons/CodeOutlined";
import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import FileImageOutlined from "@ant-design/icons/es/icons/FileImageOutlined";
import FileOutlined from "@ant-design/icons/es/icons/FileOutlined";
import PictureOutlined from "@ant-design/icons/es/icons/PictureOutlined";
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import Button from "antd/es/button";

export default function SharedMediaPanel() {
  return (
    <aside className="media-drawer">
      <div className="drawer-heading"><strong>Shared media</strong><Button type="text" icon={<EllipsisOutlined />} aria-label="More shared media" /></div>
      <span className="drawer-caption">PHOTOS & FILES</span>
      <div className="media-grid">
        <div className="media-placeholder media-one"><PictureOutlined /></div>
        <div className="media-placeholder media-two"><FileImageOutlined /></div>
        <div className="media-placeholder media-three"><PictureOutlined /></div>
      </div>
      <span className="drawer-caption">RECENT FILES</span>
      <div className="shared-file"><span className="file-icon"><FileOutlined /></span><span><strong>Dashboard-preview.png</strong><small>2.4 MB · Today</small></span></div>
      <div className="shared-file"><span className="file-icon file-purple"><CodeOutlined /></span><span><strong>Design handoff</strong><small>Figma · Yesterday</small></span></div>
      <div className="drawer-link"><span>Conversation details</span><SearchOutlined /></div>
      <div className="drawer-link"><span>Notifications</span><span className="drawer-toggle"><i /></span></div>
    </aside>
  );
}
