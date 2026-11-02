import {
  CodeOutlined,
  EllipsisOutlined,
  FileImageOutlined,
  FileOutlined,
  PictureOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const SharedMediaPanel = () => {
  return (
    <aside className="media-drawer">
      <div className="drawer-heading">
        <strong>Shared media</strong>
        <Button type="text" icon={<EllipsisOutlined />} />
      </div>

      <span className="drawer-caption">PHOTOS & FILES</span>

      <div className="media-grid">
        <PictureOutlined />
        <FileImageOutlined />
        <PictureOutlined />
      </div>

      <span className="drawer-caption">RECENT FILES</span>

      <div className="shared-file">
        <FileOutlined />
        <span>
          <strong>Dashboard-preview.png</strong>
          <small>2.4 MB · Today</small>
        </span>
      </div>

      <div className="shared-file">
        <CodeOutlined />
        <span>
          <strong>Design handoff</strong>
          <small>Figma · Yesterday</small>
        </span>
      </div>

      <div className="drawer-link">
        <span>Conversation details</span>
        <SearchOutlined />
      </div>

      <div className="drawer-link">
        <span>Notifications</span>
        <span className="drawer-toggle">
          <i />
        </span>
      </div>
    </aside>
  );
};

export default SharedMediaPanel;