import Brand from "../brand/Brand.jsx";

export default function AuthStory() {
  return (
    <section className="login-story">
      <Brand className="login-brand" />

      <div className="story-glow story-glow-one" />
      <div className="story-glow story-glow-two" />

      <div className="story-content">
        <div className="story-eyebrow">
          <span /> YOUR PEOPLE, A LITTLE CLOSER
        </div>

        <h1>
          Good conversations
          <br />
          change <span>everything.</span>
        </h1>

        <p>
          A calmer, more considered space for the people and ideas you care
          about.
        </p>

        <div className="story-preview">
          <div className="preview-topline">
            <span className="preview-live">
              <i /> live conversation
            </span>
            <span>just now</span>
          </div>
          <div className="preview-message preview-message-left">
            <span className="preview-avatar avatar-lilac">M</span>
            <span>Have you seen the new space? It feels like us ✨</span>
          </div>
          <div className="preview-message preview-message-right">
            <span>Already home 💜</span>
          </div>
          <div className="preview-reaction">
            💜 <span>2</span>
          </div>
          <div className="preview-typing">
            <i />
            <i />
            <i />
            <span>Maya is typing</span>
          </div>
        </div>

        <div className="story-people">
          <div className="people-stack">
            <span className="avatar-lilac">M</span>
            <span className="avatar-mint">J</span>
            <span className="avatar-coral">N</span>
            <span className="avatar-blue">A</span>
          </div>
          <div>
            <strong>A little more connected.</strong>
            <span>Join your favorite conversations.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
