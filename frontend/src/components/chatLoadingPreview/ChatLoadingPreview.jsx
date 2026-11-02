
const ChatLoadingPreview = () => {
    return (
        <main className="chat-loading-page">
            <aside className="loading-sidebar">
                <div className="skeleton skeleton-brand" />
                <div className="skeleton skeleton-profile" />
                <div className="skeleton skeleton-search" />
                <div className="skeleton skeleton-label" />
                <div className="skeleton-thread" key={index}><span className="skeleton skeleton-avatar" /><span className="skeleton-lines"><i className="skeleton" /><i className="skeleton" /></span></div>
            </aside>
            <section className="loading-chat-panel">
                <div className="skeleton-chat-header"><span className="skeleton skeleton-avatar" /><span className="skeleton-lines"><i className="skeleton" /><i className="skeleton" /></span></div>
                <div className="skeleton-message-list">
                    <span className="skeleton skeleton-date" />
                    <span className="skeleton skeleton-bubble bubble-short" />
                    <span className="skeleton skeleton-bubble bubble-right" />
                    <span className="skeleton skeleton-bubble bubble-wide" />
                    <span className="skeleton skeleton-bubble bubble-right bubble-medium" />
                </div>
                <div className="skeleton skeleton-composer" />
                <div className="loading-caption"><AvatarFace person={conversations[0]} size={20} /><span>Loading your conversations…</span></div>
            </section>
        </main>
    )
}

export default ChatLoadingPreview