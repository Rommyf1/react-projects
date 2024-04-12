import type Avatar from "../utils/avatar";

export default function Avatar({ imageURL, userAccount }: Avatar): JSX.Element {
  const userImageDescription = `Foto de Perfil del usuario @${userAccount}`;

  return (
    <header className="flex items-center justify-center w-10">
      <img className="rounded-full" src={imageURL} alt={userImageDescription} />
    </header>
  );
}
