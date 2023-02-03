import Image from "next/image";
import fetchProfile from "../lib/fetchProfile";

export default async function Home() {
  let response: DTO = await fetchProfile(1);

  return (
    <div>
      <Image
        src={response.data.profilePictureUrl}
        alt={response.data.name}
        width={48}
        height={48}
      />
    </div>
  );
}
