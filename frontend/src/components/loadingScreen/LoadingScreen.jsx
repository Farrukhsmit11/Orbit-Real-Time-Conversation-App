import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import { Brand } from "../index"

export default function LoadingScreen() {
  return (
    <main className="loading-screen" aria-live="polite" aria-label="Loading Orbit workspace">
      <div className="loading-content">
        <Brand />
        <div className="loading-orbit"><span /><i /><b /></div>
        <h1>Making space for your conversations</h1>
        <p>Your workspace is getting ready.</p>
        <div className="loading-status"><LoadingOutlined spin /><span>Preparing your workspace</span></div>
        <div className="loading-progress"><span /></div>
      </div>
      <div className="loading-footer"><span>PRIVATE BY DESIGN</span><i /> MADE FOR YOUR PEOPLE</div>
    </main>
  );
}
