import "./AuthStoryLeft.css";

export default function AuthStory() {
  return (
    <section className="login-story">
      <div className="story-glow story-glow-one" />
      <div className="story-glow story-glow-two" />

      <div className="story-copy">
        <div className="story-eyebrow">
          <span /> YOUR PEOPLE, A LITTLE CLOSER
        </div>
        <h1>
          Conversations that
          <br />
          make life feel <span>closer.</span>
        </h1>
        <p>A little more space for the people and conversations that matter.</p>
      </div>

      <div className="story-art" aria-hidden="true">
        <span className="art-orbit art-orbit-one" />
        <span className="art-orbit art-orbit-two" />
        <div className="art-message art-message-one">
          <span className="art-avatar art-avatar-maya">M</span>
          <span>Made it home. That was lovely ✨</span>
        </div>
        <div className="art-message art-message-two">
          <span>Already planning the next one 💜</span>
        </div>
        <div className="art-message art-message-three">
          <span className="art-avatar art-avatar-james">J</span>
          <span>Count me in!</span>
        </div>
        <div className="art-typing" role="status" aria-label="Maya is typing">
          <span className="art-avatar art-avatar-maya">M</span>
          <span className="art-typing-copy">Maya is typing</span>
          <span className="art-typing-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="art-reaction">💜 <span>3</span></div>
        <div className="art-caption">
          <span className="art-live-dot" />
          YOUR PEOPLE ARE JUST A MESSAGE AWAY
        </div>
      </div>

      <div className="story-content">
        <div className="story-people">
          <div className="people-stack">
            <span className="avatar-lilac">M</span>
            <span className="avatar-mint">J</span>
            <span className="avatar-coral">N</span>
            <span className="avatar-blue">A</span>
          </div>
          <div>
            <strong>A little more connected.</strong>
            <span>Come pick up where you left off.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
