import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        className="p-1"
        src="/logo.png"
        sizes="(max-width: 600px) 100vw, 600px"
      />
    </Avatar>
  );
};
