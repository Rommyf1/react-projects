import type UserName from "../utils/userName";

export default function UserName({ userName }: UserName): JSX.Element {
  return (
    <h3 className="text-white text-sm font-bold leading-none">{userName}</h3>
  );
}
