# Orbit Chat Project Guide

This document explains the current project structure, how the UI is assembled, where its data comes from, and which parts are still placeholders. It describes the code as it exists now; some UI elements look interactive but are not connected to working chat or account services yet.

## 1. What this project is

Orbit is a React single-page chat UI prototype. It uses Vite for development/builds, Ant Design for inputs/buttons/icons, and plain CSS for the page layouts and visual styling.

The current app is primarily a visual demo:

- The login form advances to the chat-loading screen without authenticating.
- Conversation and message examples are local mock data.
- There is no API client, server, database, WebSocket, or persistence layer in the current source.
- Redux is installed and mounted, but the configured store currently has no reducers.

## 2. Start and build the app

From the project directory:

```bash
npm install
npm run dev
```

Other scripts in `package.json`:

| Command | Purpose |
| --- | --- |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the built bundle locally. |
| `npm run lint` | Run ESLint over the configured source and config files. |

The app's HTML entry is `index.html`; Vite loads `src/main.jsx` from it.

## 3. Screen flow

`src/App.jsx` is currently the screen-level controller. It stores a `screen` string in local React state and chooses which page/component to render:

1. Initial state is `"loading"`; the app displays `LoadingScreen`.
2. After about 850 ms, it changes to `"login"` and displays `Login`.
3. Submitting the login form calls the `onLogin` callback and changes the screen to `"chat-loading"`.
4. After about 1100 ms, it changes to `"chat"` and displays `ChatPage`.
5. The chat page receives an `onLogout` callback that takes the app back to `"login"`.

These are demo transitions, not real authentication. The app does not currently use route definitions for these screens even though `BrowserRouter` is mounted in `src/main.jsx`.

## 4. Project layout

```text
index.html
src/
  App.jsx                         Screen flow and demo transitions
  main.jsx                        React mount and application providers
  styles.css                      Central CSS import list
  styles/
    global.css                    Global styles and CSS variables
  data/
    mockChat.js                   Example conversations and message records
  store/
    store.js                      Redux store configuration (currently empty)
    features/reducers/
      authReducer.jsx             Auth slice placeholder
  components/
    index.jsx                     Shared component export barrel
    authStoryLeft/                Marketing/story panel used by login
    avatarFace/                   Avatar and online badge
    brand/                        Orbit wordmark
    chatHeader/                   Chat title/actions area
    chatLoadingPreview/           Chat loading skeleton
    conversationSidebar/          Conversation list/sidebar UI
    loadingScreen/                Initial loading screen
    messageBubble/                Message bubble presentation
    messageComposer/              Message input/action bar
    messageList/                  Message stream area
    sharedMediaPanel/             Shared media/details panel
  pages/
    ChatPage.jsx                  Main chat layout
    ChatPage.css                  Chat layout styling
    ChatLoading.css               Chat loading styling
    auth/
      login/                      Login page and its styles
      signUp/                     Signup placeholder and styles
```

Most individual components have similarly named CSS files. Those styles are gathered through imports in `src/styles.css`, rather than imported by each component.

## 5. Application setup

`src/main.jsx` creates the React root and wraps `App` in:

- `React.StrictMode` for development checks.
- Ant Design's `ConfigProvider`, setting the dark theme, shared colors, radius, and font.
- Redux's `Provider` with the store from `src/store/store.js`.
- `BrowserRouter`.

The fonts DM Sans and Manrope are loaded from Google Fonts in `index.html`.

`src/styles.css` imports global styles, component styles, and page styles. `src/styles/global.css` defines the base colors and CSS variables such as `--surface`, `--muted`, `--text`, and `--accent`.

## 6. Main UI pieces

### Loading screen

`src/components/loadingScreen/LoadingScreen.jsx` renders the initial branded loading view. `App.jsx` controls how long it is visible.

### Login page

`src/pages/auth/login/Login.jsx` builds a two-column layout:

- `AuthStory` from `src/components/authStoryLeft/AuthStoryLeft.jsx` provides the left promotional panel.
- The right panel contains the email/password form, social buttons, legal links, and demo note.
- The story panel's visual styles currently live in `src/pages/auth/login/Login.css`.

The submit handler prevents normal form submission and calls `onLogin`; there is no credential check or server request. The social buttons, forgot-password link, and account link are presentation-only at present.

### Signup page

`src/pages/auth/signUp/SignUp.jsx` currently renders only the text `SignUp`. It is not imported or selected by `App.jsx`, and there is no signup flow wired into the visible login link yet.

### Chat page

`src/pages/ChatPage.jsx` is intended to compose the main chat screen:

- `ConversationSidebar` for navigation and the conversation list.
- `ChatHeader` for the selected person's header/actions.
- A pinned-message banner.
- `MessageList` for the conversation area.
- `MessageComposer` for entering a message.
- `SharedMediaPanel` for media and conversation details.

`src/pages/ChatPage.css` controls the overall desktop/mobile chat layout. `ConversationSidebar.css` and the other component CSS files handle their respective pieces.

### Reusable components

| Component | Responsibility |
| --- | --- |
| `Brand` | Orbit wordmark, optionally with an extra CSS class. |
| `AuthStory` | Reusable left-side brand/story visual for authentication screens. |
| `AvatarFace` | Displays initials and an optional online badge from a person object. |
| `ConversationSidebar` | Sidebar structure, search area, profile, and footer controls. |
| `ChatHeader` | Chat header, contact avatar, and action buttons. |
| `MessageList` | Current message-stream presentation area. |
| `MessageBubble` | Renders one message record, including attachment/reaction presentation. |
| `MessageComposer` | Composer toolbar and textarea/send controls. |
| `SharedMediaPanel` | Static shared-media and conversation-details panel. |
| `LoadingScreen` | Initial branded loading view. |
| `ChatLoadingPreview` | Skeleton/loading layout intended for the chat transition. |

`src/components/index.jsx` re-exports shared components so pages can import from a common entry point.

## 7. Data and state

### Mock chat data

`src/data/mockChat.js` exports:

- `conversations`: sample people/groups with names, initials, color, preview, time, unread count, and optional online/group/voice flags.
- `messages`: sample message records with sender (`"me"` or `"them"`), text, time, and optional read/attachment/reaction flags.

This is static in-memory data. It is not loaded from a database or API.

### State today

- Screen transitions are local `useState` state in `src/App.jsx`.
- `src/store/store.js` configures Redux with an empty reducer map.
- `src/store/features/reducers/authReducer.jsx` contains an unfinished empty slice and is not registered in the store.
- The UI does not currently persist account or conversation state between reloads.

If adding real authentication or chat state, first decide whether the state belongs in a page/component or Redux, then connect it to an API/service. Avoid treating the current demo callbacks as authentication.

## 8. Current behavior versus appearance

Several controls are visual affordances and should not be assumed to have working behavior:

- Search, sidebar/footer icons, call buttons, social login, and several links are not connected to services.
- `MessageComposer` uses a read-only textarea, and its buttons do not send or attach anything.
- `MessageList` currently shows a date/voice/typing preview rather than mapping over the provided `messages`.
- The sidebar currently renders its frame but has an empty thread list.
- The pinned-message close button has no dismissal behavior.
- `SignUp` is a placeholder and is not part of the current screen flow.

## 9. Known incomplete code to address before extending the chat flow

The current chat path has unfinished references that need to be resolved before the chat UI can work end-to-end:

- `src/pages/ChatPage.jsx` uses `useState`, `activePerson`, and `setActivePerson` without defining/importing them. It also renders `SharedMediaPanel` without importing it.
- `src/components/chatLoadingPreview/ChatLoadingPreview.jsx` references `index`, `AvatarFace`, and `conversations` without defining/importing them.
- `src/components/conversationSidebar/ConversationSidebar.jsx` currently accepts only `open`, so it is not yet wired to conversation data, selection, or the logout callback expected by the app/page design.
- `src/components/chatHeader/ChatHeader.jsx` accepts a `person`, but its contact-name/status markup is commented out.

These are source-level gaps, not just missing backend integrations. Fix them before relying on the transition from login to a usable chat screen.

## 10. Where to make common changes

| Change | Start here |
| --- | --- |
| Change which screen appears or transition timing | `src/App.jsx` |
| Change the login UI | `src/pages/auth/login/Login.jsx` and `src/pages/auth/login/Login.css` |
| Add the signup UI | `src/pages/auth/signUp/SignUp.jsx`, its CSS, and the screen/navigation flow |
| Change the reusable auth story panel | `src/components/authStoryLeft/AuthStoryLeft.jsx` |
| Change conversation sample data | `src/data/mockChat.js` |
| Change the chat page composition | `src/pages/ChatPage.jsx` |
| Change a reusable UI component | Its folder under `src/components/` |
| Change shared colors or global behavior | `src/styles/global.css` |
| Add or remove a stylesheet | `src/styles.css` |
| Add real auth/chat persistence | Store/service/API layer (not implemented yet) |

## 11. Suggested implementation order

For a real usable signup and chat flow, a practical sequence is:

1. Complete `SignUp` and make navigation between login and signup explicit.
2. Fix the unresolved chat-page and loading-preview references listed above.
3. Wire `conversations` into the sidebar and maintain the selected conversation in state.
4. Render message records in `MessageList`.
5. Make the composer controlled and implement send behavior (initially local state is fine).
6. Add backend authentication and message APIs only after the UI/data contracts are clear.
7. Add tests for screen transitions, conversation selection, and message sending as those behaviors are implemented.
