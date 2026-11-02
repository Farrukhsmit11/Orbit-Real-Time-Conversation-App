import Avatar from "antd/es/avatar";
import Badge from "antd/es/badge";

export default function AvatarFace({ person, size = 42, online = false }) {
  return (
    <Badge dot={online} color="#63d9a1" offset={[-3, size - 3]} className="thread-avatar-badge">
      <Avatar size={size} className={`avatar-face avatar-${person.color}`}>
        {person.initials}
      </Avatar>
    </Badge>
  );
}
