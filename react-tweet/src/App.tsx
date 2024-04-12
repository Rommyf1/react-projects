import users from "./data/users";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 w-[25rem]">
      <h1 className="text-5xl text-white my-2">Hello World</h1>
      <h2 className="text-white my-4">Estos son los usuarios Actuales:</h2>
      {users.map(({ id, userName, userAccount, isFollowing }) => {
        return (
          <UserCard
            key={id}
            userName={userName}
            userAccount={userAccount}
            initialIsFollowing={isFollowing}
          />
        );
      })}
    </div>
  );
}
