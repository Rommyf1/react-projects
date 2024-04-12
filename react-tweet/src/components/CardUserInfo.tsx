import Avatar from "./Avatar";
import UserName from "./UserName";
import UserAccount from "./UserAccount";
import type CardUserInfo from "../utils/cardUserInfo";

export default function CardUserInfo({ userName, userAccount }: CardUserInfo) {
  const userImageURL = `https://unavatar.io/twitter/${userAccount}`;

  return (
    <section className="flex items-center gap-2">
      <Avatar imageURL={userImageURL} userAccount={userAccount} />
      <div>
        <UserName userName={userName} />
        <UserAccount userAccount={userAccount} />
      </div>
    </section>
  );
}
