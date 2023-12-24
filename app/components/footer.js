import linkedin_icon from "../assets/gizmos/linkedin-icon.png";
import github_icon from "../assets/gizmos/github-icon.png";
import instagram_icon from "../assets/gizmos/instagram-icon.png";
import Image from "next/image";

const profiles = [
  { link: "https://www.linkedin.com/in/silis-kleemoff", image: linkedin_icon },
  { link: "https://github.com/SilisK", image: github_icon },
  { link: "https://www.instagram.com/silis_kleemoff", image: instagram_icon },
];

export default function Footer() {
  return (
    <footer className="w-full text-white text-center grid gap-20 py-40 items-center justify-center">
      <h1 className="text-7xl">GET IN TOUCH</h1>
      <div className="grid gap-3 text-xl">
        <u>EMAIL ADDRESS</u>
        <p>kleemoffdeveloper@gmail.com</p>
      </div>
      <div className="grid grid-flow-col place-items-center gap-3 text-xl">
        {profiles.map((profile) => (
          <a
            className="w-max"
            href={profile.link}
            target="_blank"
            key={crypto.randomUUID()}
          >
            <Image
              src={profile.image}
              width={64}
              height={64}
              alt={profile.link}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
