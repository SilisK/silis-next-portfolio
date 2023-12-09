import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <b>Projects</b>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
