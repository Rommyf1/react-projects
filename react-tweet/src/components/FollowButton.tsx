import { useState } from "react";
import type FollowButton from "../utils/followButton";

export default function FollowButton({
  initialIsFollowing,
}: FollowButton): JSX.Element {
  const [isFollowing, setFollowing] = useState(initialIsFollowing);

  let followMessage: JSX.Element = isFollowing ? (
    <>
      <span className="block group-hover:hidden w-32">Siguiendo</span>
      <span className="hidden group-hover:block text-red-500 w-32">
        Dejar de Seguir
      </span>
    </>
  ) : (
    <span>Seguir</span>
  );

  const handleClick = () => {
    return setFollowing(!isFollowing);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-sky-500 group text-white py-1 px-4 rounded-2xl text-sm font-semibold hover:bg-sky-600 ${
        isFollowing
          ? "bg-transparent border border-white hover:bg-transparent hover:border hover:border-red-600"
          : ""
      }`}
    >
      {followMessage}
    </button>
  );
}
