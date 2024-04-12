import CardUserInfo from "./CardUserInfo";
import FollowButton from "./FollowButton";
import type UserCard from "../utils/userCard";

export default function UserCard({
  userName,
  userAccount,
  initialIsFollowing,
}: UserCard): JSX.Element {
  return (
    <article className="flex w-full gap-2 items-center justify-between border border-slate-700 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
      <CardUserInfo userName={userName} userAccount={userAccount} />
      <FollowButton initialIsFollowing={initialIsFollowing} />
    </article>
  );
}
