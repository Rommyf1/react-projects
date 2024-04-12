import type UserAccount from "../utils/userAccount";

export default function UserAccount({ userAccount }: UserAccount): JSX.Element {
  return (
    <span className="text-slate-500 text-sm hover:underline">
      @{userAccount}
    </span>
  );
}
