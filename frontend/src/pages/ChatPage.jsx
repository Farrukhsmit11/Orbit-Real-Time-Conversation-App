import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import Button from "antd/es/button";
import { ChatHeader, ConversationSidebar, MessageList, ChatLoadingPreview } from "../components/index.jsx";
import { conversations, messages } from "../data/mockChat.js";

export default function ChatPage({ onLogout }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="app-shell">
      <ConversationSidebar
        items={conversations}
        activeName={activePerson.name}
        onSelect={(person) => { setActivePerson(person); setSidebarOpen(false); }}
        onLogout={onLogout}
        open={sidebarOpen}
      />
      {sidebarOpen && <button className="mobile-backdrop" onClick={() => setSidebarOpen(false)} aria-label="Close conversations" />}

      <section className="chat-panel">
        <ChatHeader person={activePerson} onMenu={() => setSidebarOpen(true)} />
        <div className="chat-layout">
          <section className="conversation">
            <div className="pinned-banner">
              <div className="pin-icon">⌑</div>
              <div className="pinned-copy"><span>PINNED MESSAGE</span><strong>Design review moved to Thursday, 2:30 PM</strong></div>
              <Button type="text" icon={<CloseOutlined />} aria-label="Dismiss pinned message" />
            </div>
            <MessageList messages={messages} person={activePerson} />
            <MessageComposer />
          </section>
          <SharedMediaPanel />
        </div>
      </section>
    </main>
  );
}

<ChatLoadingPreview />