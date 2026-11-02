export const conversations = [
  { name: "Maya Chen", initials: "MC", color: "lilac", preview: "That sounds like a plan ✨", time: "2m", unread: 2, online: true },
  { name: "Design friends", initials: "DF", color: "coral", preview: "Nina: dropped the moodboard", time: "18m", unread: 5, group: true },
  { name: "James Wilson", initials: "JW", color: "mint", preview: "Voice message · 0:18", time: "1h", online: true, voice: true },
  { name: "Product launch", initials: "PL", color: "blue", preview: "You: here's the final checklist", time: "3h", group: true },
  { name: "Olivia Bennett", initials: "OB", color: "gold", preview: "See you this weekend!", time: "Yesterday" },
  { name: "Frontend team", initials: "FT", color: "plum", preview: "Marco: fixed the animation bug", time: "Mon", group: true },
];

export const messages = [
  { from: "them", text: "Hey Alex! How's the new project coming along?", time: "10:24 AM" },
  { from: "me", text: "Really well actually! The team has been moving so fast. We're putting the finishing touches on the new dashboard this week.", time: "10:26 AM", read: true },
  { from: "them", text: "Ooh, exciting. Do you have a preview I could take a look at?", time: "10:27 AM" },
  { from: "me", text: "Absolutely — take a peek at the latest build. The new flow feels much more natural now.", time: "10:29 AM", read: true, attachment: true },
  { from: "them", text: "This looks incredible! Love the little details in the navigation.", time: "10:31 AM", reaction: "💜" },
  { from: "them", text: "That sounds like a plan ✨", time: "10:32 AM" },
];
