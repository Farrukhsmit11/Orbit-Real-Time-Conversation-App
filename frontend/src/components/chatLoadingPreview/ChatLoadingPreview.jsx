import { Skeleton } from "antd";

const ChatLoadingPreview = () => {
  return (
    <main className="chat-loading-page">
      <aside className="loading-sidebar">
        <Skeleton />
      </aside>

      <section className="loading-chat-panel">
        <AvatarFace person={conversations[0]} size={20} />
        <span>Loading your conversations…</span>
      </section>
    </main>
  );
};

export default ChatLoadingPreview;
