import { useState } from "react";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import Button from "antd/es/button";
import {
  ChatHeader,
  ConversationSidebar,
  MessageComposer,
  MessageList,
  SharedMediaPanel,
} from "../components/index.jsx";
import { conversations } from "../data/mockChat.js";

const Dashboard = () => {
  const [colorMode, setColorMode] = useState(() =>
    localStorage.getItem("orbit-color-mode") === "light" ? "light" : "dark",
  );
  const [conversationItems, setConversationItems] = useState(() =>
    conversations.map((person, index) => index === 0 ? { ...person, unread: 0 } : person),
  );
  const [activePerson, setActivePerson] = useState({ ...conversations[0], unread: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pinnedVisible, setPinnedVisible] = useState(true);
  const [messagesByConversation, setMessagesByConversation] = useState(() =>
    Object.fromEntries(conversations.map((person) => [person.name, person.messages])),
  );

  const changeColorMode = (mode) => {
    localStorage.setItem("orbit-color-mode", mode);
    setColorMode(mode);
  };

  const selectConversation = (person) => {
    const selectedPerson = conversationItems.find((item) => item.name === person.name) || person;
    setConversationItems((items) => items.map((item) => (
      item.name === person.name ? { ...item, unread: 0 } : item
    )));
    setActivePerson({ ...selectedPerson, unread: 0 });
    setSidebarOpen(false);
  };

  const sendMessage = (text) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const message = { from: "me", text, time, read: false };

    setMessagesByConversation((currentMessages) => ({
      ...currentMessages,
      [activePerson.name]: [...(currentMessages[activePerson.name] || []), message],
    }));
    setConversationItems((items) => items.map((person) => (
      person.name === activePerson.name
        ? { ...person, preview: text, time: "now", unread: 0 }
        : person
    )));
    setActivePerson((person) => ({ ...person, preview: text, time: "now", unread: 0 }));
    setPinnedVisible(false);
  };

  return (
    <main className={`app-shell${colorMode === "light" ? " light-mode" : ""}`}>
      <ConversationSidebar
        items={conversationItems}
        activeName={activePerson.name}
        onSelect={selectConversation}
        open={sidebarOpen}
        colorMode={colorMode}
        onColorModeChange={changeColorMode}
      />
      {sidebarOpen && (
        <button
          className="mobile-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close conversations"
        />
      )}

      <section className="chat-panel">
        <ChatHeader person={activePerson} onMenu={() => setSidebarOpen(true)} />

        <div className="chat-layout">
          <section className="conversation">
            {pinnedVisible && (
              <div className="pinned-banner">
                <div className="pin-icon" aria-hidden="true">⌁</div>
                <div className="pinned-copy">
                  <span>PINNED MESSAGE</span>
                  <strong>Design review moved to Thursday, 2:30 PM</strong>
                </div>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  aria-label="Dismiss pinned message"
                  onClick={() => setPinnedVisible(false)}
                />
              </div>
            )}
            <MessageList
              messages={messagesByConversation[activePerson.name] || []}
              person={activePerson}
            />
            <MessageComposer onSend={sendMessage} />
          </section>

          <SharedMediaPanel />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
