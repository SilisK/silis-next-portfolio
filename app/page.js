import Image from "next/image";
import pathfinder_img from "./assets/home/pathfinder-icon.png";
import valorant_insight_img from "./assets/home/phoenix-valorant.png";
import development_img from "./assets/home/development-icon.png";

const projects = [
  {
    title: "Pathfinder",
    subtitle: "Pursuit Capstone",
    image: pathfinder_img,
    link: "https://pathfinder-game.netlify.app",
  },
  {
    title: "Valorant Insight",
    subtitle: "Gaming Resource",
    image: valorant_insight_img,
    link: "https://valorant-insight.vercel.app",
  },
  {
    title: "Unannounced (TBD)",
    subtitle: "Mobile Game",
    image: development_img,
    link: "",
  },
];

export default function Home() {
  return (
    <main className="grid text-white">
      {/* Welcome + nice video */}
      <header className="home-header _2048-container py-14 flex flex-col items-center">
        <div className="home-header-text drop-shadow-md">
          <h1 className="text-5xl lg:text-9xl">Silis Kleemoff</h1>
          <p className="text-xl lg:text-5xl">Game & Web Developer</p>
        </div>
      </header>
      {/* A little bit about the website */}
      <section className="home-sec1 w-full grid gap-11 drop-shadow-md p-10 lg:p-20">
        <h1>
          Since 2018, I have engaged in the exploration of video game creation,
          and in 2022, I branched out to web development.
        </h1>
      </section>
      {/* My Projects */}
      <section className="home-projects w-full grid items-start gap-11 drop-shadow-md">
        <h1 className="text-5xl font-semibold p-10 lg:text-9xl lg:p-20">
          My Projects
        </h1>
        <div className="project-container px-5 pb-20 grid gap-20 place-items-center lg:grid-flow-col">
          {projects.map((project) => (
            <div
              key={crypto.randomUUID()}
              className="project-banner relative bg-gradient-to-b from-zinc-600 grid place-items-center border-4 rounded-xl"
            >
              <Image src={project.image} alt={project.title} />
              <div className="project-info grid place-items-center gap-1 p-3">
                <div className="grid place-items-center tracking-widest leading-10">
                  <b className="text-xl">{project.title}</b>
                  <b>{project.subtitle}</b>
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" className="w-full">
                    <button className="bg-zinc-700 p-3 rounded w-full">
                      Visit
                    </button>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
